export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'black', 
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>home</a>
        <a href="/blog" style={{ color: 'white', textDecoration: 'none' }}>blog</a>
        <a href="/deploy" style={{ color: 'white', textDecoration: 'none' }}>deploy</a>
      </nav>

      <h1 style={{ fontSize: '2rem', marginBottom: '5px' }}>StrataSphere Management Portal</h1>
      <p style={{ color: 'gray', marginBottom: '30px' }}>Your building management solution</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
        {/* Left white box - Announcements */}
        <div style={{ 
          backgroundColor: 'white', 
          color: 'black', 
          padding: '20px', 
          textAlign: 'left',
          flex: 1
        }}>
          <p style={{ marginBottom: '30px' }}>May 15, 2025</p>
          <p style={{ marginBottom: '30px' }}></p>
          <p>April 10, 2025</p>
        </div>

        {/* Right white box - Links */}
        <div style={{ 
          backgroundColor: 'white', 
          color: 'black', 
          padding: '20px', 
          textAlign: 'left',
          flex: 1
        }}>
          <a href="/committee" style={{ display: 'block', color: 'blue', marginBottom: '10px' }}>Committee Members</a>
          <a href="/documents" style={{ display: 'block', color: 'blue', marginBottom: '10px' }}>Documents Repository</a>
          <a href="/maintenance" style={{ display: 'block', color: 'blue', marginBottom: '10px' }}>Maintenance Requests</a>
          <a href="/financial" style={{ display: 'block', color: 'blue', marginBottom: '10px' }}>Financial Information</a>
        </div>
      </div>

      <footer style={{ marginTop: '30px', color: 'gray', fontSize: '0.9rem' }}>
        © 2025 StrataSphere Management | Contact: admin@stratasphere.com
      </footer>

      <div style={{ marginTop: '20px' }}>
        <a href="/rss" style={{ color: 'gray', marginRight: '10px' }}>rss</a>
        <a href="https://github.com" style={{ color: 'gray', marginRight: '10px' }}>github</a>
        <a href="/source" style={{ color: 'gray' }}>view source</a>
      </div>

      <div style={{ marginTop: '10px', color: 'gray' }}>
        © 2025 MIT Licensed
      </div>
    </div>
  );
}
