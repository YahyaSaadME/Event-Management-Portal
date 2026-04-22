import { useState } from 'react';
import { MapPin, Plus } from 'lucide-react';
import { DashboardLayout } from '../DashboardLayout';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { allServices, indianCities } from '../../data/dummyData';

export function ServicesList() {
  const [services, setServices] = useState(
    allServices.slice(0, 8).map((service, index) => ({
      ...service,
      id: `service-${index}`,
      location: indianCities[index % indianCities.length],
      available: index % 3 !== 0,
    }))
  );

  const toggleAvailability = (id: string) => {
    setServices(
      services.map((service) =>
        service.id === id
          ? { ...service, available: !service.available }
          : service
      )
    );
  };

  return (
    <DashboardLayout role="provider">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">My Services</h1>
            <p className="text-gray-600 mt-1">
              Manage your service offerings
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Service
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {service.name}
                    </h3>
                  </div>
                  <Badge variant="outline" className="mb-3">
                    {service.category}
                  </Badge>
                  <p className="text-lg font-semibold text-indigo-600 mb-2">
                    {service.price}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{service.location}</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-700">
                  Availability
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    {service.available ? 'Available' : 'Not Available'}
                  </span>
                  <Switch
                    checked={service.available}
                    onCheckedChange={() => toggleAvailability(service.id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
