import React from 'react';
import { Input } from './ui/Input';
import { Select } from './ui/Select';
import { InfoTooltip } from './InfoTooltip';
import { helpText } from '../data/helpText';
import type { W2Input } from '../types';

const states = [
  { value: 'CA', label: 'California' },
  { value: 'NY', label: 'New York' },
  { value: 'TX', label: 'Texas' },
  // Add more states as needed
];

interface W2FormProps {
  data: W2Input;
  onChange: (data: W2Input) => void;
}

export function W2Form({ data, onChange }: W2FormProps) {
  const handleChange = (field: keyof W2Input) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const value = field === 'state' ? e.target.value : Number(e.target.value);
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center">
          <Input
            label="Annual Salary"
            type="number"
            value={data.salary}
            onChange={handleChange('salary')}
            prefix="$"
            min={0}
          />
          <InfoTooltip
            id="salary-tooltip"
            title={helpText.w2.salary.title}
            content={helpText.w2.salary.content}
          />
        </div>
      </div>
      
      <div>
        <div className="flex items-center">
          <Input
            label="Employer HSA Contribution"
            type="number"
            value={data.hsaContribution}
            onChange={handleChange('hsaContribution')}
            prefix="$"
            min={0}
          />
          <InfoTooltip
            id="hsa-tooltip"
            title={helpText.w2.hsaContribution.title}
            content={helpText.w2.hsaContribution.content}
          />
        </div>
      </div>
      
      <div>
        <div className="flex items-center">
          <Input
            label="401K Match Percentage"
            type="number"
            value={data.match401k}
            onChange={handleChange('match401k')}
            suffix="%"
            min={0}
            max={100}
          />
          <InfoTooltip
            id="401k-tooltip"
            title={helpText.w2.match401k.title}
            content={helpText.w2.match401k.content}
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
            id="vacation-tooltip"
            title={helpText.w2.vacationDays.title}
            content={helpText.w2.vacationDays.content}
          />
        </div>
      </div>
      
      <div>
        <div className="flex items-center">
          <Select
            label="State of Residence"
            value={data.state}
            onChange={handleChange('state')}
            options={states}
          />
          <InfoTooltip
            id="state-tooltip"
            title={helpText.w2.state.title}
            content={helpText.w2.state.content}
          />
        </div>
      </div>
    </div>
  );
}