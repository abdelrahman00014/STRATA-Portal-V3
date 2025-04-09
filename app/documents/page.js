'use client';

import { useState } from 'react';
import Image from 'next/image';

const documentCategories = [
  {
    id: 'bylaws',
    name: 'Bylaws',
    documents: [
      { name: 'Building Bylaws', url: '/documents/bylaws.html', type: 'html' },
      { name: 'Pet Policy', url: '/documents/pet-policy.html', type: 'html' },
      { name: 'Parking Regulations', url: '/documents/bylaws.html#4-parking', type: 'html' },
      { name: 'Test Document', url: '/documents/test.html', type: 'html' },
    ],
  },
  {
    id: 'financial',
    name: 'Financial Documents',
    documents: [
      { name: '2024 Budget', url: '/documents/budget-2024.html', type: 'html' },
      { name: 'Financial Statements Q1 2024', url: '/documents/budget-2024.html', type: 'html' },
      { name: 'Insurance Policy', url: '/documents/budget-2024.html', type: 'html' },
    ],
  },
  {
    id: 'meetings',
    name: 'Meeting Minutes',
    documents: [
      { name: 'March 2024 Minutes', url: '/documents/bylaws.html', type: 'html' },
      { name: 'February 2024 Minutes', url: '/documents/pet-policy.html', type: 'html' },
      { name: 'January 2024 Minutes', url: '/documents/budget-2024.html', type: 'html' },
    ],
  },
];

export default function DocumentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('bylaws');
  
  // Get documents for selected category
  const documents = documentCategories.find(cat => cat.id === selectedCategory)?.documents || [];

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Strata Documents</h1>
      
      {/* Category tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {documentCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      {/* Document list */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          {documentCategories.find(cat => cat.id === selectedCategory)?.name}
        </h2>
        
        <div className="space-y-4">
          {documents.map((doc, index) => (
            <div key={index} className="border p-4 rounded hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-medium">{doc.name}</span>
                <div className="space-x-2">
                  <a 
                    href={doc.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded inline-block"
                  >
                    View
                  </a>
                  <a 
                    href={doc.url} 
                    download
                    className="bg-green-600 text-white px-4 py-2 rounded inline-block"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Building image */}
      <div className="mt-8">
        <Image 
          src="/building-banner.jpg"
          alt="Building image"
          width={1200}
          height={400}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
