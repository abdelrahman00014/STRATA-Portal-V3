'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { config } from './config';

export default function Home() {
  const [buildInfo, setBuildInfo] = useState(null);
  
  useEffect(() => {
    // Only show environment info in non-production environments
    if (config.buildInfo.environment !== 'production') {
      setBuildInfo({
        version: config.buildInfo.version,
        environment: config.buildInfo.environment,
        siteName: config.siteName,
        features: config.features
      });
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">StrataSphere Management Portal</h1>
        <p className="text-xl text-gray-700">Your building management simplified</p>
      </div>

      <div className="mb-12 relative">
        <Image
          src="/building-banner.jpg"
          alt="Modern apartment building"
          width={1200}
          height={400}
          className="w-full h-64 object-cover rounded-lg shadow-md"
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/committee" className="text-blue-600 hover:underline">Committee Members</a>
            </li>
            <li>
              <a href="/financial" className="text-blue-600 hover:underline">Financial Information</a>
            </li>
            <li>
              <a href="/maintenance" className="text-blue-600 hover:underline">Maintenance Requests</a>
            </li>
            <li>
              <a href="/documents" className="text-blue-600 hover:underline">Building Documents</a>
            </li>
            <li>
              <a href="/gallery" className="text-blue-600 hover:underline">Building Gallery</a>
            </li>
            <li>
              <a href="/faq" className="text-blue-600 hover:underline">Frequently Asked Questions</a>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">Annual General Meeting</h3>
              <p className="text-gray-700">May 15, 2025 - 7:00 PM</p>
              <p className="text-gray-600">Main Hall, Level 1</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900">Building Maintenance</h3>
              <p className="text-gray-700">April 12, 2025 - 9:00 AM to 4:00 PM</p>
              <p className="text-gray-600">Water will be shut off during this period</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Announcements */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Recent Announcements</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900">Pool Maintenance</h3>
            <p className="text-gray-700">April 20, 2025</p>
            <p className="text-gray-700">The swimming pool will be closed for maintenance. We apologize for any inconvenience.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Community BBQ</h3>
            <p className="text-gray-700">May 5, 2025</p>
            <p className="text-gray-700">Join us for a community BBQ on the rooftop garden. All residents are welcome!</p>
          </div>
        </div>
      </div>
      
      {/* Environment information - only shown in development or testing */}
      {buildInfo && (
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-12">
          <h2 className="text-lg font-bold mb-2 text-gray-900">Environment Information</h2>
          <p className="text-sm text-gray-700 mb-2">This section is only visible in non-production environments</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <strong>Site Name:</strong> {buildInfo.siteName}
            </div>
            <div>
              <strong>Version:</strong> {buildInfo.version}
            </div>
            <div>
              <strong>Environment:</strong> {buildInfo.environment}
            </div>
            <div>
              <strong>Notifications Enabled:</strong> {buildInfo.features.enableNotifications ? 'Yes' : 'No'}
            </div>
            <div>
              <strong>Payments Enabled:</strong> {buildInfo.features.enablePayments ? 'Yes' : 'No'}
            </div>
            <div>
              <strong>Maintenance Mode:</strong> {buildInfo.features.maintenanceMode ? 'Yes' : 'No'}
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Contact Administration</h3>
        <p className="text-gray-700">Email: <a href="mailto:admin@stratasphere.example.com" className="text-blue-600 hover:underline">admin@stratasphere.example.com</a></p>
        <p className="text-gray-700">Phone: (02) 9876 5432</p>
      </div>
    </div>
  );
}
