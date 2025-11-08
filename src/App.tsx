import { useState } from 'react';
import { PhoneFrame } from './components/hifi/PhoneFrame';
import { WelcomeScreen } from './components/hifi/WelcomeScreen';
import { LoginScreen } from './components/hifi/LoginScreen';
import { RegisterScreen } from './components/hifi/RegisterScreen';
import { HomeScreen } from './components/hifi/HomeScreen';
import { ExploreScreen } from './components/hifi/ExploreScreen';
import { CourseDetailScreen } from './components/hifi/CourseDetailScreen';
import { LessonScreen } from './components/hifi/LessonScreen';
import { CompletionScreen } from './components/hifi/CompletionScreen';
import { ProfileScreen } from './components/hifi/ProfileScreen';
import { SettingsScreen } from './components/hifi/SettingsScreen';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Screen = 
  | 'welcome' 
  | 'login' 
  | 'register' 
  | 'home' 
  | 'explore' 
  | 'course-detail' 
  | 'lesson' 
  | 'completion'
  | 'profile'
  | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [screenIndex, setScreenIndex] = useState(0);

  const screens: { id: Screen; title: string; description: string }[] = [
    { id: 'welcome', title: '1. Welcome Screen', description: 'First impression with app branding and key features' },
    { id: 'login', title: '2. Login Screen', description: 'User authentication with social login options' },
    { id: 'register', title: '3. Register Screen', description: 'Account creation with learning preference selection' },
    { id: 'home', title: '4. Home Dashboard', description: 'Personalized dashboard with progress tracking and courses' },
    { id: 'explore', title: '5. Explore Courses', description: 'Browse and search courses with filters' },
    { id: 'course-detail', title: '6. Course Detail', description: 'Detailed course view with lesson list and progress' },
    { id: 'lesson', title: '7. Active Lesson', description: 'Interactive learning with accessibility controls' },
    { id: 'completion', title: '8. Completion & Achievement', description: 'Success feedback with stats and achievements' },
    { id: 'profile', title: '9. Profile Screen', description: 'User profile with stats and settings' },
    { id: 'settings', title: '10. Accessibility Settings', description: 'Comprehensive accessibility and learning preferences' }
  ];

  const handleScreenChange = (screen: Screen) => {
    setCurrentScreen(screen);
    const index = screens.findIndex(s => s.id === screen);
    if (index !== -1) setScreenIndex(index);
  };

  const goToNext = () => {
    const nextIndex = (screenIndex + 1) % screens.length;
    handleScreenChange(screens[nextIndex].id);
  };

  const goToPrev = () => {
    const prevIndex = (screenIndex - 1 + screens.length) % screens.length;
    handleScreenChange(screens[prevIndex].id);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return (
          <WelcomeScreen 
            onGetStarted={() => handleScreenChange('register')}
            onSignIn={() => handleScreenChange('login')}
          />
        );
      case 'login':
        return (
          <LoginScreen 
            onBack={() => handleScreenChange('welcome')}
            onLogin={() => handleScreenChange('home')}
            onRegister={() => handleScreenChange('register')}
          />
        );
      case 'register':
        return (
          <RegisterScreen 
            onBack={() => handleScreenChange('login')}
            onRegister={() => handleScreenChange('home')}
          />
        );
      case 'home':
        return (
          <HomeScreen 
            onSearch={() => handleScreenChange('explore')}
            onCourseClick={() => handleScreenChange('course-detail')}
            onProfile={() => handleScreenChange('profile')}
          />
        );
      case 'explore':
        return (
          <ExploreScreen 
            onBack={() => handleScreenChange('home')}
            onCourseClick={() => handleScreenChange('course-detail')}
          />
        );
      case 'course-detail':
        return (
          <CourseDetailScreen 
            onBack={() => handleScreenChange('explore')}
            onStartLesson={() => handleScreenChange('lesson')}
          />
        );
      case 'lesson':
        return (
          <LessonScreen 
            onClose={() => handleScreenChange('course-detail')}
            onComplete={() => handleScreenChange('completion')}
          />
        );
      case 'completion':
        return (
          <CompletionScreen 
            onClose={() => handleScreenChange('home')}
            onNextLesson={() => handleScreenChange('lesson')}
            onHome={() => handleScreenChange('home')}
          />
        );
      case 'profile':
        return (
          <ProfileScreen 
            onBack={() => handleScreenChange('home')}
          />
        );
      case 'settings':
        return (
          <SettingsScreen 
            onBack={() => handleScreenChange('profile')}
          />
        );
      default:
        return <WelcomeScreen onGetStarted={() => handleScreenChange('register')} onSignIn={() => handleScreenChange('login')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-3 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            NeuroLearn - High-Fidelity Prototype
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Accessible Learning Platform for Neurodiverse Students
          </p>
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-border">
            <span className="text-sm">
              Screen {screenIndex + 1} of {screens.length}
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Phone Display */}
          <div className="flex-1 flex justify-center">
            <PhoneFrame>
              {renderScreen()}
            </PhoneFrame>
          </div>

          {/* Screen Info & Navigation */}
          <div className="w-full lg:w-96 space-y-6">
            {/* Current Screen Info */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-border">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl mb-2">{screens[screenIndex].title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {screens[screenIndex].description}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3 mb-4">
                <button
                  onClick={goToPrev}
                  className="flex-1 h-12 rounded-xl bg-secondary hover:bg-secondary/80 flex items-center justify-center gap-2 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>
                <button
                  onClick={goToNext}
                  className="flex-1 h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2 transition-colors"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* All Screens List */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-border">
              <h3 className="mb-4">All Screens</h3>
              <div className="space-y-2">
                {screens.map((screen, index) => (
                  <button
                    key={screen.id}
                    onClick={() => handleScreenChange(screen.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all ${
                      currentScreen === screen.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-secondary hover:bg-secondary/80'
                    }`}
                  >
                    <p className="text-sm mb-1">{screen.title}</p>
                    <p className={`text-xs ${
                      currentScreen === screen.id ? 'text-primary-foreground/80' : 'text-muted-foreground'
                    }`}>
                      {screen.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-border">
              <h3 className="mb-4">Key Features</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Multi-modal learning (Visual, Audio, Text)</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Adjustable text size and audio controls</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Progress tracking and achievements</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Break reminders for sustained focus</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Clean, distraction-free interface</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Gamification with streaks and badges</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
