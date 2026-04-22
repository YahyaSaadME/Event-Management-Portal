import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';

export function OTPVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    if (otp.length === 6) {
      // Navigate to role selection
      navigate('/role-selection');
    }
  };

  const handleResend = () => {
    // Mock resend OTP
    alert('OTP resent successfully!');
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

      {/* OTP Form */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Verify Your Email
              </h1>
              <p className="text-gray-600">
                We've sent a 6-digit code to your email
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col items-center gap-4">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button onClick={handleVerify} className="w-full" disabled={otp.length !== 6}>
                Verify & Continue
              </Button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-sm text-indigo-600 hover:text-indigo-700"
                >
                  Resend OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
