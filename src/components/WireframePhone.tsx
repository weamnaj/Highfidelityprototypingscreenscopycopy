interface WireframePhoneProps {
  children: React.ReactNode;
  title: string;
}

export function WireframePhone({ children, title }: WireframePhoneProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="text-sm text-gray-600">{title}</div>
      <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[40px] p-3 shadow-xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
        
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[28px] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
