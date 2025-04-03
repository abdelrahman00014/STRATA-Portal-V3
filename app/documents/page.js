export default function Documents() {
  const documents = [
    { name: "Building Floor Plan", type: "PDF", date: "Jan 2025", link: "#" },
    { name: "Strata By-laws", type: "PDF", date: "Feb 2025", link: "#" },
    { name: "AGM Minutes", type: "PDF", date: "Mar 2025", link: "#" },
    { name: "Financial Report", type: "PDF", date: "Apr 2025", link: "#" }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Document Repository</h1>
      
      <div className="bg-white p-6 rounded shadow">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Document Name</th>
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{doc.name}</td>
                <td className="py-2">{doc.type}</td>
                <td className="py-2">{doc.date}</td>
                <td className="py-2">
                  <a href={doc.link} className="text-blue-600 hover:underline">Download</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
