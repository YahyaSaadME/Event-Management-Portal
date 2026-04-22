import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, MapPin, CheckCircle2 } from 'lucide-react';
import { DashboardLayout } from '../DashboardLayout';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  foodServices,
  decorationServices,
  hallServices,
  photographyServices,
  soundLightingServices,
  indianCities,
} from '../../data/dummyData';

export function ServiceSelection() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const serviceCategories = [
    { name: 'Food', services: foodServices },
    { name: 'Decoration', services: decorationServices },
    { name: 'Hall', services: hallServices },
    { name: 'Photography', services: photographyServices },
    { name: 'Sound & Lighting', services: soundLightingServices },
  ];

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  const handleContinue = () => {
    navigate('/organizer/invitation-generation');
  };

  return (
    <DashboardLayout role="organizer">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/organizer/create-event')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Select Services
            </h1>
            <p className="text-gray-600 mt-1">
              Choose services for your event ({selectedServices.length} selected)
            </p>
          </div>
        </div>

        {/* Service Tabs */}
        <div className="bg-white rounded-2xl shadow-sm">
          <Tabs defaultValue="Food" className="w-full">
            <div className="border-b border-gray-200 px-6 pt-6">
              <TabsList className="w-full justify-start overflow-x-auto">
                {serviceCategories.map((category) => (
                  <TabsTrigger key={category.name} value={category.name}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {serviceCategories.map((category) => (
              <TabsContent key={category.name} value={category.name} className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.services.map((service, index) => {
                    const isSelected = selectedServices.includes(service.name);
                    const location =
                      indianCities[index % indianCities.length];
                    const isAvailable = Math.random() > 0.3;

                    return (
                      <div
                        key={service.name}
                        className={`
                          border-2 rounded-xl p-5 transition-all cursor-pointer
                          ${
                            isSelected
                              ? 'border-indigo-600 bg-indigo-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }
                        `}
                        onClick={() => toggleService(service.name)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {service.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {service.price}
                            </p>
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span>{location}</span>
                          </div>
                          <Badge variant={isAvailable ? 'default' : 'secondary'}>
                            {isAvailable ? 'Available' : 'Not Available'}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => navigate('/organizer/create-event')}
          >
            Back
          </Button>
          <Button onClick={handleContinue} disabled={selectedServices.length === 0}>
            Continue to Invitations
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
