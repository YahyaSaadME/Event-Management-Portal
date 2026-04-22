import { DashboardLayout } from './DashboardLayout';

export function OrganizerRequests() {
  return (
    <DashboardLayout role="organizer">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Service Requests
          </h1>
          <p className="text-gray-600 mt-1">Track your service requests</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <p className="text-gray-600">Your service requests - Coming soon</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
