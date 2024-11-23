import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ComparisonChartProps {
  w2Gross: number;
  w2Net: number;
  c2cGross: number;
  c2cNet: number;
}

export function ComparisonChart({ w2Gross, w2Net, c2cGross, c2cNet }: ComparisonChartProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Income Comparison',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => 
            new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            }).format(value),
        },
      },
    },
  };

  const data = {
    labels: ['W2', 'C2C'],
    datasets: [
      {
        label: 'Gross Income',
        data: [w2Gross, c2cGross],
        backgroundColor: 'rgba(99, 102, 241, 0.5)',
      },
      {
        label: 'Net Income',
        data: [w2Net, c2cNet],
        backgroundColor: 'rgba(34, 197, 94, 0.5)',
      },
    ],
  };

  return (
    <div className="w-full h-[400px]">
      <Bar options={options} data={data} />
    </div>
  );
}