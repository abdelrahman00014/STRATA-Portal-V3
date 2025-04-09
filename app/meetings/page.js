'use client';

import { useState } from 'react';

export default function Meetings() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const upcomingMeetings = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "May 15,, 2025",
      time: "7:00 PM",
      location: "Building Common Room",
      agenda: [
        "Financial Report 2024-2025",
        "Committee Elections",
        "Building Maintenance Plan",
        "General Business"
      ]
    },
    {
      id: 2,
      title: "Committee Meeting",
      date: "April 20, 2025",
      time: "6:30 PM",
      location: "Online (Zoom)",
      agenda: [
        "Security System Upgrade",
        "Gardening Contract Renewal",
        "Pet Policy Review",
        "Budget Planning"
      ]
    }
  ];
  
  const pastMeetings = [
    {
      id: 3,
      title: "Special General Meeting",
      date: "January 10, 2025",
      time: "7:00 PM",
      location: "Building Common Room",
      minutes: "meeting-minutes-jan-2025.pdf"
    },
    {
      id: 4,
      title: "Committee Meeting",
      date: "February 15, 2025",
      time: "6:30 PM",
      location: "Online (Zoom)",
      minutes: "meeting-minutes-feb-2025.pdf"
    },
    {
      id: 5,
      title: "Building Maintenance Discussion",
      date: "March 5, 2025",
      time: "5:30 PM",
      location: "Building Common Room",
      minutes: "maintenance-discussion-mar-2025.pdf"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8 bg-slate-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Strata Meetings</h1>
      
      <div className="flex space-x-2 mb-6">
        <button 
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 rounded font-medium ${activeTab === 'upcoming' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-gray-900'}`}
        >
          <span className={activeTab === 'upcoming' ? 'text-white' : 'text-gray-900'}>Upcoming Meetings</span>
        </button>
        <button 
          onClick={() => setActiveTab('past')}
          className={`px-4 py-2 rounded font-medium ${activeTab === 'past' ? 'bg-blue-700 text-white' : 'bg-gray-300 text-gray-900'}`}
        >
          <span className={activeTab === 'past' ? 'text-white' : 'text-gray-900'}>Past Meetings</span>
        </button>
      </div>
      
      {activeTab === 'upcoming' ? (
        <div>
          <p className="mb-4 text-gray-900 font-medium">Below are the upcoming meetings scheduled for our strata community. All residents are welcome to attend.</p>
          
          <div className="space-y-6">
            {upcomingMeetings.map(meeting => (
              <div key={meeting.id} className="bg-gray-200 p-6 rounded shadow border border-gray-300">
                <h2 className="text-xl font-bold mb-2 text-gray-900">{meeting.title}</h2>
                <div className="mb-4">
                  <p className="text-gray-900"><span className="font-bold text-gray-900">Date:</span> <span className="text-gray-900">{meeting.date}</span></p>
                  <p className="text-gray-900"><span className="font-bold text-gray-900">Time:</span> <span className="text-gray-900">{meeting.time}</span></p>
                  <p className="text-gray-900"><span className="font-bold text-gray-900">Location:</span> <span className="text-gray-900">{meeting.location}</span></p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2 text-gray-900">Agenda:</h3>
                  <ul className="list-disc pl-5">
                    {meeting.agenda.map((item, index) => (
                      <li key={index} className="text-gray-900">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-4 bg-blue-700 text-white font-bold px-4 py-2 rounded hover:bg-blue-800">
                  <span className="text-white">Add to Calendar</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="mb-4 text-gray-900 font-medium">Past meetings with downloadable minutes for your reference.</p>
          
          <div className="space-y-6">
            {pastMeetings.map(meeting => (
              <div key={meeting.id} className="bg-gray-200 p-6 rounded shadow border border-gray-300">
                <h2 className="text-xl font-bold mb-2 text-gray-900">{meeting.title}</h2>
                <div className="mb-4">
                  <p className="text-gray-900"><span className="font-bold text-gray-900">Date:</span> <span className="text-gray-900">{meeting.date}</span></p>
                  <p className="text-gray-900"><span className="font-bold text-gray-900">Time:</span> <span className="text-gray-900">{meeting.time}</span></p>
                  <p className="text-gray-900"><span className="font-bold text-gray-900">Location:</span> <span className="text-gray-900">{meeting.location}</span></p>
                </div>
                
                <button 
                  className="bg-green-700 text-white font-bold px-4 py-2 rounded hover:bg-green-800"
                  onClick={() => window.open(`/documents/${meeting.minutes}`, '_blank')}
                >
                  <span className="text-white">Download Minutes</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 