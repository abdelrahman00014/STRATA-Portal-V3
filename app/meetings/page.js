'use client';

import { useState } from 'react';
import Image from 'next/image';

const upcomingMeetings = [
  {
    id: 1,
    title: "Annual General Meeting",
    date: "April 15, 2024",
    time: "7:00 PM",
    location: "Building Common Room",
    agenda: [
      "Financial Report 2023-2024",
      "Committee Elections",
      "Building Maintenance Plan",
      "General Business"
    ]
  },
  {
    id: 2,
    title: "Committee Meeting",
    date: "May 20, 2024",
    time: "6:30 PM",
    location: "Online (Zoom)",
    agenda: [
      "Security System Upgrade",
      "Gardening Contract Renewal",
      "Pet Policy Review",
      "Budget Planning"
    ]
  },
  {
    id: 3,
    title: "Special General Meeting",
    date: "June 10, 2024",
    time: "7:00 PM",
    location: "Building Common Room",
    agenda: [
      "Special Resolution: Building Facade Upgrade",
      "Security System Discussion",
      "Community Events Planning",
      "Budget Approval"
    ]
  }
];

const pastMeetings = [
  {
    id: 4,
    title: "Special General Meeting",
    date: "January 10, 2024",
    location: "Building Common Room",
    minutes: "meeting-minutes-jan-2024.pdf"
  },
  {
    id: 5,
    title: "Committee Meeting",
    date: "February 15, 2024",
    location: "Online (Zoom)",
    minutes: "meeting-minutes-feb-2024.pdf"
  },
  {
    id: 6,
    title: "Building Maintenance Discussion",
    date: "March 5, 2024",
    location: "Building Common Room",
    minutes: "maintenance-discussion-mar-2024.pdf"
  }
];

export default function MeetingsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Strata Meetings</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('upcoming')}
          className={`px-4 py-2 rounded ${
            activeTab === 'upcoming' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Upcoming Meetings
        </button>
        <button
          onClick={() => setActiveTab('past')}
          className={`px-4 py-2 rounded ${
            activeTab === 'past' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          Past Meetings
        </button>
      </div>

      {activeTab === 'upcoming' ? (
        <div className="space-y-6">
          <p className="text-gray-800 font-medium">Below are the upcoming meetings scheduled for our strata community.</p>
          
          {upcomingMeetings.map((meeting) => (
            <div key={meeting.id} className="border border-gray-300 p-6 rounded-lg bg-white shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-3">{meeting.title}</h2>
              
              <div className="mb-4">
                <p className="text-gray-800"><span className="font-semibold">Date:</span> {meeting.date}</p>
                <p className="text-gray-800"><span className="font-semibold">Time:</span> {meeting.time}</p>
                <p className="text-gray-800"><span className="font-semibold">Location:</span> {meeting.location}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Agenda:</h3>
                <ul className="list-disc pl-5 mb-4">
                  {meeting.agenda.map((item, index) => (
                    <li key={index} className="text-gray-800">{item}</li>
                  ))}
                </ul>
              </div>
              
              <button className="bg-blue-500 text-white font-medium px-4 py-2 rounded">
                Add to Calendar
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-gray-800 font-medium">Past meetings with downloadable minutes for your reference.</p>
          
          {pastMeetings.map((meeting) => (
            <div key={meeting.id} className="border border-gray-300 p-6 rounded-lg bg-white shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{meeting.title}</h2>
                  <p className="text-gray-800"><span className="font-semibold">Date:</span> {meeting.date}</p>
                  <p className="text-gray-800"><span className="font-semibold">Location:</span> {meeting.location}</p>
                </div>
                <button 
                  className="bg-green-500 text-white font-medium px-4 py-2 rounded"
                  onClick={() => window.open(`/documents/${meeting.minutes}`, '_blank')}
                >
                  Download Minutes
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      
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