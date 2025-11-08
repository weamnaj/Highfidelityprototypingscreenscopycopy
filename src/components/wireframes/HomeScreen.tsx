export function HomeScreen() {
  return (
    <div className="w-full h-full bg-white p-4 flex flex-col">
      {/* Status Bar */}
      <div className="h-6 flex justify-between items-center text-xs mb-4">
        <div>9:41</div>
        <div className="flex gap-1">
          <div className="w-4 h-3 border border-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Header with Profile */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="w-20 h-4 bg-gray-200 mb-1"></div>
          <div className="w-32 h-5 bg-gray-300"></div>
        </div>
        <div className="w-10 h-10 border-2 border-gray-400 rounded-full"></div>
      </div>

      {/* Today's Goal Progress */}
      <div className="border-2 border-gray-400 rounded-lg p-3 mb-4">
        <div className="w-24 h-4 bg-gray-300 mb-2"></div>
        <div className="w-full h-2 bg-gray-200 rounded-full mb-1">
          <div className="w-3/5 h-full bg-gray-800 rounded-full"></div>
        </div>
        <div className="w-16 h-2 bg-gray-200"></div>
      </div>

      {/* Continue Learning */}
      <div className="mb-4">
        <div className="w-32 h-4 bg-gray-300 mb-2"></div>
        <div className="border-2 border-gray-400 rounded-lg p-3">
          <div className="flex gap-3 mb-2">
            <div className="w-12 h-12 border-2 border-gray-400 rounded"></div>
            <div className="flex-1">
              <div className="w-28 h-3 bg-gray-300 mb-2"></div>
              <div className="w-20 h-2 bg-gray-200"></div>
            </div>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full">
            <div className="w-2/5 h-full bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Learning Modes */}
      <div className="mb-4">
        <div className="w-28 h-4 bg-gray-300 mb-2"></div>
        <div className="grid grid-cols-3 gap-2">
          {['Visual', 'Audio', 'Read'].map((mode, i) => (
            <div key={i} className="border-2 border-gray-400 rounded-lg p-2 flex flex-col items-center gap-1">
              <div className="w-6 h-6 border-2 border-gray-400 rounded"></div>
              <div className="text-[8px] text-gray-600">{mode}</div>
            </div>
          ))}
        </div>
      </div>

      {/* My Courses */}
      <div className="flex-1">
        <div className="w-24 h-4 bg-gray-300 mb-2"></div>
        {[1, 2].map((i) => (
          <div key={i} className="border border-gray-300 rounded-lg p-2 mb-2 flex gap-2">
            <div className="w-10 h-10 border-2 border-gray-400 rounded"></div>
            <div className="flex-1">
              <div className="w-24 h-3 bg-gray-300 mb-1"></div>
              <div className="w-full h-2 bg-gray-200 mb-1"></div>
              <div className="flex gap-1">
                <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
                <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
                <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="border-t-2 border-gray-300 pt-2 flex justify-around">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-6 h-6 border-2 border-gray-400 rounded"></div>
        ))}
      </div>
    </div>
  );
}
