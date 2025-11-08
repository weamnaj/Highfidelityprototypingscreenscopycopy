export function SearchScreen() {
  return (
    <div className="w-full h-full bg-white p-4 flex flex-col">
      {/* Status Bar */}
      <div className="h-6 flex justify-between items-center text-xs mb-4">
        <div>9:41</div>
        <div className="flex gap-1">
          <div className="w-4 h-3 border border-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="mb-4">
        <div className="w-32 h-6 bg-gray-300 mb-3"></div>
        
        {/* Search Bar */}
        <div className="border-2 border-gray-400 rounded-lg p-3 flex items-center gap-2 mb-3">
          <div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div>
          <div className="w-24 h-3 bg-gray-200"></div>
          <div className="ml-auto w-4 h-4 border-2 border-gray-400"></div>
        </div>
      </div>

      {/* Learning Style Filters */}
      <div className="mb-4">
        <div className="w-28 h-3 bg-gray-200 mb-2"></div>
        <div className="flex gap-2">
          {['Visual', 'Audio', 'Text', 'Interactive'].map((style, i) => (
            <div key={i} className={`border-2 ${i === 0 ? 'border-gray-800 bg-gray-800' : 'border-gray-400'} rounded-full px-2 py-1 flex-shrink-0`}>
              <div className={`text-[7px] ${i === 0 ? 'text-white' : 'text-gray-600'}`}>{style}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Difficulty Level */}
      <div className="mb-4">
        <div className="w-24 h-3 bg-gray-200 mb-2"></div>
        <div className="flex gap-2">
          {['Easy', 'Medium', 'Advanced'].map((level, i) => (
            <div key={i} className="border-2 border-gray-400 rounded-lg px-3 py-1">
              <div className="text-[8px] text-gray-600">{level}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="mb-2">
        <div className="w-24 h-3 bg-gray-200"></div>
      </div>

      {/* Course Results */}
      <div className="flex-1 space-y-2 overflow-y-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="border-2 border-gray-400 rounded-lg p-3">
            <div className="flex gap-3 mb-2">
              <div className="w-14 h-14 border-2 border-gray-400 rounded"></div>
              <div className="flex-1">
                <div className="w-32 h-4 bg-gray-300 mb-1"></div>
                <div className="w-full h-2 bg-gray-200 mb-1"></div>
                <div className="flex gap-1 items-center">
                  <div className="w-3 h-3 border border-gray-400 rounded"></div>
                  <div className="w-16 h-2 bg-gray-200"></div>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
              <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
              <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="border-t-2 border-gray-300 pt-2 flex justify-around mt-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-6 h-6 border-2 border-gray-400 rounded"></div>
        ))}
      </div>
    </div>
  );
}
