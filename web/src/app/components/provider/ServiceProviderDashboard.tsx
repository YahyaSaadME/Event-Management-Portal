import { DashboardLayout } from '../DashboardLayout';
import { Briefcase, FileText, CheckCircle2 } from 'lucide-react';

export function ServiceProviderDashboard() {
  const stats = {
    activeServices: 8,
    pendingRequests: 3,
    acceptedOrders: 15,
  };

  return (
    <DashboardLayout role="provider">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Manage your services and requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Active Services</span>
              <Briefcase className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-semibold text-gray-900">
              {stats.activeServices}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Pending Requests</span>
              <FileText className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-semibold text-gray-900">
              {stats.pendingRequests}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">Accepted Orders</span>
              <CheckCircle2 className="w-5 h-5 text-indigo-600" />
            </div>
            <p className="text-3xl font-semibold text-gray-900">
              {stats.acceptedOrders}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Overview
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Services</p>
                  <p className="text-sm text-gray-600">
                    Manage your offerings
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Requests</p>
                  <p className="text-sm text-gray-600">
                    {stats.pendingRequests} pending action
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
