import React, { useState, useMemo } from 'react';
import { Calculator as CalculatorIcon, DollarSign, Briefcase, Building2 } from 'lucide-react';
import { W2Form } from './W2Form';
import { C2CForm } from './C2CForm';
import { ComparisonResults } from './ComparisonResults';
import { calculateW2Net, calculateC2CNet, calculateEquivalentRate } from '../utils/calculations';
import type { W2Input, C2CInput } from '../types';

const initialW2State: W2Input = {
  salary: 100000,
  hsaContribution: 0,
  match401k: 3,
  vacationDays: 20,
  state: 'CA'
};

const initialC2CState: C2CInput = {
  hourlyRate: 75,
  workingDays: 260,
  vacationDays: 15,
  selfEmploymentTax: 15.3,
  taxRateReduction: 20,
  showAdvanced: false,
  deductions: {
    homeOffice: 0,
    travelTransport: 0,
    officeEquipment: 0,
    businessOps: 0,
    healthInsurance: 0,
    retirement: 0
  }
};

export function Calculator() {
  const [w2Data, setW2Data] = useState<W2Input>(initialW2State);
  const [c2cData, setC2CData] = useState<C2CInput>(initialC2CState);

  const results = useMemo(() => {
    const w2Net = calculateW2Net(w2Data);
    const c2cNet = calculateC2CNet(c2cData);
    const equivalentRate = calculateEquivalentRate(w2Data, c2cData);

    return {
      w2Gross: w2Data.salary,
      w2Net,
      c2cGross: c2cData.hourlyRate * 8 * (c2cData.workingDays - c2cData.vacationDays),
      c2cNet,
      equivalentRate
    };
  }, [w2Data, c2cData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <CalculatorIcon className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            W2 vs C2C Income Calculator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare your potential earnings as a W2 employee versus a C2C contractor
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Building2 className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">W2 Details</h2>
            </div>
            <W2Form data={w2Data} onChange={setW2Data} />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <Briefcase className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">C2C Details</h2>
            </div>
            <C2CForm data={c2cData} onChange={setC2CData} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-6">
            <DollarSign className="h-6 w-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900">Comparison Results</h2>
          </div>
          <ComparisonResults results={results} />
        </div>
      </div>
    </div>
  );
}