import React from 'react';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import { ComparisonChart } from './ComparisonChart';

interface ComparisonResultsProps {
  results: {
    w2Gross: number;
    w2Net: number;
    c2cGross: number;
    c2cNet: number;
    equivalentRate: number;
  };
}

export function ComparisonResults({ results }: ComparisonResultsProps) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });

  const isC2CBetter = results.c2cNet > results.w2Net;

  return (
    <div className="space-y-8">
      <ComparisonChart {...results} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">W2 Employment</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Gross Income:</span>
              <span className="font-medium">{formatter.format(results.w2Gross)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Net Income:</span>
              <span className="font-medium">{formatter.format(results.w2Net)}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">C2C Contract</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Gross Income:</span>
              <span className="font-medium">{formatter.format(results.c2cGross)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Net Income:</span>
              <span className="font-medium">{formatter.format(results.c2cNet)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          {isC2CBetter ? (
            <ArrowUpCircle className="h-6 w-6 text-green-600" />
          ) : (
            <ArrowDownCircle className="h-6 w-6 text-red-600" />
          )}
          <h3 className="text-lg font-semibold text-gray-900">Analysis</h3>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Equivalent C2C Hourly Rate:</span>
            <span className="text-xl font-semibold text-indigo-600">
              {formatter.format(results.equivalentRate)}/hr
            </span>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <p className="text-gray-700">
              {isC2CBetter ? (
                <>
                  Your C2C rate of ${results.equivalentRate.toFixed(2)}/hr provides better compensation
                  compared to the W2 salary, resulting in {formatter.format(results.c2cNet - results.w2Net)} more
                  in net income annually.
                </>
              ) : (
                <>
                  To match your W2 compensation, you would need a C2C rate of at least ${results.equivalentRate.toFixed(2)}/hr.
                  Consider negotiating a higher rate or evaluating the additional benefits of W2 employment.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}