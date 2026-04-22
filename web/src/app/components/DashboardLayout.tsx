import { ReactNode, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import {
  Calendar,
  LayoutDashboard,
  CalendarDays,
  Briefcase,
  FileText,
  Settings,
  Bell,
  Search,
  Menu,
  X,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback } from './ui/avatar';

interface DashboardLayoutProps {
  children: ReactNode;
  role: 'organizer' | 'attendee' | 'provider';
}

export function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const roleConfig = {
    organizer: {
      baseRoute: '/organizer',
      title: 'Organizer Dashboard',
      menuItems: [
        { label: 'Dashboard', icon: LayoutDashboard, path: '/organizer/dashboard' },
        { label: 'Events', icon: CalendarDays, path: '/organizer/events' },
        { label: 'Services', icon: Briefcase, path: '/organizer/services' },
        { label: 'Requests', icon: FileText, path: '/organizer/requests' },
        { label: 'Settings', icon: Settings, path: '/organizer/settings' },
      ],
    },
    attendee: {
      baseRoute: '/attendee',
      title: 'Attendee Dashboard',
      menuItems: [
        { label: 'Dashboard', icon: LayoutDashboard, path: '/attendee/dashboard' },
        { label: 'Events', icon: CalendarDays, path: '/attendee/events' },
        { label: 'Settings', icon: Settings, path: '/attendee/settings' },
      ],
    },
    provider: {
      baseRoute: '/provider',
      title: 'Provider Dashboard',
      menuItems: [
        { label: 'Dashboard', icon: LayoutDashboard, path: '/provider/dashboard' },
        { label: 'Services', icon: Briefcase, path: '/provider/services' },
        { label: 'Requests', icon: FileText, path: '/provider/requests' },
        { label: 'Settings', icon: Settings, path: '/provider/settings' },
      ],
    },
  };

  const config = roleConfig[role];

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
              <Link to="/" className="flex items-center gap-2">
                <Calendar className="w-8 h-8 text-indigo-600" />
                <span className="text-xl font-semibold text-gray-900">EventHub</span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search events..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full"></span>
              </Button>
              <Avatar className="cursor-pointer" onClick={handleLogout}>
                <AvatarFallback className="bg-indigo-100 text-indigo-600">
                  {role.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200
            transform transition-transform duration-200 ease-in-out lg:transform-none
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            top-16 lg:top-0
          `}
        >
          <nav className="p-4 space-y-1">
            {config.menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
                    ${
                      isActive
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-20 lg:hidden top-16"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
