import { ArrowRight, ArrowDown } from 'lucide-react';

interface FlowArrowProps {
  direction?: 'right' | 'down';
  label?: string;
}

export function FlowArrow({ direction = 'right', label }: FlowArrowProps) {
  const Icon = direction === 'right' ? ArrowRight : ArrowDown;
  
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-1">
        <Icon className="w-8 h-8 text-gray-600" strokeWidth={2} />
        {label && (
          <span className="text-xs text-gray-600">{label}</span>
        )}
      </div>
    </div>
  );
}
