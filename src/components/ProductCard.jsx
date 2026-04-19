import { Plus, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="glass-panel hover-lift" style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', borderRadius: '16px', background: 'rgba(255,255,255,0.01)' }}>
      <Link to={`/products/${product.id}`} style={{ display: 'block', position: 'relative', height: '240px', overflow: 'hidden', padding: '1.5rem', background: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        {product.tag && (
          <div style={{ 
            position: 'absolute', top: '1rem', left: '1rem', 
            background: 'var(--accent-gradient)', color: '#fff', 
            padding: '0.35rem 0.75rem', borderRadius: '6px', 
            fontSize: '0.75rem', fontWeight: 700, zIndex: 10,
            letterSpacing: '0.03em', textTransform: 'uppercase'
          }}>
            {product.tag}
          </div>
        )}
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.4))' }} 
               onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1) translateY(-10px)'}
               onMouseOut={e => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
          />
        </div>
      </Link>
      
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
           {product.category || 'Hardware'}
        </div>
        
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', lineHeight: 1.4, color: 'var(--text-primary)', fontWeight: 600, transition: 'color 0.2s' }}
              onMouseOver={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              onMouseOut={e => e.currentTarget.style.color = 'var(--text-primary)'}>
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1" style={{ marginBottom: '1.5rem', color: '#fbbf24', marginTop: 'auto' }}>
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="currentColor" />
          <Star size={14} fill="rgba(251, 191, 36, 0.3)" />
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginLeft: '0.35rem' }}>(42)</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.25rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Price</span>
            <span style={{ fontSize: '1.35rem', fontWeight: 800 }}>${product.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
          </div>
          <button className="btn-icon" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50%', color: 'var(--text-primary)', width: '2.75rem', height: '2.75rem' }} aria-label="Add to Cart"
             onMouseOver={e => { e.currentTarget.style.background = 'var(--accent-primary)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1.1)'; }}
             onMouseOut={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
