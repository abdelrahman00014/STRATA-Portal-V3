'use client';

import { useState } from 'react';
import Image from 'next/image';

const documentCategories = [
  {
    id: 'bylaws',
    name: 'Bylaws',
    documents: [
      { name: 'Building Bylaws', url: '/documents/bylaws.pdf' },
      { name: 'Pet Policy', url: '/documents/pet-policy.pdf' },
      { name: 'Parking Regulations', url: '/documents/parking.pdf' },
    ],
  },
  {
    id: 'financial',
    name: 'Financial Documents',
    documents: [
      { name: '2024 Budget', url: '/documents/budget-2024.pdf' },
      { name: 'Financial Statements Q1 2024', url: '/documents/financial-q1-2024.pdf' },
      { name: 'Insurance Policy', url: '/documents/insurance.pdf' },
    ],
  },
  {
    id: 'meetings',
    name: 'Meeting Minutes',
    documents: [
      { name: 'March 2024 Minutes', url: '/documents/minutes-march-2024.pdf' },
      { name: 'February 2024 Minutes', url: '/documents/minutes-february-2024.pdf' },
      { name: 'January 2024 Minutes', url: '/documents/minutes-january-2024.pdf' },
    ],
  },
];

export default function DocumentsPage() {
  const [selectedCategory, setSelectedCategory] = useState('bylaws');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = documentCategories
    .find((cat) => cat.id === selectedCategory)
    ?.documents.filter((doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Strata Documents</h1>

      <div className="space-y-6">
        <div className="flex gap-4 mb-6">
          {documentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="space-y-4">
          {filteredDocuments?.map((doc) => (
            <div
              key={doc.name}
              className="border p-4 rounded-lg hover:bg-gray-50"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-800">{doc.name}</span>
                <div className="space-x-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => window.open(doc.url, '_blank')}
                  >
                    View
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = doc.url;
                      link.download = doc.name;
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Image 
          src="/building-banner.jpg"
          alt="Modern apartment building"
          width={1200}
          height={400}
          className="w-full h-64 object-cover"
          priority
        />
      </div>
    </div>
  );
}
