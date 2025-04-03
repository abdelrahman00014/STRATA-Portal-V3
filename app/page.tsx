import React from 'react';

export default function Home(): React.ReactNode {
  return (
    <div className="min-h-screen p-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-800">StrataSphere Management Portal</h1>
        <p className="text-gray-600">Simplifying community living through effective management</p>
      </header>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Announcements</h2>
        <div className="border-b pb-4 mb-4">
          <h3 className="font-medium">Annual General Meeting</h3>
          <p className="text-sm text-gray-500">May 15, 2025</p>
          <p>The annual general meeting will be held in the common room at 7:00 PM.</p>
        </div>
        <div>
          <h3 className="font-medium">Building Maintenance</h3>
          <p className="text-sm text-gray-500">April 12, 2025</p>
          <p>Exterior painting will begin next week. Please clear all items from balconies.</p>
        </div>
      </section>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-2">
          <li><a href="/committee" className="text-blue-600 hover:underline">Committee Members</a></li>
          <li><a href="/financial" className="text-blue-600 hover:underline">Financial Information</a></li>
          <li><a href="/maintenance" className="text-blue-600 hover:underline">Maintenance Requests</a></li>
          <li><a href="/documents" className="text-blue-600 hover:underline">Building Documents</a></li>
        </ul>
      </section>

      <footer className="text-center mt-12 text-gray-600 text-sm">
        <p>© 2025 StrataSphere Management | Contact: admin@stratasphere.com</p>
      </footer>
    </div>
  );
}
