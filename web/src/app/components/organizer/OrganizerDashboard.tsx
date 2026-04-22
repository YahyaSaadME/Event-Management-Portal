import { Link } from 'react-router';
import { Calendar, Clock, MapPin, Plus, Users } from 'lucide-react';
import { DashboardLayout } from '../DashboardLayout';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { sampleEvents } from '../../data/dummyData';

export function OrganizerDashboard() {
  const organizerEvents = sampleEvents.filter((e) => e.status === 'Upcoming');
  const totalEvents = sampleEvents.length;
  const upcomingEvents = sampleEvents.filter((e) => e.status === 'Upcoming').length;
  const servicesRequested = 12;

  return (
    <DashboardLayout role="organizer">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Manage your events and services</p>
          </div>
          <Link to="/organizer/create-event">
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Create Event
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Events</span>
              <Calendar className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-semibold text-gray-900">{totalEvents}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Upcoming Events</span>
              <Clock className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-semibold text-gray-900">{upcomingEvents}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Services Requested</span>
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-semibold text-gray-900">{servicesRequested}</p>
          </div>
        </div>

        {/* Events List */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Your Events</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {organizerEvents.map((event) => (
                <Link
                  key={event.id}
                  to={`/organizer/events/${event.id}`}
                  className="block"
                >
                  <div className="border border-gray-200 rounded-xl p-5 hover:border-indigo-200 hover:shadow-sm transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-indigo-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {event.name}
                            </h3>
                            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>
                                  {event.date} at {event.time}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {event.venue}
                        </p>
                      </div>
                      <Badge
                        variant={event.status === 'Upcoming' ? 'default' : 'secondary'}
                      >
                        {event.status}
                      </Badge>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
