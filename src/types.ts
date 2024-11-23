export interface W2Input {
  salary: number;
  hsaContribution: number;
  match401k: number;
  vacationDays: number;
  state: string;
}

export interface DeductionCategory {
  homeOffice: number;
  travelTransport: number;
  officeEquipment: number;
  businessOps: number;
  healthInsurance: number;
  retirement: number;
}

export interface C2CInput {
  hourlyRate: number;
  workingDays: number;
  vacationDays: number;
  selfEmploymentTax: number;
  taxRateReduction: number;
  showAdvanced: boolean;
  deductions: DeductionCategory;
}