import { StatusBar } from './StatusBar';
import { X, Volume2, Pause, TextQuote, ZoomIn, ZoomOut, Coffee } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { useState } from 'react';

interface LessonScreenProps {
  onClose: () => void;
  onComplete: () => void;
}

export function LessonScreen({ onClose, onComplete }: LessonScreenProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  return (
    <div className="flex flex-col h-full bg-background">
      <StatusBar />
      
      {/* Header */}
      <div className="px-6 pt-4 pb-4">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onClose} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <X className="w-5 h-5" />
          </button>
          <span className="text-sm text-muted-foreground">Lesson 5 of 10</span>
        </div>
        
        {/* Progress */}
        <Progress value={50} className="h-2" />
      </div>
      
      <div className="flex-1 overflow-y-auto px-6">
        {/* Lesson Title */}
        <div className="mb-6">
          <h2 className="text-xl mb-2">Multiplication Introduction</h2>
          <p className="text-sm text-muted-foreground">Understanding repeated addition</p>
        </div>
        
        {/* Content Card */}
        <div className="bg-gradient-to-br from-primary/10 to-purple-50 rounded-3xl p-6 mb-6">
          <div className="bg-white rounded-2xl p-6 mb-4 shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <div className="text-6xl">3 × 4 = 12</div>
            </div>
            <div className="flex justify-center gap-2">
              {[1, 2, 3].map((group) => (
                <div key={group} className="flex flex-col gap-1">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-8 h-8 bg-primary rounded-lg"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-sm text-center text-muted-foreground">
            3 groups of 4 equals 12
          </p>
        </div>
        
        {/* Accessibility Controls */}
        <div className="bg-secondary rounded-2xl p-4 mb-6">
          <p className="text-sm mb-3">Learning Controls</p>
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: ZoomOut, label: 'A-' },
              { icon: ZoomIn, label: 'A+' },
              { icon: Volume2, label: 'Audio' },
              { icon: TextQuote, label: 'Read' }
            ].map((control, i) => (
              <button
                key={i}
                className="h-12 bg-card rounded-xl flex flex-col items-center justify-center gap-1 hover:bg-primary/10 transition-colors"
              >
                <control.icon className="w-5 h-5" />
                <span className="text-[10px]">{control.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Question */}
        <div className="mb-6">
          <h3 className="mb-4">Try it yourself!</h3>
          <div className="bg-card border-2 border-border rounded-2xl p-6 mb-4">
            <p className="text-center text-xl mb-6">What is 2 × 5?</p>
          </div>
          
          {/* Answer Options */}
          <div className="space-y-3">
            {[
              { answer: '7', correct: false },
              { answer: '10', correct: true },
              { answer: '12', correct: false }
            ].map((option, i) => (
              <button
                key={i}
                onClick={() => setSelectedAnswer(i)}
                className={`w-full h-16 rounded-2xl border-2 transition-all ${
                  selectedAnswer === i
                    ? option.correct
                      ? 'border-success bg-success/10'
                      : 'border-destructive bg-destructive/10'
                    : 'border-border bg-card hover:border-primary'
                }`}
              >
                <span className="text-lg">{option.answer}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Break Reminder */}
        <div className="bg-warning/10 border border-warning/20 rounded-2xl p-4 mb-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-warning/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <Coffee className="w-5 h-5 text-warning" />
          </div>
          <div>
            <p className="text-sm mb-1">Break Reminder</p>
            <p className="text-xs text-muted-foreground">You've been learning for 20 minutes</p>
          </div>
        </div>
      </div>
      
      {/* Bottom Actions */}
      <div className="px-6 py-4 border-t border-border bg-card">
        <div className="flex gap-3">
          <Button 
            variant="outline"
            className="flex-1 h-14 rounded-2xl"
            onClick={onClose}
          >
            Take Break
          </Button>
          <Button 
            className="flex-1 h-14 rounded-2xl bg-primary hover:bg-primary/90"
            onClick={onComplete}
            disabled={selectedAnswer === null}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
