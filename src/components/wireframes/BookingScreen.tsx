export function BookingScreen() {
  return (
    <div className="w-full h-full bg-white p-4 flex flex-col">
      {/* Status Bar */}
      <div className="h-6 flex justify-between items-center text-xs mb-4">
        <div>9:41</div>
        <div className="flex gap-1">
          <div className="w-4 h-3 border border-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Header with Back */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
        <div className="w-32 h-5 bg-gray-300"></div>
      </div>

      {/* Lesson Progress */}
      <div className="flex gap-1 mb-6">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`flex-1 h-2 ${i <= 3 ? 'bg-gray-800' : 'bg-gray-300'} rounded`}
          ></div>
        ))}
      </div>

      {/* Lesson Content */}
      <div className="border-2 border-gray-400 rounded-lg p-4 mb-4">
        <div className="w-28 h-4 bg-gray-300 mb-3"></div>
        <div className="w-full h-32 border-2 border-gray-400 rounded mb-3 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-gray-400 rounded-full"></div>
        </div>
        <div className="space-y-2">
          <div className="w-full h-2 bg-gray-200"></div>
          <div className="w-full h-2 bg-gray-200"></div>
          <div className="w-3/4 h-2 bg-gray-200"></div>
        </div>
      </div>

      {/* Accessibility Controls */}
      <div className="border border-gray-300 rounded-lg p-3 mb-4">
        <div className="w-32 h-3 bg-gray-200 mb-3"></div>
        <div className="flex gap-2">
          {['A-', 'A+', '🔊', '⏸'].map((control, i) => (
            <div key={i} className="w-10 h-10 border-2 border-gray-400 rounded flex items-center justify-center">
              <div className="text-[10px]">{control}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Question */}
      <div className="flex-1 mb-4">
        <div className="w-28 h-4 bg-gray-300 mb-3"></div>
        <div className="space-y-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`border-2 ${i === 2 ? 'border-gray-800' : 'border-gray-400'} rounded-lg p-3 flex items-center gap-2`}>
              <div className={`w-4 h-4 border-2 ${i === 2 ? 'border-gray-800' : 'border-gray-400'} rounded-full`}></div>
              <div className="w-full h-3 bg-gray-200"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Break Timer Reminder */}
      <div className="border border-gray-300 rounded-lg p-2 mb-4 flex items-center gap-2">
        <div className="w-5 h-5 border-2 border-gray-400 rounded"></div>
        <div className="w-32 h-2 bg-gray-200"></div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <div className="flex-1 border-2 border-gray-400 rounded-lg p-3 flex items-center justify-center">
          <div className="w-16 h-4 bg-gray-300"></div>
        </div>
        <div className="flex-1 bg-gray-800 rounded-lg p-3 flex items-center justify-center">
          <div className="w-16 h-4 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
