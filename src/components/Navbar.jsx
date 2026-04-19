import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, Cpu } from 'lucide-react';

export default function Navbar({ onCartClick }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass-nav ${scrolled ? 'scrolled' : ''}`} style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: scrolled ? '0.75rem 0' : '1.25rem 0', transition: 'all 0.3s ease' }}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
          <Cpu size={32} color="var(--accent-primary)" style={{ filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.4))' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
            Tech<span className="text-gradient">Electro</span>
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '3rem' }}>
          <Link to="/products" className="nav-link">Components</Link>
          <Link to="/products" className="nav-link">Peripherals</Link>
          <Link to="/products" className="nav-link">Systems</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="btn-icon">
            <Search size={22} />
          </button>
          <button className="btn-icon" onClick={onCartClick} style={{ position: 'relative' }}>
            <ShoppingCart size={22} />
            <span style={{ 
              position: 'absolute', top: -4, right: -4, 
              background: 'var(--accent-gradient)', borderRadius: '50%', 
              width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '11px', fontWeight: 800, color: '#fff',
              boxShadow: '0 2px 8px rgba(139, 92, 246, 0.5)'
            }}>3</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
