import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from './ui/Input';
import { InfoTooltip } from './InfoTooltip';
import { helpText } from '../data/helpText';
import type { C2CInput, DeductionCategory } from '../types';

interface C2CFormProps {
  data: C2CInput;
  onChange: (data: C2CInput) => void;
}

export function C2CForm({ data, onChange }: C2CFormProps) {
  const handleChange = (field: keyof C2CInput) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange({ ...data, [field]: Number(e.target.value) });
  };

  const handleDeductionChange = (category: keyof DeductionCategory) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    onChange({
      ...data,
      deductions: {
        ...data.deductions,
        [category]: Number(e.target.value)
      }
    });
  };

  const toggleAdvanced = () => {
    onChange({ ...data, showAdvanced: !data.showAdvanced });
  };

  const totalDeductions = Object.values(data.deductions).reduce((sum, val) => sum + val, 0);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center">
          <Input
            label="Hourly Rate"
            type="number"
            value={data.hourlyRate}
            onChange={handleChange('hourlyRate')}
            prefix="$"
            min={0}
          />
          <InfoTooltip
            id="hourly-rate-tooltip"
            title={helpText.c2c.hourlyRate.title}
            content={helpText.c2c.hourlyRate.content}
          />
        </div>
      </div>
      
      <div>
        <div className="flex items-center">
          <Input
            label="Working Days per Year"
            type="number"
            value={data.workingDays}
            onChange={handleChange('workingDays')}
            suffix="days"
            min={0}
            max={365}
          />
          <InfoTooltip
            id="working-days-tooltip"
            title={helpText.c2c.workingDays.title}
            content={helpText.c2c.workingDays.content}
          />
        </div>
      </div>
      
      <div>
        <div className="flex items-center">
          <Input
            label="Vacation Days"
            type="number"
            value={data.vacationDays}
            onChange={handleChange('vacationDays')}
            suffix="days"
            min={0}
          />
          <InfoTooltip
            id="c2c-vacation-tooltip"
            title={helpText.c2c.vacationDays.title}
            content={helpText.c2c.vacationDays.content}
          />
        </div>
      </div>
      
      <div>
        <div className="flex items-center">
          <Input
            label="Self-Employment Tax"
            type="number"
            value={data.selfEmploymentTax}
            onChange={handleChange('selfEmploymentTax')}
            suffix="%"
            min={0}
            max={100}
          />
          <InfoTooltip
            id="self-employment-tax-tooltip"
            title={helpText.c2c.selfEmploymentTax.title}
            content={helpText.c2c.selfEmploymentTax.content}
          />
        </div>
      </div>

      <div>
        <div className="flex items-center">
          <Input
            label="Tax Rate Reduction"
            type="number"
            value={data.taxRateReduction}
            onChange={handleChange('taxRateReduction')}
            suffix="%"
            min={0}
            max={100}
          />
          <InfoTooltip
            id="tax-reduction-tooltip"
            title={helpText.c2c.taxRateReduction.title}
            content={helpText.c2c.taxRateReduction.content}
          />
        </div>
      </div>

      <div className="border-t pt-6">
        <button
          type="button"
          onClick={toggleAdvanced}
          className="flex items-center text-indigo-600 hover:text-indigo-700"
        >
          {data.showAdvanced ? (
            <ChevronUp className="h-4 w-4 mr-1" />
          ) : (
            <ChevronDown className="h-4 w-4 mr-1" />
          )}
          Advanced Deductions
        </button>

        {data.showAdvanced && (
          <div className="mt-4 space-y-6">
            <div>
              <div className="flex items-center">
                <Input
                  label="Home Office Expenses"
                  type="number"
                  value={data.deductions.homeOffice}
                  onChange={handleDeductionChange('homeOffice')}
                  prefix="$"
                  min={0}
                />
                <InfoTooltip
                  id="home-office-tooltip"
                  title={helpText.c2c.deductions.homeOffice.title}
                  content={helpText.c2c.deductions.homeOffice.content}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <Input
                  label="Travel & Transportation"
                  type="number"
                  value={data.deductions.travelTransport}
                  onChange={handleDeductionChange('travelTransport')}
                  prefix="$"
                  min={0}
                />
                <InfoTooltip
                  id="travel-tooltip"
                  title={helpText.c2c.deductions.travelTransport.title}
                  content={helpText.c2c.deductions.travelTransport.content}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <Input
                  label="Office Equipment & Supplies"
                  type="number"
                  value={data.deductions.officeEquipment}
                  onChange={handleDeductionChange('officeEquipment')}
                  prefix="$"
                  min={0}
                />
                <InfoTooltip
                  id="equipment-tooltip"
                  title={helpText.c2c.deductions.officeEquipment.title}
                  content={helpText.c2c.deductions.officeEquipment.content}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <Input
                  label="Business Operations"
                  type="number"
                  value={data.deductions.businessOps}
                  onChange={handleDeductionChange('businessOps')}
                  prefix="$"
                  min={0}
                />
                <InfoTooltip
                  id="operations-tooltip"
                  title={helpText.c2c.deductions.businessOps.title}
                  content={helpText.c2c.deductions.businessOps.content}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <Input
                  label="Health Insurance"
                  type="number"
                  value={data.deductions.healthInsurance}
                  onChange={handleDeductionChange('healthInsurance')}
                  prefix="$"
                  min={0}
                />
                <InfoTooltip
                  id="health-insurance-tooltip"
                  title={helpText.c2c.deductions.healthInsurance.title}
                  content={helpText.c2c.deductions.healthInsurance.content}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <Input
                  label="Retirement Contributions"
                  type="number"
                  value={data.deductions.retirement}
                  onChange={handleDeductionChange('retirement')}
                  prefix="$"
                  min={0}
                />
                <InfoTooltip
                  id="retirement-tooltip"
                  title={helpText.c2c.deductions.retirement.title}
                  content={helpText.c2c.deductions.retirement.content}
                />
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total Deductions:</span>
                <span className="text-indigo-600">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                  }).format(totalDeductions)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}