'use client';

import { useState } from 'react';

export default function Meetings() {
  const [activeTab, setActiveTab] = useState('upcoming');
  
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
    <div style={{backgroundColor: '#ffffff !important', color: '#000000 !important'}}>
      <h1 style={{color: '#000000 !important', fontWeight: 'bold !important'}}>Strata Meetings</h1>
      
      <div>
        <button 
          onClick={() => setActiveTab('upcoming')}
          style={{
            backgroundColor: activeTab === 'upcoming' ? '#0047AB !important' : '#cccccc !important',
            color: activeTab === 'upcoming' ? '#ffffff !important' : '#000000 !important',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            fontWeight: 'bold'
          }}
        >
          Upcoming Meetings
        </button>
        <button 
          onClick={() => setActiveTab('past')}
          style={{
            backgroundColor: activeTab === 'past' ? '#0047AB !important' : '#cccccc !important',
            color: activeTab === 'past' ? '#ffffff !important' : '#000000 !important',
            padding: '10px 20px',
            margin: '5px',
            border: 'none',
            fontWeight: 'bold'
          }}
        >
          Past Meetings
        </button>
      </div>
      
      {activeTab === 'upcoming' ? (
        <>
          <h2 style={{color: '#000000 !important', fontWeight: 'bold !important', fontSize: '20px !important'}}>Upcoming Meetings</h2>
          
          {upcomingMeetings.map(meeting => (
            <div key={meeting.id} style={{
              border: '2px solid #000000 !important',
              backgroundColor: '#ffffff !important',
              padding: '20px',
              margin: '20px 0'
            }}>
              <h3 style={{color: '#000000 !important', fontWeight: 'bold !important', fontSize: '18px !important'}}>{meeting.title}</h3>
              <p style={{color: '#000000 !important'}}><strong style={{color: '#000000 !important'}}>Date:</strong> {meeting.date}</p>
              <p style={{color: '#000000 !important'}}><strong style={{color: '#000000 !important'}}>Time:</strong> {meeting.time}</p>
              <p style={{color: '#000000 !important'}}><strong style={{color: '#000000 !important'}}>Location:</strong> {meeting.location}</p>
              
              <h4 style={{color: '#000000 !important', fontWeight: 'bold !important'}}>Agenda:</h4>
              <ul style={{listStyleType: 'disc', marginLeft: '20px'}}>
                {meeting.agenda.map((item, index) => (
                  <li key={index} style={{color: '#000000 !important', marginBottom: '5px'}}>{item}</li>
                ))}
              </ul>
              
              <button style={{
                backgroundColor: '#0047AB !important',
                color: '#ffffff !important',
                border: 'none',
                padding: '10px 15px',
                fontWeight: 'bold',
                marginTop: '10px'
              }}>
                Add to Calendar
              </button>
            </div>
          ))}
        </>
      ) : (
        <>
          <h2 style={{color: '#000000 !important', fontWeight: 'bold !important', fontSize: '20px !important'}}>Meeting Minutes</h2>
          
          <ul style={{listStyleType: 'none', padding: 0}}>
            {pastMeetings.map(meeting => (
              <li key={meeting.id} style={{
                backgroundColor: '#f0f0f0 !important',
                padding: '10px',
                marginBottom: '5px'
              }}>
                <p style={{color: '#000000 !important', margin: '5px 0'}}><strong style={{color: '#000000 !important'}}>{meeting.title}</strong> - {meeting.date}</p>
                <a 
                  href={`/documents/${meeting.minutes}`} 
                  target="_blank"
                  style={{
                    color: '#0047AB !important',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  Download Minutes
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
} 