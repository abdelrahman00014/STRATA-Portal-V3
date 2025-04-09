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
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = documentCategories
    .find((cat) => cat.id === selectedCategory)
    ?.documents.filter((doc) =>
      doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const getDocumentIcon = (type) => {
    switch(type) {
      case 'html':
        return (
          <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-50">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Strata Documents</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <p className="text-gray-700 mb-4">
          Access all important strata documents including bylaws, financial statements, and meeting minutes. 
          Use the category tabs below to navigate between different document types.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {documentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-300 rounded-md bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
            <h2 className="font-bold text-xl text-gray-800">
              {documentCategories.find(cat => cat.id === selectedCategory)?.name || 'Documents'}
            </h2>
          </div>
          
          {filteredDocuments && filteredDocuments.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {filteredDocuments.map((doc, index) => (
                <div
                  key={`${doc.name}-${index}`}
                  className="p-4 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {getDocumentIcon(doc.type)}
                      <span className="ml-3 font-medium text-gray-800">{doc.name}</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="flex items-center bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                        onClick={() => window.open(doc.url, '_blank')}
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        View
                      </button>
                      <button
                        className="flex items-center bg-green-600 text-white font-medium px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = doc.url;
                          link.download = doc.name;
                          document.body.appendChild(link);
                          link.click();
                          document.body.removeChild(link);
                        }}
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              No documents found matching your search.
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
          <h2 className="font-bold text-xl text-gray-800">Building Information</h2>
        </div>
        <div className="p-6">
          <Image 
            src="/building-banner.jpg"
            alt="Modern apartment building"
            width={1200}
            height={400}
            className="w-full h-64 object-cover rounded-md"
            priority
          />
          <p className="mt-4 text-gray-700">
            The StrataSphere building features modern architecture and amenities designed for comfortable urban living.
            View our documents above to learn more about building regulations, financial information, and community updates.
          </p>
        </div>
      </div>
    </div>
  );
}
