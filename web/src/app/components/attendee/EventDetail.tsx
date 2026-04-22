import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Calendar, Clock, MapPin, Users, UtensilsCrossed, Camera, Music } from 'lucide-react';
import { DashboardLayout } from '../DashboardLayout';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { sampleEvents } from '../../data/dummyData';

export function EventDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Find the event by ID
  const event = sampleEvents.find((e) => e.id === id) || sampleEvents[0];

  const serviceIcons: Record<string, any> = {
    Food: UtensilsCrossed,
    Photography: Camera,
    Sound: Music,
    Hall: MapPin,
  };

  return (
    <DashboardLayout role="attendee">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/attendee/dashboard')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gray-900">
              {event.name}
            </h1>
            <p className="text-gray-600 mt-1">by {event.organizer}</p>
          </div>
          <Badge variant={event.status === 'Upcoming' ? 'default' : 'secondary'}>
            {event.status}
          </Badge>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Event Details */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Event Details
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Services Included
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {event.services.map((service, index) => {
                  const category = service.includes('Biryani') || service.includes('Pizza') 
                    ? 'Food' 
                    : service.includes('Photography') 
                    ? 'Photography' 
                    : service.includes('Sound') 
                    ? 'Sound' 
                    : 'Hall';
                  const Icon = serviceIcons[category];
                  
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-indigo-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-900">
                        {service}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Event Timeline */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Event Timeline
              </h2>
              <div className="space-y-4">
                {[
                  { time: '06:00 PM', activity: 'Guest Arrival & Registration' },
                  { time: '06:30 PM', activity: 'Welcome Speech' },
                  { time: '07:00 PM', activity: 'Dinner Service' },
                  { time: '08:00 PM', activity: 'Main Program' },
                  { time: '09:30 PM', activity: 'Closing Remarks' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-24 flex-shrink-0 font-semibold text-indigo-600">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        <span className="text-gray-900">{item.activity}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Date & Time Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Date & Time
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>

            {/* Venue Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Venue</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">{event.venue}</p>
                    <p className="text-sm text-gray-600 mt-1">{event.location}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 h-32 bg-gray-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-gray-400" />
              </div>
            </div>

            {/* Attendees Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Attendees</h3>
              <div className="flex items-center gap-3 text-gray-700">
                <Users className="w-5 h-5 text-indigo-600" />
                <span>{event.attendees} people attending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
