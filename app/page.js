'use client';

export default function Home() {
  return (
    <div className="bg-slate-50 text-gray-900 min-h-screen">
      <header className="border-b border-gray-300 py-4 px-6 mb-6 bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-black">StrataSphere Management Portal</h1>
        <p className="text-xl text-black">Your building management simplified</p>
      </header>

      <main className="container mx-auto px-4 mb-8">
        <div className="mb-8">
          <img 
            src="/building-banner.jpg" 
            alt="Modern apartment building" 
            className="w-full h-64 object-cover rounded-lg shadow-md" 
          />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-black border-b border-gray-300 pb-2">
            Recent Announcements
          </h2>
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
            <div className="mb-4 pb-4 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-black">Annual General Meeting</h3>
              <p className="text-gray-900">The annual general meeting will be held on May 15, 2025 at 6:00 PM in the community room.</p>
              <p className="mt-2 text-gray-900 font-medium">Posted: March 15, 2025</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">Building Maintenance</h3>
              <p className="text-gray-900">Scheduled maintenance of the elevator will take place on April 12, 2025. Please use the stairs during this time.</p>
              <p className="mt-2 text-gray-900 font-medium">Posted: March 10, 2025</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-black border-b border-gray-300 pb-2">
              Quick Links
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
              <ul className="space-y-2">
                <li>
                  <a href="/committee" className="text-blue-800 hover:text-blue-900 font-medium">Committee Members</a>
                </li>
                <li>
                  <a href="/financial" className="text-blue-800 hover:text-blue-900 font-medium">Financial Information</a>
                </li>
                <li>
                  <a href="/maintenance" className="text-blue-800 hover:text-blue-900 font-medium">Maintenance Requests</a>
                </li>
                <li>
                  <a href="/bylaws" className="text-blue-800 hover:text-blue-900 font-medium">Building Bylaws</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4 text-black border-b border-gray-300 pb-2">
              Upcoming Events
            </h2>
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-300">
              <div className="mb-4 pb-4 border-b border-gray-200 border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-black">Pool Maintenance</h3>
                <p className="text-gray-900">April 20, 2025 at 9:00 AM</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-black">Community BBQ</h3>
                <p className="text-gray-900">May 5, 2025 at 12:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-100 py-4 px-6 border-t border-gray-300 shadow-inner">
        <p className="text-black text-center">
          &copy; 2025 StrataSphere Management Portal. Contact <a href="mailto:admin@stratasphere.com" className="text-blue-800 hover:text-blue-900 underline">admin@stratasphere.com</a> for support.
        </p>
      </footer>
    </div>
  );
}
