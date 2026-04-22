import { useState } from 'react';
import { Calendar, MapPin, User, CheckCircle2, X } from 'lucide-react';
import { DashboardLayout } from '../DashboardLayout';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { serviceRequests } from '../../data/dummyData';

export function RequestsList() {
  const [requests, setRequests] = useState(serviceRequests);

  const handleAccept = (id: string) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: 'Accepted' } : req
      )
    );
  };

  const handleReject = (id: string) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: 'Rejected' } : req
      )
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending':
        return <Badge variant="outline">Pending</Badge>;
      case 'Accepted':
        return <Badge>Accepted</Badge>;
      case 'Rejected':
        return <Badge variant="secondary">Rejected</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <DashboardLayout role="provider">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">
            Service Requests
          </h1>
          <p className="text-gray-600 mt-1">
            Manage requests from event organizers
          </p>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {request.eventName}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <User className="w-4 h-4" />
                        <span>{request.organizerName}</span>
                      </div>
                    </div>
                    {getStatusBadge(request.status)}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span>{request.eventDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{request.location}</span>
                    </div>
                  </div>

                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Service:</span>{' '}
                      {request.serviceName}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      <span className="font-medium">Venue:</span>{' '}
                      {request.venue}
                    </p>
                  </div>
                </div>

                {request.status === 'Pending' && (
                  <div className="flex lg:flex-col gap-2">
                    <Button
                      onClick={() => handleAccept(request.id)}
                      className="gap-2 flex-1 lg:flex-none"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Accept
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleReject(request.id)}
                      className="gap-2 flex-1 lg:flex-none"
                    >
                      <X className="w-4 h-4" />
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
