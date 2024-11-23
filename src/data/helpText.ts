export const helpText = {
  w2: {
    salary: {
      title: "Annual Salary (W2)",
      content: "Your gross annual salary as a W2 employee before taxes and deductions. This is the base amount used to calculate your total compensation package including benefits."
    },
    hsaContribution: {
      title: "Employer HSA Contribution",
      content: "Annual contribution your employer makes to your Health Savings Account (HSA). This is a tax-advantaged benefit that reduces your taxable income. For example, if your employer contributes $3,000 annually, this amount is excluded from your taxable income."
    },
    match401k: {
      title: "401K Match Percentage",
      content: "Percentage of your salary that your employer matches for 401K contributions.\n• Example: 3% match on $100,000 salary = $3,000 employer contribution\n• This is additional compensation not included in your base salary\n• Contributions are tax-deferred until withdrawal"
    },
    vacationDays: {
      title: "Paid Time Off (PTO)",
      content: "Number of paid vacation days you receive annually.\n• Includes holidays, sick days, and personal days\n• Monetary value = (Annual Salary ÷ 260) × Vacation Days\n• Example: $100,000 salary with 20 days PTO = $7,692 in paid time off"
    },
    state: {
      title: "State Tax Rates",
      content: "Your state of residence affects total tax burden.\n• CA: 9.3% state tax rate\n• NY: 6.85% state tax rate\n• TX: No state income tax\n• State taxes are in addition to federal taxes"
    }
  },
  c2c: {
    hourlyRate: {
      title: "C2C Hourly Rate",
      content: "Your contracted hourly rate as a C2C contractor.\n• Should be higher than W2 equivalent to cover benefits\n• Rule of thumb: 1.5-2x W2 hourly rate\n• Example: $50/hr W2 ≈ $75-100/hr C2C"
    },
    workingDays: {
      title: "Annual Working Days",
      content: "Standard working year calculation:\n• 52 weeks × 5 days = 260 working days\n• Subtract holidays and planned time off\n• Affects total annual billable hours\n• Consider bench time between contracts"
    },
    vacationDays: {
      title: "Unpaid Time Off",
      content: "Days you won't be billing clients.\n• Direct impact on annual income\n• No paid vacation unlike W2\n• Example: 15 days off = 5.8% income reduction\n• Include holidays and sick days"
    },
    selfEmploymentTax: {
      title: "Self-Employment Tax (2024)",
      content: "Total SE tax is 15.3%:\n• Social Security: 12.4% (up to $168,600)\n• Medicare: 2.9% (no income limit)\n• Additional 0.9% Medicare over $200,000\n• 50% is tax-deductible"
    },
    taxRateReduction: {
      title: "Tax Savings from Deductions",
      content: "Estimated tax reduction from business expenses:\n• Typical range: 10-30%\n• Higher with more deductible expenses\n• Affects effective tax rate\n• Requires documentation for all deductions"
    },
    deductions: {
      homeOffice: {
        title: "Home Office Deduction",
        content: "Calculate based on dedicated workspace:\n• Must be used exclusively for business\n• Example: 300 sq ft office in 4,000 sq ft home = 7.5%\n• Deduct: Mortgage interest, utilities, repairs\n• Keep photos and measurements for records"
      },
      travelTransport: {
        title: "Travel & Transportation",
        content: "Vehicle and travel expenses:\n• Mileage rate: $0.655/mile (2024)\n• Actual expenses: gas, maintenance, insurance\n• Business travel: flights, hotels, car rentals\n• Meals: 50% deductible for business purposes"
      },
      officeEquipment: {
        title: "Equipment & Supplies",
        content: "Deductible business equipment:\n• Computers and peripherals\n• Office furniture\n• Software subscriptions\n• Phone and internet (business %)\n• Keep receipts for all purchases"
      },
      businessOps: {
        title: "Business Operations",
        content: "Essential business expenses:\n• Professional services (legal, accounting)\n• Business insurance\n• Bank fees\n• Professional memberships\n• Marketing and advertising"
      },
      healthInsurance: {
        title: "Health Insurance Premiums",
        content: "Medical insurance deductions:\n• Self-employed health insurance deduction\n• Family coverage included\n• Dental and vision plans\n• HSA contributions\n• Long-term care insurance"
      },
      retirement: {
        title: "Retirement Plans (2024)",
        content: "Tax-advantaged retirement options:\n• Solo 401(k): up to $69,000\n• SEP IRA: 25% of compensation\n• Traditional IRA: $7,000\n• Catch-up contributions if over 50"
      }
    }
  }
};