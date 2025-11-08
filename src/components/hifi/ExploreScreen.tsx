import { StatusBar } from './StatusBar';
import { ArrowLeft, Search, Filter, BookOpen, Clock, Star, Play } from 'lucide-react';
import { Badge } from '../ui/badge';

interface ExploreScreenProps {
  onBack: () => void;
  onCourseClick: () => void;
}

export function ExploreScreen({ onBack, onCourseClick }: ExploreScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      <StatusBar />
      
      {/* Header */}
      <div className="px-6 pt-4 pb-4">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={onBack} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl">Explore</h2>
        </div>
        
        {/* Search */}
        <div className="flex gap-2 mb-4">
          <div className="flex-1 h-12 bg-secondary rounded-xl flex items-center px-4 gap-3">
            <Search className="w-5 h-5 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search courses..."
              className="flex-1 bg-transparent outline-none"
            />
          </div>
          <button className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <Filter className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
        
        {/* Learning Style Filters */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {[
            { label: 'Visual', active: true },
            { label: 'Audio', active: false },
            { label: 'Text', active: false },
            { label: 'Interactive', active: false }
          ].map((filter) => (
            <Badge
              key={filter.label}
              variant={filter.active ? "default" : "outline"}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                filter.active ? 'bg-primary text-primary-foreground' : ''
              }`}
            >
              {filter.label}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-6">
        {/* Difficulty Levels */}
        <div className="flex gap-2 mb-6">
          {['Easy', 'Medium', 'Advanced'].map((level, i) => (
            <button
              key={level}
              className={`px-4 py-2 rounded-xl border-2 text-sm ${
                i === 0 
                  ? 'border-primary bg-primary/10 text-primary' 
                  : 'border-border text-muted-foreground'
              }`}
            >
              {level}
            </button>
          ))}
        </div>
        
        <h3 className="mb-4">Popular Courses</h3>
        
        {/* Course List */}
        <div className="space-y-3 pb-6">
          {[
            {
              title: 'Math Fundamentals',
              description: 'Learn basic arithmetic with visual aids',
              lessons: 12,
              duration: '2h 30m',
              rating: 4.8,
              color: 'from-blue-500 to-cyan-500',
              badges: ['Visual', 'Beginner']
            },
            {
              title: 'Reading Comprehension',
              description: 'Improve reading skills with audio support',
              lessons: 15,
              duration: '3h 15m',
              rating: 4.9,
              color: 'from-green-500 to-emerald-500',
              badges: ['Audio', 'Easy']
            },
            {
              title: 'Science Explorer',
              description: 'Interactive science lessons for curious minds',
              lessons: 18,
              duration: '4h',
              rating: 4.7,
              color: 'from-purple-500 to-pink-500',
              badges: ['Interactive', 'Medium']
            },
            {
              title: 'Creative Writing',
              description: 'Express yourself through writing',
              lessons: 10,
              duration: '2h',
              rating: 4.6,
              color: 'from-orange-500 to-red-500',
              badges: ['Text', 'Easy']
            }
          ].map((course, i) => (
            <button
              key={i}
              onClick={onCourseClick}
              className="w-full bg-card border-2 border-border rounded-3xl p-4 hover:border-primary transition-colors"
            >
              <div className="flex gap-4 mb-3">
                <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="mb-1">{course.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">{course.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                {course.badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
