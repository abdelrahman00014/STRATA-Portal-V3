'use client';

import { useState } from 'react';

export default function BylawsPage() {
  const [activeSection, setActiveSection] = useState('general');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Strata Bylaws</h1>
      
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveSection('general')}
          className={`px-4 py-2 rounded ${
            activeSection === 'general'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
        >
          General Rules
        </button>
        <button
          onClick={() => setActiveSection('parking')}
          className={`px-4 py-2 rounded ${
            activeSection === 'parking'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
        >
          Parking Rules
        </button>
        <button
          onClick={() => setActiveSection('pets')}
          className={`px-4 py-2 rounded ${
            activeSection === 'pets'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200'
          }`}
        >
          Pet Rules
        </button>
      </div>

      {activeSection === 'general' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">General Rules</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Quiet hours are from 10 PM to 7 AM</li>
            <li>No smoking in common areas</li>
            <li>Keep common areas clean and tidy</li>
            <li>Report maintenance issues promptly</li>
          </ul>
        </div>
      )}

      {activeSection === 'parking' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Parking Rules</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Park only in designated spots</li>
            <li>No overnight guest parking without permission</li>
            <li>Keep driveways clear at all times</li>
            <li>No vehicle maintenance in parking areas</li>
          </ul>
        </div>
      )}

      {activeSection === 'pets' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Pet Rules</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pets must be on leash in common areas</li>
            <li>Clean up after your pets</li>
            <li>No pets allowed in pool area</li>
            <li>Maximum 2 pets per unit</li>
          </ul>
        </div>
      )}
    </div>
  );
} 