'use client';

import { useState, useEffect } from 'react';

export default function ReportIssue() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    unit: '',
    issueType: '',
    description: '',
    urgency: 'medium',
    attachFile: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [reportId, setReportId] = useState(null);
  const [searchParams, setSearchParams] = useState(null);
  
  // Get query parameters if any
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const paramObj = {};
      
      // Check if we're looking up a report
      const lookupId = params.get('lookupId');
      if (lookupId) {
        fetchReport(lookupId);
      }
      
      // Check if we have pre-filled form data
      for (const [key, value] of params.entries()) {
        if (key !== 'lookupId' && formData.hasOwnProperty(key)) {
          paramObj[key] = value;
        }
      }
      
      if (Object.keys(paramObj).length > 0) {
        setFormData(prev => ({
          ...prev,
          ...paramObj
        }));
        setSearchParams(paramObj);
      }
    }
  }, []);
  
  // Fetch report data by ID (GET request example)
  const fetchReport = async (id) => {
    try {
      const response = await fetch(`/api/report-issue?id=${id}`);
      
      if (response.ok) {
        const data = await response.json();
        setReportId(id);
        // Display the report data
        alert(`Report #${id} Status: ${data.status}\nSubmitted: ${data.submitted}\nAssigned to: ${data.assignedTo || 'Pending assignment'}`);
      } else {
        alert(`Error: Report #${id} not found`);
      }
    } catch (error) {
      console.error('Error fetching report:', error);
      alert('Error connecting to server. Please try again later.');
    }
  };
  
  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.unit.trim()) {
      newErrors.unit = 'Unit number is required';
    }
    
    if (!formData.issueType) {
      newErrors.issueType = 'Please select an issue type';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 10) {
      newErrors.description = 'Description should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  // Handle form submission (POST request example)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Example of a POST request with form data
        const response = await fetch('/api/report-issue', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (response.ok) {
          setReportId(data.reportId);
          setSubmitted(true);
          setIsSubmitting(false);
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            unit: '',
            issueType: '',
            description: '',
            urgency: 'medium',
            attachFile: false
          });
        } else {
          throw new Error(data.message || 'Failed to submit report');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert(`Error: ${error.message || 'Failed to submit report. Please try again.'}`);
        setIsSubmitting(false);
      }
    }
  };
  
  // Generate a share link with form data
  const generateShareLink = () => {
    if (typeof window !== 'undefined') {
      const baseUrl = window.location.origin + window.location.pathname;
      const params = new URLSearchParams();
      
      Object.entries(formData).forEach(([key, value]) => {
        if (value && typeof value !== 'boolean') {
          params.append(key, value);
        } else if (typeof value === 'boolean' && value) {
          params.append(key, 'true');
        }
      });
      
      const shareUrl = `${baseUrl}?${params.toString()}`;
      
      // Copy to clipboard
      navigator.clipboard.writeText(shareUrl)
        .then(() => alert('Share link copied to clipboard!'))
        .catch(err => console.error('Failed to copy link:', err));
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">Report Building Issue</h1>
      
      {/* Search box to look up an existing report */}
      <div className="bg-slate-100 p-4 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3 text-black">Look Up Existing Report</h2>
        <div className="flex">
          <input 
            type="text" 
            id="lookupId" 
            placeholder="Enter Report ID" 
            className="border rounded-l px-4 py-2 w-full"
            onChange={(e) => setReportId(e.target.value)}
          />
          <button 
            onClick={() => fetchReport(reportId)}
            className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
          >
            Look Up
          </button>
        </div>
      </div>
      
      {/* Show pre-filled notification if form was pre-filled from URL params */}
      {searchParams && Object.keys(searchParams).length > 0 && (
        <div className="bg-blue-50 border border-blue-200 p-4 rounded mb-6 text-blue-800">
          Form pre-filled from shared link.
        </div>
      )}
      
      {submitted ? (
        <div className="bg-green-50 border border-green-200 p-6 rounded shadow mb-6">
          <h2 className="text-xl font-semibold mb-4 text-green-800">Report Submitted Successfully</h2>
          <p className="text-gray-900 mb-2">Your report has been submitted and will be reviewed by our team.</p>
          <p className="text-gray-900 mb-4"><strong>Report ID:</strong> {reportId}</p>
          <div className="flex space-x-4">
            <button 
              onClick={() => setSubmitted(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Another Report
            </button>
            <button 
              onClick={() => fetchReport(reportId)}
              className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
            >
              Check Status
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-1 text-gray-900">Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className={`border p-2 w-full rounded ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-900">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                className={`border p-2 w-full rounded ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="unit" className="block mb-1 text-gray-900">Unit Number:</label>
              <input 
                type="text" 
                id="unit" 
                name="unit" 
                value={formData.unit}
                onChange={handleChange}
                className={`border p-2 w-full rounded ${errors.unit ? 'border-red-500' : ''}`}
              />
              {errors.unit && <p className="text-red-500 text-sm mt-1">{errors.unit}</p>}
            </div>
            
            <div>
              <label htmlFor="issueType" className="block mb-1 text-gray-900">Issue Type:</label>
              <select 
                id="issueType" 
                name="issueType" 
                value={formData.issueType}
                onChange={handleChange}
                className={`border p-2 w-full rounded ${errors.issueType ? 'border-red-500' : ''}`}
              >
                <option value="">Select...</option>
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="structural">Structural</option>
                <option value="noise">Noise Complaint</option>
                <option value="common-areas">Common Areas</option>
                <option value="other">Other</option>
              </select>
              {errors.issueType && <p className="text-red-500 text-sm mt-1">{errors.issueType}</p>}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="description" className="block mb-1 text-gray-900">Description:</label>
              <textarea 
                id="description" 
                name="description" 
                value={formData.description}
                onChange={handleChange}
                rows="5" 
                className={`border p-2 w-full rounded ${errors.description ? 'border-red-500' : ''}`}
              ></textarea>
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
            
            <div>
              <label htmlFor="urgency" className="block mb-1 text-gray-900">Urgency Level:</label>
              <select 
                id="urgency" 
                name="urgency" 
                value={formData.urgency}
                onChange={handleChange}
                className="border p-2 w-full rounded"
              >
                <option value="low">Low - Can be addressed during regular maintenance</option>
                <option value="medium">Medium - Needs attention within a week</option>
                <option value="high">High - Needs attention within 48 hours</option>
                <option value="emergency">Emergency - Needs immediate attention</option>
              </select>
            </div>
            
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="attachFile" 
                name="attachFile"
                checked={formData.attachFile}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="attachFile" className="text-gray-900">
                I would like to attach photos of the issue (you'll be prompted after submission)
              </label>
            </div>
          </div>
          
          <div className="flex justify-between mt-8">
            <button 
              type="button" 
              onClick={generateShareLink}
              className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
            >
              Generate Share Link
            </button>
            
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Report'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
} 