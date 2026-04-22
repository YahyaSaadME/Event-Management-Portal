import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

export function Login() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to OTP verification
    navigate('/otp-verification');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <Calendar className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-semibold text-gray-900">EventHub</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Login/Signup Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                {isSignup ? 'Create Account' : 'Welcome Back'}
              </h1>
              <p className="text-gray-600">
                {isSignup
                  ? 'Sign up to start managing events'
                  : 'Sign in to continue to your account'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {isSignup && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    required={isSignup}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Continue
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsSignup(!isSignup)}
                className="text-sm text-indigo-600 hover:text-indigo-700"
              >
                {isSignup
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
