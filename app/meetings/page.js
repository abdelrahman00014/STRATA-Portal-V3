'use client';

export default function MeetingsPage() {
  return (
    <iframe 
      src="/meetings/meetings.html" 
      style={{
        width: "100%", 
        height: "100vh", 
        border: "none",
        backgroundColor: "white",
        color: "black"
      }}
      title="Strata Meetings"
    />
  );
} 