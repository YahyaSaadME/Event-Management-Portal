import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Download, Copy, CheckCircle2 } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { DashboardLayout } from '../DashboardLayout';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export function InvitationGeneration() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  
  // Generate a unique invitation link
  const invitationLink = `https://eventhub.app/invite/${Math.random().toString(36).substr(2, 9)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(invitationLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = () => {
    const svg = document.getElementById('qr-code');
    if (!svg) return;

    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL('image/png');

      const downloadLink = document.createElement('a');
      downloadLink.download = 'event-qr-code.png';
      downloadLink.href = pngFile;
      downloadLink.click();
    };

    img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
  };

  return (
    <DashboardLayout role="organizer">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/organizer/service-selection')}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">
              Event Invitation
            </h1>
            <p className="text-gray-600 mt-1">
              Share your event with attendees
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* QR Code Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              QR Code
            </h2>
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 mb-6">
                <QRCodeSVG
                  id="qr-code"
                  value={invitationLink}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-sm text-gray-600 text-center mb-6">
                Scan this QR code to access the event details
              </p>
              <Button onClick={handleDownloadQR} className="gap-2 w-full sm:w-auto">
                <Download className="w-4 h-4" />
                Download QR Code
              </Button>
            </div>
          </div>

          {/* Invitation Link Section */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Invitation Link
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">
                  Share this link with attendees
                </label>
                <div className="flex gap-2">
                  <Input
                    value={invitationLink}
                    readOnly
                    className="flex-1"
                  />
                  <Button
                    onClick={handleCopyLink}
                    variant={copied ? 'default' : 'outline'}
                    className="gap-2 flex-shrink-0"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  How to share:
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-semibold">1.</span>
                    <span>Copy the invitation link using the button above</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-semibold">2.</span>
                    <span>Share it via email, WhatsApp, or social media</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-600 font-semibold">3.</span>
                    <span>Attendees can access event details instantly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => navigate('/organizer/service-selection')}
          >
            Back
          </Button>
          <Button onClick={() => navigate('/organizer/dashboard')}>
            Done
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
