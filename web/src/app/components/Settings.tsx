import { DashboardLayout } from './DashboardLayout';
import { User, Mail, Lock } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

interface SettingsProps {
  role: 'organizer' | 'attendee' | 'provider';
}

export function Settings({ role }: SettingsProps) {
  return (
    <DashboardLayout role={role}>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account settings</p>
        </div>

        {/* Settings Form */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 max-w-2xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="pl-10"
                  defaultValue="John Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  defaultValue="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter new password"
                  className="pl-10"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button>Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
