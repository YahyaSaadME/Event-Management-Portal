import { Link } from 'react-router';
import { Calendar, Users, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Calendar className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-semibold text-gray-900">EventHub</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/login">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-semibold text-gray-900 mb-6">
              Manage Events Seamlessly
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A modern platform for organizing events, connecting with service providers,
              and managing attendees all in one place.
            </p>
            <Link to="/login">
              <Button size="lg" className="gap-2">
                Start Your Event <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Everything You Need for Perfect Events
            </h2>
            <p className="text-lg text-gray-600">
              Powerful features designed for organizers, attendees, and service providers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Organizer Features */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For Organizers
              </h3>
              <p className="text-gray-600 mb-6">
                Create and manage events with ease. Request services and generate invitations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Event creation & management</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Service provider requests</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>QR code & link generation</span>
                </li>
              </ul>
            </div>

            {/* Attendee Features */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For Attendees
              </h3>
              <p className="text-gray-600 mb-6">
                Discover events through invitations and stay updated with all details.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Access via QR or link</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>View event details & venue</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Event timeline & services</span>
                </li>
              </ul>
            </div>

            {/* Service Provider Features */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                For Service Providers
              </h3>
              <p className="text-gray-600 mb-6">
                Manage your services and respond to event organizer requests.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Service management</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Request handling</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span>Availability tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of organizers, attendees, and service providers
          </p>
          <Link to="/login">
            <Button size="lg" className="gap-2">
              Create Your Account <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-indigo-600" />
              <span className="font-semibold text-gray-900">EventHub</span>
            </div>
            <p className="text-sm text-gray-600">
              © 2026 EventHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
