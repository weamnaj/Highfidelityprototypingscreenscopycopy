export function ConfirmationScreen() {
  return (
    <div className="w-full h-full bg-white p-4 flex flex-col">
      {/* Status Bar */}
      <div className="h-6 flex justify-between items-center text-xs mb-4">
        <div>9:41</div>
        <div className="flex gap-1">
          <div className="w-4 h-3 border border-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Close Button */}
      <div className="flex justify-end mb-6">
        <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
      </div>

      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 border-4 border-gray-800 rounded-full flex items-center justify-center">
          <div className="w-12 h-6 border-b-4 border-l-4 border-gray-800 rotate-[-45deg] -mt-2"></div>
        </div>
      </div>

      {/* Success Message */}
      <div className="text-center mb-6">
        <div className="w-40 h-6 bg-gray-300 mx-auto mb-3"></div>
        <div className="w-48 h-3 bg-gray-200 mx-auto mb-2"></div>
      </div>

      {/* Achievement Badge */}
      <div className="border-2 border-gray-400 rounded-lg p-4 mb-4 flex flex-col items-center">
        <div className="w-16 h-16 border-2 border-gray-400 rounded-full mb-3"></div>
        <div className="w-32 h-4 bg-gray-300 mb-1"></div>
        <div className="w-24 h-3 bg-gray-200"></div>
      </div>

      {/* Progress Stats */}
      <div className="border border-gray-300 rounded-lg p-4 mb-4">
        <div className="w-28 h-4 bg-gray-300 mb-3"></div>
        <div className="grid grid-cols-3 gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <div className="w-full h-5 bg-gray-800 mb-1 rounded"></div>
              <div className="w-12 h-2 bg-gray-200 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Streak Info */}
      <div className="border border-gray-300 rounded-lg p-3 mb-4 flex items-center gap-3">
        <div className="w-10 h-10 border-2 border-gray-400 rounded"></div>
        <div className="flex-1">
          <div className="w-24 h-3 bg-gray-300 mb-1"></div>
          <div className="w-32 h-2 bg-gray-200"></div>
        </div>
      </div>

      {/* Next Lesson */}
      <div className="flex-1">
        <div className="w-24 h-3 bg-gray-200 mb-2"></div>
        <div className="border-2 border-gray-400 rounded-lg p-3 flex gap-3">
          <div className="w-12 h-12 border-2 border-gray-400 rounded"></div>
          <div className="flex-1">
            <div className="w-28 h-3 bg-gray-300 mb-1"></div>
            <div className="w-20 h-2 bg-gray-200"></div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center">
          <div className="w-28 h-4 bg-white"></div>
        </div>
        <div className="border-2 border-gray-400 rounded-lg p-4 flex items-center justify-center">
          <div className="w-24 h-4 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
