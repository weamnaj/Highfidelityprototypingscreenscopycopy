import { StatusBar } from './StatusBar';
import { ArrowLeft, Play, Clock, Star, BookOpen, CheckCircle2, Circle, Lock } from 'lucide-react';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';

interface CourseDetailScreenProps {
  onBack: () => void;
  onStartLesson: () => void;
}

export function CourseDetailScreen({ onBack, onStartLesson }: CourseDetailScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      <StatusBar />
      
      {/* Header with Image */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-blue-500 to-cyan-500 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="w-20 h-20 text-white opacity-50" />
          </div>
        </div>
        <button 
          onClick={onBack}
          className="absolute top-4 left-6 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {/* Course Info */}
        <div className="px-6 py-6">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h2 className="text-2xl mb-2">Introduction to Math</h2>
              <p className="text-muted-foreground mb-3">Master basic arithmetic concepts</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">4.8</span>
            </div>
            <div className="flex items-center gap-1">
              <Play className="w-4 h-4" />
              <span className="text-sm">10 lessons</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">2h 30m</span>
            </div>
          </div>
          
          <div className="flex gap-2 mb-6">
            <Badge variant="secondary">Visual</Badge>
            <Badge variant="secondary">Beginner</Badge>
            <Badge variant="secondary">ADHD-friendly</Badge>
          </div>
          
          {/* Progress */}
          <div className="bg-secondary rounded-2xl p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">Your Progress</span>
              <span className="text-sm">40%</span>
            </div>
            <Progress value={40} className="h-2" />
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <h3 className="mb-2">About this course</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This course introduces fundamental math concepts using visual aids and interactive exercises. 
              Perfect for learners who benefit from multi-sensory approaches. Each lesson includes breaks 
              and progress tracking.
            </p>
          </div>
          
          {/* Lessons */}
          <div>
            <h3 className="mb-4">Lessons</h3>
            <div className="space-y-2">
              {[
                { title: 'Understanding Numbers', duration: '12 min', completed: true, locked: false },
                { title: 'Addition Basics', duration: '15 min', completed: true, locked: false },
                { title: 'Subtraction Made Easy', duration: '15 min', completed: true, locked: false },
                { title: 'Practice Problems', duration: '20 min', completed: true, locked: false },
                { title: 'Multiplication Introduction', duration: '18 min', completed: false, locked: false },
                { title: 'Division Concepts', duration: '18 min', completed: false, locked: false },
                { title: 'Word Problems', duration: '25 min', completed: false, locked: true },
                { title: 'Advanced Practice', duration: '30 min', completed: false, locked: true }
              ].map((lesson, i) => (
                <button
                  key={i}
                  onClick={!lesson.locked && !lesson.completed ? onStartLesson : undefined}
                  disabled={lesson.locked}
                  className={`w-full rounded-2xl p-4 flex items-center gap-3 transition-colors ${
                    lesson.completed 
                      ? 'bg-success/10 border-2 border-success/20' 
                      : lesson.locked
                      ? 'bg-secondary border-2 border-border opacity-60'
                      : 'bg-card border-2 border-primary hover:bg-primary/5'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    lesson.completed 
                      ? 'bg-success/20' 
                      : lesson.locked
                      ? 'bg-muted'
                      : 'bg-primary/10'
                  }`}>
                    {lesson.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    ) : lesson.locked ? (
                      <Lock className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <Circle className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-sm mb-1">{lesson.title}</h4>
                    <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                  </div>
                  {!lesson.locked && !lesson.completed && (
                    <Play className="w-5 h-5 text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Action */}
      <div className="px-6 py-4 border-t border-border bg-card">
        <Button 
          className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90"
          onClick={onStartLesson}
        >
          <Play className="w-5 h-5 mr-2" />
          Continue Learning
        </Button>
      </div>
    </div>
  );
}
