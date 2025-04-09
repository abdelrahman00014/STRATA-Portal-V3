'use client';

export default function Maintenance() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Maintenance Requests</h1>
      
      <form className="bg-white p-6 rounded shadow" action="/api/maintenance" method="POST">
        <div className="mb-4">
          <label htmlFor="unit" className="block mb-1 text-gray-800">Unit Number:</label>
          <input 
            type="text" 
            id="unit" 
            name="unit" 
            className="border p-2 w-full" 
            required 
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="issueType" className="block mb-1 text-gray-800">Issue Type:</label>
          <select 
            id="issueType" 
            name="issueType" 
            className="border p-2 w-full" 
            required
          >
            <option value="">Select...</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="structural">Structural</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1 text-gray-800">Description:</label>
          <textarea 
            id="description" 
            name="description" 
            rows="4" 
            className="border p-2 w-full" 
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}
