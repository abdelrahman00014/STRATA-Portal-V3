export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">StrataSphere Management Portal</h1>
        <p className="text-gray-600">Your building management solution</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Announcements</h2>
          <div className="mb-4 pb-4 border-b">
            <h3 className="font-medium">Annual General Meeting</h3>
            <p className="text-sm text-gray-500">May 15, 2025</p>
            <p>All owners are invited to attend the AGM in the common area.</p>
          </div>
          <div>
            <h3 className="font-medium">Building Maintenance</h3>
            <p className="text-sm text-gray-500">April 10, 2025</p>
            <p>Exterior painting will begin next week. Please clear balconies.</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/committee" className="text-blue-600 hover:underline">Committee Members</a></li>
            <li><a href="/documents" className="text-blue-600 hover:underline">Documents Repository</a></li>
            <li><a href="/maintenance" className="text-blue-600 hover:underline">Maintenance Requests</a></li>
            <li><a href="/financial" className="text-blue-600 hover:underline">Financial Information</a></li>
          </ul>
        </div>
      </div>
      
      <footer className="text-center text-gray-500 text-sm mt-12">
        © 2025 StrataSphere Management | Contact: admin@stratasphere.com
      </footer>
    </div>
  );
}
