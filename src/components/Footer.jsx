export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '5rem 0 2rem 0', marginTop: '6rem', position: 'relative', overflow: 'hidden' }}>
      {/* Background radial glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '300px', background: 'var(--accent-primary)', filter: 'blur(200px)', opacity: 0.05, zIndex: -1 }}></div>
      
      <div className="container flex justify-between" style={{ paddingBottom: '4rem' }}>
        <div>
          <h3 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1.5rem', display: 'inline-block', fontWeight: 800, letterSpacing: '-0.03em' }}>TechElectro</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '320px', lineHeight: 1.7, fontSize: '0.95rem' }}>Empowering builders and enthusiasts with premium electronics and state-of-the-art computer components.</p>
        </div>
        <div style={{ display: 'flex', gap: '6rem' }}>
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>Hardware</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" className="nav-link">Processors</a></li>
              <li><a href="#" className="nav-link">Graphics Cards</a></li>
              <li><a href="#" className="nav-link">Motherboards</a></li>
              <li><a href="#" className="nav-link">Memory & Storage</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.125rem', fontWeight: 600, color: 'var(--text-primary)' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#" className="nav-link">About Us</a></li>
              <li><a href="#" className="nav-link">Careers</a></li>
              <li><a href="#" className="nav-link">Store Policies</a></li>
              <li><a href="#" className="nav-link">Track Order</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <span>&copy; {new Date().getFullYear()} TechElectro Inc. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" className="nav-link" style={{ color: 'var(--text-muted)' }}>Privacy Policy</a>
          <a href="#" className="nav-link" style={{ color: 'var(--text-muted)' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
