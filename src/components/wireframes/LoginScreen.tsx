export function LoginScreen() {
  return (
    <div className="w-full h-full bg-white p-4 flex flex-col">
      {/* Status Bar */}
      <div className="h-6 flex justify-between items-center text-xs mb-4">
        <div>9:41</div>
        <div className="flex gap-1">
          <div className="w-4 h-3 border border-gray-400 rounded-sm"></div>
        </div>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <div className="w-6 h-6 border-2 border-gray-400 rounded flex items-center justify-center">
          <div className="text-[10px]">←</div>
        </div>
      </div>

      {/* Logo/Brand */}
      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 border-2 border-gray-400 rounded-2xl flex items-center justify-center">
          <div className="text-[10px]">LOGO</div>
        </div>
      </div>

      {/* Title */}
      <div className="mb-6 text-center">
        <div className="w-32 h-6 bg-gray-300 mx-auto mb-2 flex items-center justify-center">
          <div className="text-[10px]">Welcome Back</div>
        </div>
        <div className="w-48 h-3 bg-gray-200 mx-auto flex items-center justify-center">
          <div className="text-[7px]">Sign in to continue learning</div>
        </div>
      </div>

      {/* Email Field */}
      <div className="mb-3">
        <div className="w-16 h-3 bg-gray-200 mb-1 flex items-center">
          <div className="text-[7px] ml-1">Email</div>
        </div>
        <div className="border-2 border-gray-400 rounded-lg p-3">
          <div className="w-full h-3 bg-gray-200 flex items-center">
            <div className="text-[7px] text-gray-400">your@email.com</div>
          </div>
        </div>
      </div>

      {/* Password Field */}
      <div className="mb-3">
        <div className="w-20 h-3 bg-gray-200 mb-1 flex items-center">
          <div className="text-[7px] ml-1">Password</div>
        </div>
        <div className="border-2 border-gray-400 rounded-lg p-3 flex justify-between items-center">
          <div className="w-16 h-3 bg-gray-200 flex items-center">
            <div className="text-[7px]">••••••••</div>
          </div>
          <div className="w-4 h-4 border-2 border-gray-400 rounded flex items-center justify-center">
            <div className="text-[8px]">👁</div>
          </div>
        </div>
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-4 h-4 border-2 border-gray-400 rounded"></div>
          <div className="w-24 h-2 bg-gray-200 flex items-center">
            <div className="text-[7px]">Remember me</div>
          </div>
        </div>
        <div className="w-28 h-2 bg-gray-300 flex items-center justify-end">
          <div className="text-[7px]">Forgot password?</div>
        </div>
      </div>

      {/* Login Button */}
      <div className="mb-4">
        <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center">
          <div className="w-16 h-4 bg-white flex items-center justify-center">
            <div className="text-[10px]">Log In</div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 border-t border-gray-300"></div>
        <div className="text-[8px] text-gray-400">OR</div>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      {/* Social Login */}
      <div className="space-y-2 mb-6">
        <div className="border-2 border-gray-400 rounded-lg p-3 flex items-center justify-center gap-2">
          <div className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center">
            <div className="text-[8px]">G</div>
          </div>
          <div className="w-32 h-3 bg-gray-200 flex items-center justify-center">
            <div className="text-[8px]">Continue with Google</div>
          </div>
        </div>
        <div className="border-2 border-gray-400 rounded-lg p-3 flex items-center justify-center gap-2">
          <div className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center">
            <div className="text-[8px]">A</div>
          </div>
          <div className="w-28 h-3 bg-gray-200 flex items-center justify-center">
            <div className="text-[8px]">Continue with Apple</div>
          </div>
        </div>
      </div>

      {/* Register Link */}
      <div className="mt-auto text-center">
        <div className="w-48 h-3 bg-gray-200 mx-auto flex items-center justify-center">
          <div className="text-[8px]">Don't have an account? <span className="text-gray-800">Sign up</span></div>
        </div>
      </div>
    </div>
  );
}
