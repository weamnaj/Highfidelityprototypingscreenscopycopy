import { StatusBar } from './StatusBar';
import { X, Trophy, Flame, Target, Star } from 'lucide-react';
import { Button } from '../ui/button';

interface CompletionScreenProps {
  onClose: () => void;
  onNextLesson: () => void;
  onHome: () => void;
}

export function CompletionScreen({ onClose, onNextLesson, onHome }: CompletionScreenProps) {
  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50">
      <StatusBar />
      
      {/* Header */}
      <div className="px-6 pt-4 pb-4 flex justify-end">
        <button onClick={onClose} className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Success Animation */}
        <div className="relative mb-6">
          <div className="w-32 h-32 bg-success rounded-full flex items-center justify-center shadow-2xl">
            <Trophy className="w-16 h-16 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
            <Star className="w-6 h-6 text-white fill-white" />
          </div>
        </div>
        
        {/* Message */}
        <h1 className="text-3xl mb-3 text-center">Great Job!</h1>
        <p className="text-center text-muted-foreground mb-8 max-w-xs">
          You've completed the lesson successfully
        </p>
        
        {/* Achievement Badge */}
        <div className="bg-white rounded-3xl p-6 mb-8 shadow-lg w-full max-w-sm">
          <div className="flex items-center justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-3xl">🏆</span>
            </div>
          </div>
          <h3 className="text-center mb-2">Math Master</h3>
          <p className="text-sm text-center text-muted-foreground">
            Completed 5 multiplication lessons
          </p>
        </div>
        
        {/* Stats */}
        <div className="bg-white/80 backdrop-blur rounded-3xl p-6 mb-8 w-full max-w-sm shadow-lg">
          <h3 className="mb-4 text-center">Today's Progress</h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { icon: Target, value: '5', label: 'Lessons', color: 'from-blue-500 to-cyan-500' },
              { icon: Flame, value: '7', label: 'Day Streak', color: 'from-orange-500 to-red-500' },
              { icon: Star, value: '120', label: 'Points', color: 'from-yellow-500 to-orange-500' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-xl mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Streak Message */}
        <div className="bg-orange-100 border-2 border-orange-300 rounded-2xl p-4 mb-4 flex items-center gap-3 max-w-sm">
          <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-sm mb-1">7 day streak!</p>
            <p className="text-xs text-muted-foreground">Keep it up tomorrow</p>
          </div>
        </div>
      </div>
      
      {/* Next Lesson Preview */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl p-4 mb-4 shadow-lg">
          <p className="text-xs text-muted-foreground mb-2">UP NEXT</p>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex-shrink-0"></div>
            <div className="flex-1">
              <h4 className="text-sm mb-1">Division Concepts</h4>
              <p className="text-xs text-muted-foreground">18 minutes</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <Button 
            className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90"
            onClick={onNextLesson}
          >
            Start Next Lesson
          </Button>
          <Button 
            variant="outline"
            className="w-full h-14 rounded-2xl border-2"
            onClick={onHome}
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
