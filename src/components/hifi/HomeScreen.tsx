import { StatusBar } from './StatusBar';
import { Bell, Search, BookOpen, Headphones, FileText, Play, Trophy, Target } from 'lucide-react';
import { Progress } from '../ui/progress';
import { Avatar, AvatarFallback } from '../ui/avatar';

interface HomeScreenProps {
  onSearch: () => void;
  onCourseClick: () => void;
  onProfile: () => void;
}

export function HomeScreen({ onSearch, onCourseClick, onProfile }: HomeScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      <StatusBar />
      
      {/* Header */}
      <div className="px-6 pt-4 pb-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground">Good morning,</p>
            <h2 className="text-xl">Alex!</h2>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </button>
            <button onClick={onProfile}>
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary text-primary-foreground">AJ</AvatarFallback>
              </Avatar>
            </button>
          </div>
        </div>
        
        {/* Search */}
        <button 
          onClick={onSearch}
          className="w-full h-14 bg-secondary rounded-2xl flex items-center px-4 gap-3"
        >
          <Search className="w-5 h-5 text-muted-foreground" />
          <span className="text-muted-foreground">Search courses...</span>
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto px-6">
        {/* Today's Goal */}
        <div className="bg-gradient-to-br from-primary to-purple-600 rounded-3xl p-6 mb-6 text-white">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5" />
            <span className="text-sm">Today's Goal</span>
          </div>
          <h3 className="text-2xl mb-3">30 minutes</h3>
          <Progress value={60} className="h-2 mb-2 bg-white/20" />
          <p className="text-sm opacity-90">18 of 30 minutes completed</p>
        </div>
        
        {/* Continue Learning */}
        <div className="mb-6">
          <h3 className="mb-4">Continue Learning</h3>
          <button 
            onClick={onCourseClick}
            className="w-full bg-card border-2 border-border rounded-3xl p-4 hover:border-primary transition-colors"
          >
            <div className="flex gap-4 mb-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="mb-1">Introduction to Math</h4>
                <p className="text-sm text-muted-foreground">Basic arithmetic</p>
              </div>
            </div>
            <Progress value={40} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">4 of 10 lessons completed</p>
          </button>
        </div>
        
        {/* Learning Modes */}
        <div className="mb-6">
          <h3 className="mb-4">Learning Modes</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: BookOpen, label: 'Visual', color: 'from-blue-500 to-cyan-500' },
              { icon: Headphones, label: 'Audio', color: 'from-purple-500 to-pink-500' },
              { icon: FileText, label: 'Reading', color: 'from-orange-500 to-red-500' }
            ].map((mode) => (
              <button
                key={mode.label}
                className="bg-card border-2 border-border rounded-2xl p-4 hover:border-primary transition-colors"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${mode.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                  <mode.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-xs text-center">{mode.label}</p>
              </button>
            ))}
          </div>
        </div>
        
        {/* My Courses */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3>My Courses</h3>
            <button className="text-sm text-primary">View all</button>
          </div>
          <div className="space-y-3">
            {[
              { title: 'English Reading', progress: 65, icon: FileText, color: 'from-green-500 to-emerald-500' },
              { title: 'Science Basics', progress: 30, icon: Play, color: 'from-indigo-500 to-purple-500' }
            ].map((course, i) => (
              <button
                key={i}
                onClick={onCourseClick}
                className="w-full bg-card border border-border rounded-2xl p-4 hover:border-primary transition-colors"
              >
                <div className="flex gap-3">
                  <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <course.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="text-sm mb-2">{course.title}</h4>
                    <Progress value={course.progress} className="h-1.5" />
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <div className="border-t border-border bg-card">
        <div className="flex justify-around items-center h-20 px-6">
          {[
            { icon: BookOpen, label: 'Home', active: true },
            { icon: Search, label: 'Explore', active: false },
            { icon: Trophy, label: 'Progress', active: false },
            { icon: Bell, label: 'Profile', active: false }
          ].map((item) => (
            <button
              key={item.label}
              className="flex flex-col items-center gap-1"
              onClick={item.label === 'Explore' ? onSearch : undefined}
            >
              <item.icon className={`w-6 h-6 ${item.active ? 'text-primary' : 'text-muted-foreground'}`} />
              <span className={`text-xs ${item.active ? 'text-primary' : 'text-muted-foreground'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
