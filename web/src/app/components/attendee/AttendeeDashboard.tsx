import { Link } from 'react-router';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { DashboardLayout } from '../DashboardLayout';
import { Badge } from '../ui/badge';
import { sampleEvents } from '../../data/dummyData';

export function AttendeeDashboard() {
  const attendeeEvents = sampleEvents;

  return (
    <DashboardLayout role="attendee">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">My Events</h1>
          <p className="text-gray-600 mt-1">Events you're invited to</p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Total Events</span>
              <Calendar className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-semibold text-gray-900">
              {attendeeEvents.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Upcoming</span>
              <Clock className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-semibold text-gray-900">
              {attendeeEvents.filter((e) => e.status === 'Upcoming').length}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Attended</span>
              <User className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-semibold text-gray-900">
              {attendeeEvents.filter((e) => e.status === 'Completed').length}
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {attendeeEvents.map((event) => (
            <Link
              key={event.id}
              to={`/attendee/events/${event.id}`}
              className="block"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-transparent hover:border-indigo-200 hover:shadow transition-all">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {event.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      by {event.organizer}
                    </p>
                  </div>
                  <Badge
                    variant={event.status === 'Upcoming' ? 'default' : 'secondary'}
                  >
                    {event.status}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>
                      {event.date} at {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{event.venue}, {event.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
