export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-black text-white">
      <header className="text-center mb-10">
        {/* 🏢 LOGO */}
        <img src="/logo.png" alt="Strata Logo" className="mx-auto mb-4 w-24 h-auto" />
        <h1 className="text-3xl font-bold">StrataSphere Management Portal</h1>
        <p className="text-gray-400">Your building management solution</p>
      </header>

      {/* Announcements Section */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8 text-black">
        <h2 className="text-xl font-semibold mb-4">Recent Announcements</h2>
        <div className="border-b pb-4 mb-4">
          <h3 className="font-medium text-gray-800">Annual General Meeting</h3>
          <p className="text-sm text-gray-600">May 15, 2025</p>
          <p className="text-gray-700">All owners are invited to attend the AGM in the common area.</p>
        </div>
        <div>
          <h3 className="font-medium text-gray-800">Building Maintenance</h3>
          <p className="text-sm text-gray-600">April 10, 2025</p>
          <p className="text-gray-700">Exterior painting will begin next week. Please clear balconies.</p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8 text-black">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-2">
          <li><a href="/committee" className="text-blue-800 hover:underline">Committee Members</a></li>
          <li><a href="/documents" className="text-blue-800 hover:underline">Documents Repository</a></li>
          <li><a href="/maintenance" className="text-blue-800 hover:underline">Maintenance Requests</a></li>
          <li><a href="/financial" className="text-blue-800 hover:underline">Financial Information</a></li>
        </ul>
      </section>

      <footer className="text-center mt-12 text-gray-400 text-sm">
        <p>© 2025 StrataSphere Management | Contact: admin@stratasphere.com</p>
      </footer>
    </div>
  );
}
