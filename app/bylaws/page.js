'use client';

export default function BylawsPage() {
  return (
    <div className="bylaws-container" style={{
      padding: "1rem",
      backgroundColor: "#e5e7eb",
      minHeight: "100vh"
    }}>
      <iframe 
        src="/bylaws/bylaws.html" 
        style={{
          width: "100%", 
          height: "calc(100vh - 2rem)", 
          border: "none",
          backgroundColor: "#f8fafc",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
        }}
        title="Strata Bylaws"
        aria-label="Strata Bylaws Document"
      />
    </div>
  );
} 