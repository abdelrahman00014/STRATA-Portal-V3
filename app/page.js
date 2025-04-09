'use client';

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-blue-800">StrataSphere Management Portal</h1>
        <p className="text-gray-600">Simplifying community living through effective management</p>
      </header>

      <div className="mb-8 rounded-lg overflow-hidden shadow-md">
        <img 
          src="/building-banner.jpg" 
          alt="Modern apartment building" 
          className="w-full h-64 object-cover"
        />
      </div>

      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Announcements</h2>
        <div className="border-b pb-4 mb-4">
          <h3 className="font-medium">Annual General Meeting</h3>
          <p className="text-sm text-gray-500">May 15, 2025</p>
          <p>All owners are invited to attend the AGM in the common area.</p>
        </div>
        <div>
          <h3 className="font-medium">Building Maintenance</h3>
          <p className="text-sm text-gray-500">April 12, 2025</p>
          <p>Exterior painting will begin next week. Please clear all items from balconies.</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/committee" className="text-blue-600 hover:underline">Committee Members</a></li>
            <li><a href="/financial" className="text-blue-600 hover:underline">Financial Information</a></li>
            <li><a href="/maintenance" className="text-blue-600 hover:underline">Maintenance Requests</a></li>
            <li><a href="/documents" className="text-blue-600 hover:underline">Building Documents</a></li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium">Pool Maintenance</h3>
              <p className="text-sm text-gray-500">April 20, 2025</p>
              <p>Pool will be closed for maintenance.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium">Community BBQ</h3>
              <p className="text-sm text-gray-500">May 5, 2025</p>
              <p>Join us for a community BBQ in the garden area.</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="text-center mt-12 text-gray-600 text-sm">
        <p>© 2025 StrataSphere Management | Contact: admin@stratasphere.com</p>
      </footer>
    </div>
  );
}
