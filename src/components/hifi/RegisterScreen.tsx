import { StatusBar } from './StatusBar';
import { ArrowLeft, Mail, Lock, User } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';

interface RegisterScreenProps {
  onBack: () => void;
  onRegister: () => void;
}

export function RegisterScreen({ onBack, onRegister }: RegisterScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      <StatusBar />
      
      {/* Header */}
      <div className="px-6 pt-4 pb-6">
        <button onClick={onBack} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex-1 px-6 overflow-y-auto">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Create Account</h1>
          <p className="text-muted-foreground">Start your learning journey</p>
        </div>
        
        {/* Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="text-sm mb-2 block text-muted-foreground">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                type="text"
                placeholder="John Doe"
                className="h-14 pl-12 rounded-2xl border-2"
              />
            </div>
          </div>
          
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
                className="h-14 pl-12 rounded-2xl border-2"
              />
            </div>
          </div>
          
          <div>
            <label className="text-sm mb-2 block text-muted-foreground">Learning Preference</label>
            <div className="grid grid-cols-3 gap-2">
              {['Visual', 'Audio', 'Text'].map((type) => (
                <button
                  key={type}
                  className="h-12 rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Terms */}
        <div className="flex items-start gap-2 mb-6">
          <Checkbox id="terms" className="mt-1" />
          <label htmlFor="terms" className="text-sm text-muted-foreground">
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>
        
        {/* Register Button */}
        <Button 
          className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 mb-4"
          onClick={onRegister}
        >
          Create Account
        </Button>
      </div>
      
      {/* Login Link */}
      <div className="px-6 pb-8 text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <button onClick={onBack} className="text-primary">Sign in</button>
        </p>
      </div>
    </div>
  );
}
