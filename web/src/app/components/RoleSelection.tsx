import { useNavigate, Link } from 'react-router';
import { Calendar, Users, Briefcase, UserCircle } from 'lucide-react';
import { Button } from './ui/button';

export function RoleSelection() {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'attendee',
      title: 'Attendee',
      description: 'Join events via invitations and stay updated with event details',
      icon: Users,
      route: '/attendee/dashboard',
    },
    {
      id: 'organizer',
      title: 'Organizer',
      description: 'Create and manage events, request services, and invite attendees',
      icon: UserCircle,
      route: '/organizer/dashboard',
    },
    {
      id: 'provider',
      title: 'Service Provider',
      description: 'Offer your services and respond to organizer requests',
      icon: Briefcase,
      route: '/provider/dashboard',
    },
  ];

  const handleRoleSelect = (route: string) => {
    // Store role in localStorage for demo purposes
    const roleType = route.split('/')[1];
    localStorage.setItem('userRole', roleType);
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <Calendar className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-semibold text-gray-900">EventHub</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Role Selection */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-semibold text-gray-900 mb-3">
              Choose Your Role
            </h1>
            <p className="text-lg text-gray-600">
              Select how you want to use EventHub
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div
                  key={role.id}
                  className="bg-white rounded-2xl p-8 shadow-sm border-2 border-transparent hover:border-indigo-200 transition-colors"
                >
                  <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {role.title}
                  </h3>
                  <p className="text-gray-600 mb-6 min-h-[3rem]">
                    {role.description}
                  </p>
                  <Button
                    onClick={() => handleRoleSelect(role.route)}
                    className="w-full"
                  >
                    Select
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
