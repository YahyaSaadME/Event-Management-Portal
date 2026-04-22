import { DashboardLayout } from './DashboardLayout';

interface EventsListProps {
  role: 'organizer' | 'attendee';
}

export function EventsList({ role }: EventsListProps) {
  return (
    <DashboardLayout role={role}>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Events</h1>
          <p className="text-gray-600 mt-1">Browse all events</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <p className="text-gray-600">Events list view - Coming soon</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
