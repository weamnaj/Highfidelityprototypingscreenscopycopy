import { StatusBar } from './StatusBar';
import { ArrowLeft, Settings, BookOpen, Trophy, Target, Edit2, Bell, HelpCircle, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Switch } from '../ui/switch';

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      <StatusBar />
      
      {/* Header */}
      <div className="px-6 pt-4 pb-6">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl">Profile</h2>
          <button className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        
        {/* Profile Info */}
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <Avatar className="w-24 h-24">
              <AvatarFallback className="bg-primary text-primary-foreground text-3xl">AJ</AvatarFallback>
            </Avatar>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Edit2 className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
          <h2 className="text-2xl mb-1">Alex Johnson</h2>
          <p className="text-muted-foreground mb-4">alex.j@email.com</p>
          
          {/* Stats */}
          <div className="flex gap-6">
            {[
              { value: '12', label: 'Courses' },
              { value: '45', label: 'Completed' },
              { value: '890', label: 'Points' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-xl mb-1">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-6">
        {/* Achievements */}
        <div className="mb-6">
          <h3 className="mb-4">Recent Achievements</h3>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {[
              { emoji: '🏆', title: 'Math Master', color: 'from-yellow-400 to-orange-500' },
              { emoji: '🔥', title: '7 Day Streak', color: 'from-orange-500 to-red-500' },
              { emoji: '⭐', title: 'Fast Learner', color: 'from-blue-500 to-cyan-500' }
            ].map((achievement, i) => (
              <div key={i} className="flex-shrink-0 bg-card border border-border rounded-2xl p-4 w-32">
                <div className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mx-auto mb-2 shadow-md`}>
                  <span className="text-2xl">{achievement.emoji}</span>
                </div>
                <p className="text-xs text-center">{achievement.title}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Learning Stats */}
        <div className="mb-6">
          <h3 className="mb-4">Learning Stats</h3>
          <div className="space-y-3">
            {[
              { icon: BookOpen, label: 'Total Learning Time', value: '24h 30m', color: 'text-blue-500' },
              { icon: Trophy, label: 'Achievements Earned', value: '15', color: 'text-yellow-500' },
              { icon: Target, label: 'Daily Goal Streak', value: '7 days', color: 'text-orange-500' }
            ].map((stat, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-4 flex items-center gap-3">
                <div className={`w-10 h-10 bg-secondary rounded-xl flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p>{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Settings */}
        <div className="mb-6">
          <h3 className="mb-4">Preferences</h3>
          <div className="space-y-2">
            {[
              { icon: Bell, label: 'Push Notifications', checked: true },
              { icon: Target, label: 'Daily Goal Reminders', checked: true },
              { icon: HelpCircle, label: 'Learning Tips', checked: false }
            ].map((setting, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <setting.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">{setting.label}</span>
                </div>
                <Switch checked={setting.checked} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Actions */}
        <div className="space-y-2 pb-6">
          <button className="w-full bg-card border border-border rounded-2xl p-4 flex items-center justify-between hover:border-primary transition-colors">
            <span className="text-sm">Accessibility Settings</span>
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-full bg-card border border-border rounded-2xl p-4 flex items-center justify-between hover:border-primary transition-colors">
            <span className="text-sm">Help & Support</span>
            <HelpCircle className="w-5 h-5 text-muted-foreground" />
          </button>
          <button className="w-full bg-destructive/10 border border-destructive/20 rounded-2xl p-4 flex items-center justify-between hover:bg-destructive/20 transition-colors">
            <span className="text-sm text-destructive">Log Out</span>
            <LogOut className="w-5 h-5 text-destructive" />
          </button>
        </div>
      </div>
    </div>
  );
}
