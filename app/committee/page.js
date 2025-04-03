export default function Committee() {
  const members = [
    { name: "Jane Smith", role: "Chairperson", email: "chair@stratasphere.com" },
    { name: "John Doe", role: "Treasurer", email: "treasurer@stratasphere.com" },
    { name: "Alex Johnson", role: "Secretary", email: "secretary@stratasphere.com" }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Committee Members</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div key={index} className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-medium">{member.name}</h2>
            <p className="text-blue-700">{member.role}</p>
            <p className="text-gray-600">{member.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
