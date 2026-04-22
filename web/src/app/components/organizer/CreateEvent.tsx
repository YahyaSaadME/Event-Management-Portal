import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Plus } from 'lucide-react';
import { DashboardLayout } from '../DashboardLayout';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export function CreateEvent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    location: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to service selection
    navigate('/organizer/service-selection');
  };

  return (
    <DashboardLayout role="organizer">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/organizer/dashboard')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Create Event</h1>
            <p className="text-gray-600 mt-1">Set up your new event</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Event Title</Label>
              <Input
                id="title"
                placeholder="Enter event title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Event Description</Label>
              <Textarea
                id="description"
                placeholder="Describe your event"
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="venue">Venue</Label>
              <Input
                id="venue"
                placeholder="Enter venue name"
                value={formData.venue}
                onChange={(e) =>
                  setFormData({ ...formData, venue: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location (City, State)</Label>
              <Input
                id="location"
                placeholder="e.g., Mumbai, Maharashtra"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                required
              />
            </div>

            <div className="pt-4 flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/organizer/dashboard')}
              >
                Cancel
              </Button>
              <Button type="submit" className="gap-2">
                <Plus className="w-4 h-4" />
                Add Services
              </Button>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
