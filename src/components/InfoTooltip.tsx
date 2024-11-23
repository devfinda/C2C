import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface InfoTooltipProps {
  id: string;
  title: string;
  content: string;
}

export function InfoTooltip({ id, title, content }: InfoTooltipProps) {
  return (
    <>
      <HelpCircle
        className="h-4 w-4 text-gray-400 hover:text-gray-500 cursor-help ml-2"
        data-tooltip-id={id}
        data-tooltip-html={`
          <div class="text-left">
            <div class="font-bold mb-2">${title}</div>
            <div>${content.split('\n').map(line => 
              line.trim().startsWith('•') 
                ? `<div class="ml-2">• ${line.substring(1).trim()}</div>`
                : `<div>${line}</div>`
            ).join('')}</div>
          </div>
        `}
      />
      <Tooltip
        id={id}
        className="z-50 max-w-sm !bg-white !text-gray-900 !opacity-100 !shadow-lg !rounded-lg"
        style={{
          backgroundColor: 'white',
          color: '#111827',
          padding: '1rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          border: '1px solid #E5E7EB',
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          zIndex: 50
        }}
      />
    </>
  );
}