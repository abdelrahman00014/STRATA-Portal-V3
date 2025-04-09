'use client';

import { useState } from 'react';

export default function Meetings() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const upcomingMeetings = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "May 15, 2025",
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Strata Meetings</h1>
      
      <div className="flex space-x-2 mb-6">
        <button 
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 rounded ${activeTab === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Upcoming Meetings
        </button>
        <button 
          onClick={() => setActiveTab('past')}
          className={`px-4 py-2 rounded ${activeTab === 'past' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Past Meetings
        </button>
      </div>
      
      {activeTab === 'upcoming' ? (
        <div>
          <p className="mb-4 text-gray-800">Below are the upcoming meetings scheduled for our strata community. All residents are welcome to attend.</p>
          
          <div className="space-y-6">
            {upcomingMeetings.map(meeting => (
              <div key={meeting.id} className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{meeting.title}</h2>
                <div className="mb-4">
                  <p className="text-gray-800"><span className="font-medium">Date:</span> {meeting.date}</p>
                  <p className="text-gray-800"><span className="font-medium">Time:</span> {meeting.time}</p>
                  <p className="text-gray-800"><span className="font-medium">Location:</span> {meeting.location}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 text-gray-800">Agenda:</h3>
                  <ul className="list-disc pl-5">
                    {meeting.agenda.map((item, index) => (
                      <li key={index} className="text-gray-800">{item}</li>
                    ))}
                  </ul>
                </div>
                
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Add to Calendar
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p className="mb-4 text-gray-800">Past meetings with downloadable minutes for your reference.</p>
          
          <div className="space-y-6">
            {pastMeetings.map(meeting => (
              <div key={meeting.id} className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{meeting.title}</h2>
                <div className="mb-4">
                  <p className="text-gray-800"><span className="font-medium">Date:</span> {meeting.date}</p>
                  <p className="text-gray-800"><span className="font-medium">Time:</span> {meeting.time}</p>
                  <p className="text-gray-800"><span className="font-medium">Location:</span> {meeting.location}</p>
                </div>
                
                <button 
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  onClick={() => window.open(`/documents/${meeting.minutes}`, '_blank')}
                >
                  Download Minutes
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 