import { createBrowserRouter } from 'react-router';
import { Landing } from './components/Landing';
import { Login } from './components/Login';
import { OTPVerification } from './components/OTPVerification';
import { RoleSelection } from './components/RoleSelection';
import { OrganizerDashboard } from './components/organizer/OrganizerDashboard';
import { CreateEvent } from './components/organizer/CreateEvent';
import { ServiceSelection } from './components/organizer/ServiceSelection';
import { InvitationGeneration } from './components/organizer/InvitationGeneration';
import { AttendeeDashboard } from './components/attendee/AttendeeDashboard';
import { EventDetail } from './components/attendee/EventDetail';
import { ServiceProviderDashboard } from './components/provider/ServiceProviderDashboard';
import { ServicesList } from './components/provider/ServicesList';
import { RequestsList } from './components/provider/RequestsList';
import { Settings } from './components/Settings';
import { EventsList } from './components/EventsList';
import { OrganizerRequests } from './components/OrganizerRequests';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Landing,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/otp-verification',
    Component: OTPVerification,
  },
  {
    path: '/role-selection',
    Component: RoleSelection,
  },
  // Organizer routes
  {
    path: '/organizer/dashboard',
    Component: OrganizerDashboard,
  },
  {
    path: '/organizer/events',
    Component: () => EventsList({ role: 'organizer' }),
  },
  {
    path: '/organizer/create-event',
    Component: CreateEvent,
  },
  {
    path: '/organizer/service-selection',
    Component: ServiceSelection,
  },
  {
    path: '/organizer/invitation-generation',
    Component: InvitationGeneration,
  },
  {
    path: '/organizer/services',
    Component: ServiceSelection,
  },
  {
    path: '/organizer/requests',
    Component: OrganizerRequests,
  },
  {
    path: '/organizer/settings',
    Component: () => Settings({ role: 'organizer' }),
  },
  // Attendee routes
  {
    path: '/attendee/dashboard',
    Component: AttendeeDashboard,
  },
  {
    path: '/attendee/events',
    Component: () => EventsList({ role: 'attendee' }),
  },
  {
    path: '/attendee/events/:id',
    Component: EventDetail,
  },
  {
    path: '/attendee/settings',
    Component: () => Settings({ role: 'attendee' }),
  },
  // Service Provider routes
  {
    path: '/provider/dashboard',
    Component: ServiceProviderDashboard,
  },
  {
    path: '/provider/services',
    Component: ServicesList,
  },
  {
    path: '/provider/requests',
    Component: RequestsList,
  },
  {
    path: '/provider/settings',
    Component: () => Settings({ role: 'provider' }),
  },
]);
