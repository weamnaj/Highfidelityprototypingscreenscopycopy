import { StatusBar } from './StatusBar';
import { ArrowLeft, Type, Volume2, Palette, Moon, Smartphone, Globe } from 'lucide-react';
import { Slider } from '../ui/slider';
import { Switch } from '../ui/switch';

interface SettingsScreenProps {
  onBack: () => void;
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  return (
    <div className="flex flex-col h-full bg-background">
      <StatusBar />
      
      {/* Header */}
      <div className="px-6 pt-4 pb-6">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl">Accessibility Settings</h2>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-6">
        {/* Visual Settings */}
        <div className="mb-8">
          <h3 className="mb-4">Visual</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">Text Size</span>
                </div>
                <span className="text-sm text-muted-foreground">Medium</span>
              </div>
              <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>Small</span>
                <span>Large</span>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm mb-1">Dark Mode</p>
                    <p className="text-xs text-muted-foreground">Reduce eye strain</p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Palette className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm mb-1">High Contrast</p>
                    <p className="text-xs text-muted-foreground">Improved visibility</p>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
        
        {/* Audio Settings */}
        <div className="mb-8">
          <h3 className="mb-4">Audio</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-muted-foreground" />
                  <span className="text-sm">Audio Speed</span>
                </div>
                <span className="text-sm text-muted-foreground">1.0x</span>
              </div>
              <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>0.5x</span>
                <span>2.0x</span>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm mb-1">Auto-play Audio</p>
                    <p className="text-xs text-muted-foreground">Start audio automatically</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>
        
        {/* Learning Preferences */}
        <div className="mb-8">
          <h3 className="mb-4">Learning</h3>
          <div className="space-y-3">
            <div className="bg-card border border-border rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm mb-1">Preferred Learning Mode</p>
                  <p className="text-xs text-muted-foreground">Visual</p>
                </div>
                <button className="text-sm text-primary">Change</button>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm mb-1">Break Reminders</p>
                  <p className="text-xs text-muted-foreground">Every 20 minutes</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm mb-1">Simplified Interface</p>
                  <p className="text-xs text-muted-foreground">Reduce visual clutter</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
        
        {/* System Settings */}
        <div className="mb-8">
          <h3 className="mb-4">System</h3>
          <div className="space-y-3">
            <button className="w-full bg-card border border-border rounded-2xl p-4 flex items-center justify-between hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-muted-foreground" />
                <div className="text-left">
                  <p className="text-sm mb-1">Language</p>
                  <p className="text-xs text-muted-foreground">English</p>
                </div>
              </div>
              <span className="text-sm text-primary">Change</span>
            </button>
            
            <button className="w-full bg-card border border-border rounded-2xl p-4 flex items-center justify-between hover:border-primary transition-colors">
              <div className="flex items-center gap-3">
                <Smartphone className="w-5 h-5 text-muted-foreground" />
                <div className="text-left">
                  <p className="text-sm mb-1">Device Settings</p>
                  <p className="text-xs text-muted-foreground">Sync preferences</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Save Button */}
      <div className="px-6 py-4 border-t border-border bg-card">
        <button 
          onClick={onBack}
          className="w-full h-14 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
