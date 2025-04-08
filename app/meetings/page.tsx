'use client';

import { useState } from 'react';

const meetings = [
  {
    id: 1,
    date: '2024-04-15',
    time: '7:00 PM',
    type: 'Annual General Meeting',
    location: 'Community Hall',
  },
  {
    id: 2,
    date: '2024-05-20',
    time: '6:30 PM',
    type: 'Committee Meeting',
    location: 'Online',
  },
  {
    id: 3,
    date: '2024-06-10',
    time: '7:00 PM',
    type: 'Special General Meeting',
    location: 'Community Hall',
  },
];

export default function MeetingsPage() {
  const [selectedMeeting, setSelectedMeeting] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Strata Meetings</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Meetings</h2>
          <div className="space-y-4">
            {meetings.map((meeting) => (
              <div
                key={meeting.id}
                className="border p-4 rounded-lg cursor-pointer hover:bg-gray-50"
                onClick={() => setSelectedMeeting(meeting.id)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{meeting.type}</h3>
                    <p className="text-gray-600">
                      {new Date(meeting.date).toLocaleDateString()} at {meeting.time}
                    </p>
                  </div>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to calendar functionality would go here
                      alert('Added to calendar!');
                    }}
                  >
                    Add to Calendar
                  </button>
                </div>
                {selectedMeeting === meeting.id && (
                  <div className="mt-4 p-4 bg-gray-50 rounded">
                    <p className="font-semibold">Location: {meeting.location}</p>
                    <p className="mt-2">
                      Please bring your meeting materials and identification.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Meeting Minutes</h2>
          <div className="space-y-2">
            <button className="bg-gray-200 px-4 py-2 rounded w-full text-left">
              March 2024 Meeting Minutes
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded w-full text-left">
              February 2024 Meeting Minutes
            </button>
            <button className="bg-gray-200 px-4 py-2 rounded w-full text-left">
              January 2024 Meeting Minutes
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 