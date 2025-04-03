export default function Home() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">StrataSphere Management Portal</h1>
      <p className="mb-8">Welcome to your building management system</p>
      
      <div className="bg-white p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Announcements</h2>
        <p>Annual General Meeting: May 15, 2025</p>
        <p>Building Maintenance: April 10, 2025</p>
      </div>
      
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600">Committee Members</a></li>
          <li><a href="#" className="text-blue-600">Documents</a></li>
          <li><a href="#" className="text-blue-600">Maintenance</a></li>
        </ul>
      </div>
    </div>
  );
}
