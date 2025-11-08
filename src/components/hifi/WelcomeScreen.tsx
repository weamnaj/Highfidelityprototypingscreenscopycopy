import { StatusBar } from './StatusBar';
import { Brain, Sparkles, Users } from 'lucide-react';
import { Button } from '../ui/button';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onSignIn: () => void;
}

export function WelcomeScreen({ onGetStarted, onSignIn }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50">
      <StatusBar />
      
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Logo */}
        <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mb-6 shadow-lg">
          <Brain className="w-14 h-14 text-primary-foreground" />
        </div>
        
        {/* Title */}
        <h1 className="text-3xl text-center mb-3 text-foreground">NeuroLearn</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-xs">
          Personalized learning designed for every mind
        </p>
        
        {/* Features */}
        <div className="space-y-4 mb-12 w-full max-w-sm">
          {[
            { icon: Brain, text: 'ADHD & Dyslexia-friendly' },
            { icon: Sparkles, text: 'Multi-sensory learning' },
            { icon: Users, text: 'Progress at your pace' }
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-2xl p-4 shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Buttons */}
      <div className="px-8 pb-8 space-y-3">
        <Button 
          className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90"
          onClick={onGetStarted}
        >
          Get Started
        </Button>
        <Button 
          variant="outline"
          className="w-full h-14 rounded-2xl border-2"
          onClick={onSignIn}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
}
