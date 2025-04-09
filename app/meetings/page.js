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
    <div style={{fontFamily: 'Arial, sans-serif', margin: '20px', backgroundColor: '#ffffff'}}>
      <h1 style={{color: 'black', fontSize: '24px', fontWeight: 'bold'}}>Strata Meetings</h1>
      
      <div style={{marginBottom: '20px'}}>
        <button style={{backgroundColor: '#0047AB', color: 'white', padding: '8px 16px', margin: '5px', border: 'none', fontWeight: 'bold'}}>
          Upcoming Meetings
        </button>
        <button style={{backgroundColor: '#cccccc', color: 'black', padding: '8px 16px', margin: '5px', border: 'none', fontWeight: 'bold'}}>
          Past Meetings
        </button>
      </div>
      
      <h2 style={{color: 'black', fontSize: '20px', fontWeight: 'bold'}}>Upcoming Meetings</h2>
      
      <div style={{backgroundColor: 'white', border: '1px solid black', padding: '15px', marginBottom: '20px'}}>
        <h3 style={{color: 'black', fontSize: '18px', fontWeight: 'bold'}}>Annual General Meeting</h3>
        <p style={{color: 'black'}}><strong style={{color: 'black'}}>Date:</strong> May 15, 2024</p>
        <p style={{color: 'black'}}><strong style={{color: 'black'}}>Time:</strong> 7:00 PM</p>
        <p style={{color: 'black'}}><strong style={{color: 'black'}}>Location:</strong> Building Common Room</p>
        
        <h4 style={{color: 'black', fontWeight: 'bold'}}>Agenda:</h4>
        <ul style={{color: 'black'}}>
          <li style={{color: 'black'}}>Financial Report 2023-2024</li>
          <li style={{color: 'black'}}>Committee Elections</li>
          <li style={{color: 'black'}}>Building Maintenance Plan</li>
          <li style={{color: 'black'}}>General Business</li>
        </ul>
        
        <button style={{backgroundColor: '#0047AB', color: 'white', padding: '8px 16px', marginTop: '10px', border: 'none', fontWeight: 'bold'}}>
          Add to Calendar
        </button>
      </div>
      
      <div style={{backgroundColor: 'white', border: '1px solid black', padding: '15px', marginBottom: '20px'}}>
        <h3 style={{color: 'black', fontSize: '18px', fontWeight: 'bold'}}>Committee Meeting</h3>
        <p style={{color: 'black'}}><strong style={{color: 'black'}}>Date:</strong> May 20, 2024</p>
        <p style={{color: 'black'}}><strong style={{color: 'black'}}>Time:</strong> 6:30 PM</p>
        <p style={{color: 'black'}}><strong style={{color: 'black'}}>Location:</strong> Online (Zoom)</p>
        <p style={{color: 'black'}}><strong style={{color: 'black'}}>Additional Info:</strong> Please bring your meeting materials and identification.</p>
        
        <h4 style={{color: 'black', fontWeight: 'bold'}}>Agenda:</h4>
        <ul style={{color: 'black'}}>
          <li style={{color: 'black'}}>Security System Upgrade</li>
          <li style={{color: 'black'}}>Gardening Contract Renewal</li>
          <li style={{color: 'black'}}>Pet Policy Review</li>
          <li style={{color: 'black'}}>Budget Planning</li>
        </ul>
        
        <button style={{backgroundColor: '#0047AB', color: 'white', padding: '8px 16px', marginTop: '10px', border: 'none', fontWeight: 'bold'}}>
          Add to Calendar
        </button>
      </div>
      
      <div style={{backgroundColor: 'white', border: '1px solid black', padding: '15px', marginBottom: '20px'}}>
        <h3 style={{color: 'black', fontSize: '18px', fontWeight: 'bold'}}>Special General Meeting</h3>
        <p style={{color: 'black'}}><strong style={{color: 'black'}}>Date:</strong> June 10, 2024</p>
        <p style={{color: 'black'}}><strong style={{color: 'black'}}>Time:</strong> 7:00 PM</p>
        <p style={{color: 'black'}}><strong style={{color: 'black'}}>Location:</strong> Building Common Room</p>
        
        <h4 style={{color: 'black', fontWeight: 'bold'}}>Agenda:</h4>
        <ul style={{color: 'black'}}>
          <li style={{color: 'black'}}>Special Resolution: Building Facade Upgrade</li>
          <li style={{color: 'black'}}>Security System Discussion</li>
          <li style={{color: 'black'}}>Community Events Planning</li>
          <li style={{color: 'black'}}>Budget Approval</li>
        </ul>
        
        <button style={{backgroundColor: '#0047AB', color: 'white', padding: '8px 16px', marginTop: '10px', border: 'none', fontWeight: 'bold'}}>
          Add to Calendar
        </button>
      </div>
      
      <h2 style={{color: 'black', fontSize: '20px', fontWeight: 'bold', marginTop: '30px'}}>Meeting Minutes</h2>
      
      <ul style={{listStyleType: 'none', padding: 0, color: 'black'}}>
        <li style={{backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '5px', color: 'black'}}>
          <a href="#" style={{color: '#0047AB', textDecoration: 'none'}}>March 2024 Meeting Minutes</a>
        </li>
        <li style={{backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '5px', color: 'black'}}>
          <a href="#" style={{color: '#0047AB', textDecoration: 'none'}}>February 2024 Meeting Minutes</a>
        </li>
        <li style={{backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '5px', color: 'black'}}>
          <a href="#" style={{color: '#0047AB', textDecoration: 'none'}}>January 2024 Meeting Minutes</a>
        </li>
      </ul>
    </div>
  );
} 