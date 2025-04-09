'use client';

import { useState } from 'react';
import Image from 'next/image';

const bylawSections = [
  {
    id: 'general',
    title: 'General Rules',
    content: (
      <>
        <p>These general rules apply to all residents and visitors of the building:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Quiet hours are from 10 PM to 7 AM</li>
          <li>No smoking in common areas</li>
          <li>Keep common areas clean and tidy</li>
          <li>Report maintenance issues promptly</li>
          <li>No alterations to external appearance without committee approval</li>
          <li>Disposal of large items must be arranged with management</li>
          <li>Entry doors must not be propped open</li>
          <li>All residents must maintain current contact information with management</li>
        </ul>
        <p>Residents are responsible for ensuring their guests comply with all bylaws during their visit.</p>
      </>
    )
  },
  {
    id: 'parking',
    title: 'Parking Rules',
    content: (
      <>
        <p>All vehicle parking within the property is subject to the following rules:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Park only in designated spots</li>
          <li>No overnight guest parking without permission</li>
          <li>Keep driveways clear at all times</li>
          <li>No vehicle maintenance in parking areas</li>
          <li>Speed limit of 5 km/h in all parking areas</li>
          <li>No storage of unregistered vehicles</li>
          <li>No washing of vehicles in parking areas</li>
          <li>Visitor parking limited to 24 hours unless approved</li>
        </ul>
        <p>Violations of parking rules may result in vehicles being towed at the owner's expense.</p>
      </>
    )
  },
  {
    id: 'pets',
    title: 'Pet Rules',
    content: (
      <>
        <p>Pets are allowed within the building subject to the following conditions:</p>
        <ul className="list-disc pl-5 mb-4">
          <li>Pets must be on leash in common areas</li>
          <li>Clean up after your pets</li>
          <li>No pets allowed in pool area</li>
          <li>Maximum 2 pets per unit</li>
          <li>All pets must be registered with management</li>
          <li>No exotic animals permitted</li>
          <li>Pets must not create excessive noise</li>
          <li>Pet owners are responsible for any damage caused by their pets</li>
        </ul>
        <p>The committee reserves the right to revoke pet permissions for repeated bylaw violations.</p>
      </>
    )
  }
];

export default function BylawsPage() {
  const [activeSection, setActiveSection] = useState('general');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Strata Bylaws</h1>

      <div className="flex gap-4 mb-6">
        {bylawSections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded ${
              activeSection === section.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div className="border border-gray-300 p-6 rounded-lg bg-white shadow-sm">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {bylawSections.find(s => s.id === activeSection).title}
        </h2>
        
        <div className="prose text-gray-800">
          {bylawSections.find(s => s.id === activeSection).content}
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