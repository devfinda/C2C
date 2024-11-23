import type { W2Input, C2CInput } from '../types';

const STATE_TAX_RATES: Record<string, number> = {
  CA: 9.3,
  NY: 6.85,
  TX: 0,
  // Add more states as needed
};

const FEDERAL_TAX_BRACKETS = [
  { threshold: 0, rate: 10 },
  { threshold: 11000, rate: 12 },
  { threshold: 44725, rate: 22 },
  { threshold: 95375, rate: 24 },
  { threshold: 182100, rate: 32 },
  { threshold: 231250, rate: 35 },
  { threshold: 578125, rate: 37 },
];

export function calculateEffectiveTaxRate(income: number): number {
  let totalTax = 0;
  let remainingIncome = income;

  for (let i = 0; i < FEDERAL_TAX_BRACKETS.length; i++) {
    const currentBracket = FEDERAL_TAX_BRACKETS[i];
    const nextBracket = FEDERAL_TAX_BRACKETS[i + 1];
    
    const bracketIncome = nextBracket
      ? Math.min(remainingIncome, nextBracket.threshold - currentBracket.threshold)
      : remainingIncome;
    
    totalTax += (bracketIncome * currentBracket.rate) / 100;
    remainingIncome -= bracketIncome;

    if (remainingIncome <= 0) break;
  }

  return (totalTax / income) * 100;
}

export function calculateW2Net(data: W2Input): number {
  const taxableIncome = data.salary - data.hsaContribution - (data.salary * data.match401k / 100);
  const federalTaxRate = calculateEffectiveTaxRate(taxableIncome);
  const stateTaxRate = STATE_TAX_RATES[data.state] || 0;
  
  const totalTaxRate = federalTaxRate + stateTaxRate;
  const taxes = taxableIncome * (totalTaxRate / 100);
  
  return taxableIncome - taxes;
}

export function calculateC2CNet(data: C2CInput): number {
  const grossIncome = data.hourlyRate * 8 * (data.workingDays - data.vacationDays);
  const totalDeductions = Object.values(data.deductions).reduce((sum, val) => sum + val, 0);
  const taxableIncome = grossIncome - totalDeductions;
  
  const effectiveTaxRate = calculateEffectiveTaxRate(taxableIncome);
  const adjustedTaxRate = effectiveTaxRate * (1 - data.taxRateReduction / 100);
  
  const totalTaxRate = adjustedTaxRate + data.selfEmploymentTax;
  const taxes = taxableIncome * (totalTaxRate / 100);
  
  return taxableIncome - taxes;
}

export function calculateEquivalentRate(w2Data: W2Input, c2cData: C2CInput): number {
  const w2Net = calculateW2Net(w2Data);
  const workingHours = 8 * (c2cData.workingDays - c2cData.vacationDays);
  
  // Add 30% premium to account for benefits and job security
  const targetNet = w2Net * 1.3;
  
  // Reverse calculate the required hourly rate
  const effectiveTaxRate = calculateEffectiveTaxRate(targetNet);
  const adjustedTaxRate = effectiveTaxRate * (1 - c2cData.taxRateReduction / 100);
  const totalTaxRate = adjustedTaxRate + c2cData.selfEmploymentTax;
  
  const requiredGross = targetNet / (1 - totalTaxRate / 100);
  return requiredGross / workingHours;
}