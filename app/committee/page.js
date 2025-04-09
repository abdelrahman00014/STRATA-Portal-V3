'use client';

import { useState } from 'react';

export default function Committee() {
  const [activeTab, setActiveTab] = useState('currentMembers');
  const [showBio, setShowBio] = useState(null);
  
  const members = [
    { 
      name: "Jane Smith", 
      role: "Chairperson", 
      email: "chair@stratasphere.com",
      phone: "0412-345-678",
      unit: "501",
      image: "/committee/jane.jpg",
      bio: "Jane has been a resident for 5 years and works in corporate law. She is passionate about improving community facilities and ensuring transparent governance.",
      responsibilities: ["Meeting coordination", "Community liaison", "Strategic planning"]
    },
    { 
      name: "John Doe", 
      role: "Treasurer", 
      email: "treasurer@stratasphere.com",
      phone: "0423-456-789",
      unit: "302",
      image: "/committee/john.jpg",
      bio: "John has a background in finance and has served on the committee for 3 years. He oversees all financial aspects of the building.",
      responsibilities: ["Financial reporting", "Budget management", "Levy calculations"]
    },
    { 
      name: "Alex Johnson", 
      role: "Secretary", 
      email: "secretary@stratasphere.com",
      phone: "0434-567-890",
      unit: "203",
      image: "/committee/alex.jpg",
      bio: "Alex has lived in the building since its completion and works in administration. They handle all record-keeping and correspondence.",
      responsibilities: ["Meeting minutes", "Record keeping", "Correspondence"]
    },
    { 
      name: "Maria Rodriguez", 
      role: "Maintenance Coordinator", 
      email: "maintenance@stratasphere.com",
      phone: "0445-678-901",
      unit: "404",
      image: "/committee/maria.jpg",
      bio: "Maria has a background in project management and coordinates all maintenance activities for the building.",
      responsibilities: ["Contractor liaison", "Maintenance scheduling", "Quality control"]
    }
  ];
  
  const pastMembers = [
    { name: "Robert Chen", role: "Former Chairperson (2020-2024)", email: "robert@example.com" },
    { name: "Samantha Lee", role: "Former Treasurer (2021-2024)", email: "samantha@example.com" },
    { name: "David Wilson", role: "Former Secretary (2022-2024)", email: "david@example.com" }
  ];
  
  const electionInfo = {
    nextElection: "May 15, 2025",
    nominations: "April 1-30, 2025",
    requirements: [
      "Must be an owner or registered occupant",
      "No outstanding levies or fees",
      "Must be able to attend monthly meetings"
    ],
    process: "Nominations are submitted in writing to the current secretary. Elections are held at the Annual General Meeting by secret ballot."
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-black">Committee Members</h1>
      
      {/* Tab Navigation */}
      <div className="mb-8 border-b border-gray-300">
        <div className="flex space-x-4">
          <button 
            className={`py-2 px-4 ${activeTab === 'currentMembers' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-700'}`}
            onClick={() => setActiveTab('currentMembers')}
          >
            Current Committee
          </button>
          <button 
            className={`py-2 px-4 ${activeTab === 'pastMembers' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-700'}`}
            onClick={() => setActiveTab('pastMembers')}
          >
            Past Members
          </button>
          <button 
            className={`py-2 px-4 ${activeTab === 'elections' ? 'border-b-2 border-blue-600 text-blue-600 font-medium' : 'text-gray-700'}`}
            onClick={() => setActiveTab('elections')}
          >
            Elections
          </button>
        </div>
      </div>
      
      {/* Current Members Tab */}
      {activeTab === 'currentMembers' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded shadow hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 overflow-hidden">
                  <img 
                    src={member.image || 'https://via.placeholder.com/150'} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
                  />
                </div>
                <h2 className="text-xl font-semibold text-black">{member.name}</h2>
                <p className="text-blue-800 font-medium">{member.role}</p>
                
                <div className="mt-4 space-y-2 text-center">
                  <p className="text-gray-900">
                    <span className="font-medium">Email:</span> {member.email}
                  </p>
                  <p className="text-gray-900">
                    <span className="font-medium">Unit:</span> {member.unit}
                  </p>
                </div>
                
                <button 
                  onClick={() => setShowBio(showBio === index ? null : index)}
                  className="mt-4 text-blue-600 hover:text-blue-800"
                >
                  {showBio === index ? 'Hide Details' : 'Show Details'}
                </button>
                
                {showBio === index && (
                  <div className="mt-4 p-4 bg-slate-50 rounded text-left w-full">
                    <h3 className="font-medium text-black mb-2">About</h3>
                    <p className="text-gray-900 mb-4">{member.bio}</p>
                    
                    <h3 className="font-medium text-black mb-2">Responsibilities</h3>
                    <ul className="list-disc pl-5">
                      {member.responsibilities.map((item, i) => (
                        <li key={i} className="text-gray-900">{item}</li>
                      ))}
                    </ul>
                    
                    <h3 className="font-medium text-black mb-2 mt-4">Contact</h3>
                    <p className="text-gray-900">Phone: {member.phone}</p>
                    <p className="text-gray-900">Email: {member.email}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Past Members Tab */}
      {activeTab === 'pastMembers' && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4 text-black">Past Committee Members</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-4 text-black border-b">Name</th>
                  <th className="text-left p-4 text-black border-b">Position</th>
                  <th className="text-left p-4 text-black border-b">Contact</th>
                </tr>
              </thead>
              <tbody>
                {pastMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="p-4 border-b text-gray-900">{member.name}</td>
                    <td className="p-4 border-b text-gray-900">{member.role}</td>
                    <td className="p-4 border-b text-gray-900">{member.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="mt-6 text-gray-900">
            We thank all our past committee members for their valuable contributions to our strata community.
          </p>
        </div>
      )}
      
      {/* Elections Tab */}
      {activeTab === 'elections' && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-6 text-black">Committee Elections</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-black">Next Election</h3>
              <p className="mb-2 text-gray-900">Date: <span className="font-medium">{electionInfo.nextElection}</span></p>
              <p className="mb-2 text-gray-900">Nomination Period: <span className="font-medium">{electionInfo.nominations}</span></p>
              
              <h3 className="text-lg font-semibold mb-3 mt-6 text-black">Eligibility Requirements</h3>
              <ul className="list-disc pl-5 text-gray-900">
                {electionInfo.requirements.map((req, i) => (
                  <li key={i} className="mb-2">{req}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3 text-black">Election Process</h3>
              <p className="text-gray-900">{electionInfo.process}</p>
              
              <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-100">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">Interested in Serving?</h3>
                <p className="text-gray-900 mb-4">
                  If you're interested in joining the committee, please contact the current secretary 
                  at <a href="mailto:secretary@stratasphere.com" className="text-blue-600 hover:underline">secretary@stratasphere.com</a> 
                  for nomination details.
                </p>
                <button 
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => window.location.href = 'mailto:secretary@stratasphere.com?subject=Committee Nomination Inquiry'}
                >
                  Express Interest
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
