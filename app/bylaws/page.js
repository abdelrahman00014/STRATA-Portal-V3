'use client';

import { useState } from 'react';

export default function Bylaws() {
  const [activeSection, setActiveSection] = useState(null);
  
  const toggleSection = (index) => {
    if (activeSection === index) {
      setActiveSection(null);
    } else {
      setActiveSection(index);
    }
  };
  
  const bylawSections = [
    {
      title: "General Building Rules",
      content: `
        <p class="text-gray-800">1.1 Noise must be kept to a minimum between 10pm and 7am.</p>
        <p class="text-gray-800">1.2 Common areas must be kept clean and free of personal items.</p>
        <p class="text-gray-800">1.3 Smoking is prohibited in all common areas including balconies and courtyards.</p>
        <p class="text-gray-800">1.4 Residents must not create a nuisance or hazard to other residents.</p>
        <p class="text-gray-800">1.5 All residents and visitors must comply with building security protocols.</p>
      `
    },
    {
      title: "Pet Regulations",
      content: `
        <p class="text-gray-800">2.1 All pets must be registered with the building management.</p>
        <p class="text-gray-800">2.2 Dogs must be kept on leashes in common areas.</p>
        <p class="text-gray-800">2.3 Pet owners are responsible for cleaning up after their pets.</p>
        <p class="text-gray-800">2.4 Pets causing disturbance may be subject to removal from the premises.</p>
        <p class="text-gray-800">2.5 No more than two pets are allowed per unit.</p>
      `
    },
    {
      title: "Parking and Vehicle Management",
      content: `
        <p class="text-gray-800">3.1 Residents must park only in their assigned spaces.</p>
        <p class="text-gray-800">3.2 Visitor parking is limited to 48 hours unless authorized by management.</p>
        <p class="text-gray-800">3.3 Vehicles leaking oil or fluids must be repaired promptly or removed.</p>
        <p class="text-gray-800">3.4 Storage of unregistered vehicles is prohibited.</p>
        <p class="text-gray-800">3.5 Car washing is permitted only in designated areas.</p>
      `
    },
    {
      title: "Waste Management",
      content: `
        <p class="text-gray-800">4.1 All garbage must be properly bagged and disposed of in designated bins.</p>
        <p class="text-gray-800">4.2 Recycling must be separated according to guidelines.</p>
        <p class="text-gray-800">4.3 Large items must be disposed of in the designated area or removed from the property.</p>
        <p class="text-gray-800">4.4 Hazardous waste must be disposed of according to local regulations.</p>
        <p class="text-gray-800">4.5 Household waste must not be left in common areas, hallways, or stairwells.</p>
      `
    },
    {
      title: "Property Alterations",
      content: `
        <p class="text-gray-800">5.1 No structural changes or alterations may be made without written approval.</p>
        <p class="text-gray-800">5.2 Balcony and exterior appearance must remain consistent with building standards.</p>
        <p class="text-gray-800">5.3 Installation of satellite dishes or antennas requires approval.</p>
        <p class="text-gray-800">5.4 Flooring changes must meet noise reduction standards.</p>
        <p class="text-gray-800">5.5 All renovations must be carried out by licensed contractors during designated hours.</p>
      `
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Building Bylaws</h1>
      
      <p className="mb-6 text-gray-800">
        These bylaws govern the use and enjoyment of our strata property. All residents and visitors 
        must comply with these rules to ensure a harmonious living environment. The following bylaws 
        were last updated on March 15, 2025.
      </p>
      
      <div className="space-y-4">
        {bylawSections.map((section, index) => (
          <div key={index} className="border rounded overflow-hidden">
            <button 
              className={`w-full p-4 text-left font-medium flex justify-between items-center ${activeSection === index ? 'bg-blue-100' : 'bg-white'}`}
              onClick={() => toggleSection(index)}
            >
              <span className="text-gray-800">{section.title}</span>
              <span className="text-gray-600">{activeSection === index ? '−' : '+'}</span>
            </button>
            
            {activeSection === index && (
              <div 
                className="p-4 bg-white border-t"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-blue-50 p-6 rounded">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Bylaw Enforcement</h2>
        <p className="text-gray-800">
          Violations of these bylaws may result in warnings, fines, or other actions as determined by the strata 
          committee. Repeated violations may be subject to increasing penalties.
        </p>
        <p className="mt-2 text-gray-800">
          For questions or concerns regarding these bylaws, please contact the building manager at 
          <a href="mailto:manager@stratasphere.com" className="text-blue-600 ml-1 hover:underline">
            manager@stratasphere.com
          </a>.
        </p>
      </div>
    </div>
  );
} 