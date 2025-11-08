import { ReactNode } from 'react';

interface PhoneFrameProps {
  children: ReactNode;
}

export function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="relative w-[375px] h-[812px] bg-gray-900 rounded-[48px] p-3 shadow-2xl mx-auto">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>
      
      {/* Screen */}
      <div className="relative w-full h-full bg-background rounded-[36px] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
