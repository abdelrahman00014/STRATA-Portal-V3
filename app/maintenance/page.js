'use client';

import { useState } from 'react';

export default function Maintenance() {
  const [formData, setFormData] = useState({
    unit: '',
    issueType: '',
    description: '',
    priority: 'normal'
  });
  
  const [status, setStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: '',
    requestId: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, isSubmitting: true });
    
    try {
      // Create form data for submission
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });
      
      // Send POST request to API endpoint
      const response = await fetch('/api/maintenance-request', {
        method: 'POST',
        body: submitData
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: data.message,
          requestId: data.requestId
        });
        
        // Clear form data
        setFormData({
          unit: '',
          issueType: '',
          description: '',
          priority: 'normal'
        });
      } else {
        throw new Error(data.error || 'Failed to submit request');
      }
    } catch (error) {
      setStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: error.message,
        requestId: null
      });
    }
  };
  
  const checkStatus = async () => {
    if (!status.requestId) return;
    
    try {
      // Example of a GET request with URL parameters
      const response = await fetch(`/api/maintenance-request?requestId=${status.requestId}`);
      const data = await response.json();
      
      if (response.ok) {
        setStatus({
          ...status,
          message: `Status: ${data.status}, Assigned to: ${data.assignedTo}, Estimated completion: ${data.estimatedCompletion}`
        });
      } else {
        throw new Error(data.error || 'Failed to check status');
      }
    } catch (error) {
      setStatus({
        ...status,
        message: `Error checking status: ${error.message}`
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Maintenance Requests</h1>
      
      {status.isSuccess ? (
        <div className="bg-green-50 border border-green-200 p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Request Submitted Successfully</h2>
          <p className="text-gray-800">{status.message}</p>
          <p className="text-gray-800">Request ID: {status.requestId}</p>
          <button 
            onClick={checkStatus}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Check Status
          </button>
          <button 
            onClick={() => setStatus({ isSubmitting: false, isSuccess: false, isError: false, message: '', requestId: null })}
            className="mt-4 ml-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form className="bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="unit" className="block mb-1 text-gray-800">Unit Number:</label>
            <input 
              type="text" 
              id="unit" 
              name="unit" 
              value={formData.unit}
              onChange={handleChange}
              className="border p-2 w-full bg-white text-black" 
              required 
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="issueType" className="block mb-1 text-gray-800">Issue Type:</label>
            <select 
              id="issueType" 
              name="issueType" 
              value={formData.issueType}
              onChange={handleChange}
              className="border p-2 w-full bg-white text-black" 
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
            <label htmlFor="priority" className="block mb-1 text-gray-800">Priority:</label>
            <select 
              id="priority" 
              name="priority" 
              value={formData.priority}
              onChange={handleChange}
              className="border p-2 w-full bg-white text-black" 
            >
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
              <option value="emergency">Emergency</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label htmlFor="description" className="block mb-1 text-gray-800">Description:</label>
            <textarea 
              id="description" 
              name="description" 
              value={formData.description}
              onChange={handleChange}
              rows="4" 
              className="border p-2 w-full bg-white text-black" 
              required
            ></textarea>
          </div>
          
          {status.isError && (
            <div className="mb-4 p-3 bg-red-50 text-red-800 rounded">
              {status.message}
            </div>
          )}
          
          <button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
            disabled={status.isSubmitting}
          >
            {status.isSubmitting ? 'Submitting...' : 'Submit Request'}
          </button>
        </form>
      )}
      
      <div className="mt-8 bg-blue-50 p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">About Form Requests</h2>
        <p className="text-gray-800 mb-2">This form demonstrates both POST and GET HTTP methods:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="text-gray-800">POST: Used when submitting the form data to create a new maintenance request</li>
          <li className="text-gray-800">GET: Used when checking the status of an existing request by ID</li>
        </ul>
        <p className="text-gray-800">HTTP status codes are used to indicate the result of requests:</p>
        <ul className="list-disc pl-6">
          <li className="text-gray-800">200: Success - Request was processed correctly</li>
          <li className="text-gray-800">400: Bad Request - Missing or invalid parameters</li>
          <li className="text-gray-800">500: Server Error - Something went wrong on the server</li>
          <li className="text-gray-800">302/301: Redirect - Used when a page has moved</li>
        </ul>
      </div>
    </div>
  );
}
