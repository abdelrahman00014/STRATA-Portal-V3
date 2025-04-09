'use client';

import { useState } from 'react';

export default function Meetings() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const upcomingMeetings = [
    {
      id: 1,
      title: "Annual General Meeting",
      date: "May 15, 2024",
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
      id: 6,
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
      id: 3,
      title: "Special General Meeting",
      date: "January 10, 2024",
      time: "7:00 PM",
      location: "Building Common Room",
      minutes: "meeting-minutes-jan-2024.pdf"
    },
    {
      id: 4,
      title: "Committee Meeting",
      date: "February 15, 2024",
      time: "6:30 PM",
      location: "Online (Zoom)",
      minutes: "meeting-minutes-feb-2024.pdf"
    },
    {
      id: 5,
      title: "Building Maintenance Discussion",
      date: "March 5, 2024",
      time: "5:30 PM",
      location: "Building Common Room",
      minutes: "maintenance-discussion-mar-2024.pdf"
    }
  ];
  
  return (
    <div style={{backgroundColor: 'white', padding: '2rem', minHeight: '100vh'}}>
      <h1 style={{fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937'}}>Strata Meetings</h1>
      
      <div style={{display: 'flex', gap: '0.5rem', marginBottom: '1.5rem'}}>
        <button 
          onClick={() => setActiveTab('upcoming')}
          style={{
            padding: '0.5rem 1rem', 
            borderRadius: '0.25rem', 
            fontWeight: '500',
            backgroundColor: activeTab === 'upcoming' ? '#1d4ed8' : '#d1d5db',
            color: activeTab === 'upcoming' ? 'white' : '#1f2937'
          }}
        >
          Upcoming Meetings
        </button>
        <button 
          onClick={() => setActiveTab('past')}
          style={{
            padding: '0.5rem 1rem', 
            borderRadius: '0.25rem', 
            fontWeight: '500',
            backgroundColor: activeTab === 'past' ? '#1d4ed8' : '#d1d5db',
            color: activeTab === 'past' ? 'white' : '#1f2937'
          }}
        >
          Past Meetings
        </button>
      </div>
      
      {activeTab === 'upcoming' ? (
        <div>
          <p style={{marginBottom: '1rem', color: '#1f2937', fontWeight: '500'}}>
            Below are the upcoming meetings scheduled for our strata community. All residents are welcome to attend.
          </p>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {upcomingMeetings.map(meeting => (
              <div key={meeting.id} style={{
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.5rem', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid #d1d5db'
              }}>
                <h2 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937'}}>{meeting.title}</h2>
                <div style={{marginBottom: '1rem'}}>
                  <p style={{color: '#1f2937'}}><span style={{fontWeight: 'bold', color: '#1f2937'}}>Date:</span> {meeting.date}</p>
                  <p style={{color: '#1f2937'}}><span style={{fontWeight: 'bold', color: '#1f2937'}}>Time:</span> {meeting.time}</p>
                  <p style={{color: '#1f2937'}}><span style={{fontWeight: 'bold', color: '#1f2937'}}>Location:</span> {meeting.location}</p>
                </div>
                
                <div>
                  <h3 style={{fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937'}}>Agenda:</h3>
                  <ul style={{listStyleType: 'disc', paddingLeft: '1.25rem'}}>
                    {meeting.agenda.map((item, index) => (
                      <li key={index} style={{color: '#1f2937'}}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <button style={{
                  marginTop: '1rem', 
                  backgroundColor: '#1d4ed8', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '0.25rem',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Add to Calendar
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <p style={{marginBottom: '1rem', color: '#1f2937', fontWeight: '500'}}>
            Past meetings with downloadable minutes for your reference.
          </p>
          
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {pastMeetings.map(meeting => (
              <div key={meeting.id} style={{
                backgroundColor: 'white', 
                padding: '1.5rem', 
                borderRadius: '0.5rem', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: '1px solid #d1d5db'
              }}>
                <h2 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937'}}>{meeting.title}</h2>
                <div style={{marginBottom: '1rem'}}>
                  <p style={{color: '#1f2937'}}><span style={{fontWeight: 'bold', color: '#1f2937'}}>Date:</span> {meeting.date}</p>
                  <p style={{color: '#1f2937'}}><span style={{fontWeight: 'bold', color: '#1f2937'}}>Time:</span> {meeting.time}</p>
                  <p style={{color: '#1f2937'}}><span style={{fontWeight: 'bold', color: '#1f2937'}}>Location:</span> {meeting.location}</p>
                </div>
                
                <button 
                  style={{
                    backgroundColor: '#15803d', 
                    color: 'white', 
                    fontWeight: 'bold', 
                    padding: '0.5rem 1rem', 
                    borderRadius: '0.25rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
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