import { StatusBar } from './StatusBar';
import { ArrowLeft, Eye, Mail, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';

interface LoginScreenProps {
  onBack: () => void;
  onLogin: () => void;
  onRegister: () => void;
}

export function LoginScreen({ onBack, onLogin, onRegister }: LoginScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      <StatusBar />
      
      {/* Header */}
      <div className="px-6 pt-4 pb-6">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex-1 px-6">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to continue learning</p>
        </div>
        
        {/* Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="text-sm mb-2 block text-muted-foreground">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                type="email"
                placeholder="your@email.com"
                className="h-14 pl-12 rounded-2xl border-2"
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm mb-2 block text-muted-foreground">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                type="password"
                placeholder="••••••••"
                className="h-14 pl-12 pr-12 rounded-2xl border-2"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2">
                <Eye className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Remember & Forgot */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm">Remember me</label>
          </div>
          <button className="text-sm text-primary">Forgot password?</button>
        </div>
        
        {/* Login Button */}
        <Button 
          className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 mb-6"
          onClick={onLogin}
        >
          Log In
        </Button>
        
        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border"></div>
          <span className="text-sm text-muted-foreground">OR</span>
          <div className="flex-1 h-px bg-border"></div>
        </div>
        
        {/* Social Login */}
        <div className="space-y-3 mb-6">
          <Button variant="outline" className="w-full h-14 rounded-2xl border-2">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full h-14 rounded-2xl border-2">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            Continue with Apple
          </Button>
        </div>
      </div>
      
      {/* Register */}
      <div className="px-6 pb-8 text-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{' '}
          <button onClick={onRegister} className="text-primary">Sign up</button>
        </p>
      </div>
    </div>
  );
}
