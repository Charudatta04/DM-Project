import { ArrowLeft, ShoppingCart, Star, Shield, Truck, Zap } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  
  // Mock product data
  const product = {
    id: id, 
    name: 'QuantumX RTX 4090 Titanium', 
    price: 1599.99, 
    description: 'Experience unparalleled gaming performance with the ultimate graphics card. Powered by incredibly efficient architecture, it features 24GB of G6X memory to deliver the ultimate experience for gamers and creators alike.',
    features: ['24GB GDDR6X Memory', 'PCIe 4.0 Interface', 'Ada Lovelace Architecture', 'Ray Tracing Cores', 'DLSS 3.0 Support'],
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80', 
    tag: 'Bestseller'
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="container animate-fade-in-up" style={{ padding: '6rem 0 4rem 0' }}>
      <Link to="/products" className="hover-lift" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none', marginBottom: '3rem', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
        <ArrowLeft size={18} /> Back to Catalog
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(450px, 1fr) 1fr', gap: '5rem', alignItems: 'start' }}>
        {/* Image Gallery Area */}
        <div className="glass-panel" style={{ padding: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '600px', position: 'relative', borderRadius: '24px', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ position: 'absolute', top: '2rem', left: '2rem', background: 'var(--accent-gradient)', color: '#fff', padding: '0.4rem 1rem', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
             {product.tag}
          </div>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))', transform: 'scale(1.05)' }} />
        </div>

        {/* Product Details Area */}
        <div style={{ padding: '1rem 0' }}>
           <div className="flex items-center gap-4" style={{ marginBottom: '1.5rem' }}>
             <div className="flex items-center gap-1" style={{ color: '#fbbf24' }}>
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>(128 Verified Reviews)</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#10b981', fontSize: '0.875rem', fontWeight: 600, background: 'rgba(16, 185, 129, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '20px' }}>
              <Zap size={14} /> In Stock
            </span>
          </div>
          
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', letterSpacing: '-0.03em', lineHeight: 1.1, fontWeight: 800 }}>{product.name}</h1>
          
          <div style={{ borderBottom: '1px solid var(--border-color)', margin: '2rem 0', paddingBottom: '2rem' }}>
            <span className="text-gradient" style={{ fontSize: '3rem', fontWeight: 800, display: 'block' }}>${product.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
          </div>

          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 400 }}>
            {product.description}
          </p>

          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', fontWeight: 700 }}>Key Specifications</h3>
            <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {product.features.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)', background: 'rgba(255,255,255,0.03)', padding: '0.75rem 1rem', borderRadius: '8px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-primary)', flexShrink: 0 }}></div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart Actions */}
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <button onClick={() => setQty(Math.max(1, qty-1))} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontSize: '1.5rem', cursor: 'pointer', padding: '0 0.5rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--accent-primary)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-primary)'}>-</button>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, minWidth: '2.5rem', textAlign: 'center' }}>{qty}</span>
              <button onClick={() => setQty(qty+1)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', fontSize: '1.5rem', cursor: 'pointer', padding: '0 0.5rem', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color='var(--accent-primary)'} onMouseOut={e=>e.currentTarget.style.color='var(--text-primary)'}>+</button>
            </div>
            <button className="btn btn-primary hover-lift" style={{ flex: 1, padding: '1.25rem', fontSize: '1.125rem', borderRadius: '12px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
               <ShoppingCart size={22} /> Add to Cart
            </button>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', display: 'flex', gap: '3rem', background: 'rgba(255,255,255,0.01)' }}>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <Truck size={24} className="text-gradient" />
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.125rem' }}>Free Shipping</strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>1-3 business days</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <div style={{ background: 'rgba(139, 92, 246, 0.1)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <Shield size={24} className="text-gradient" />
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.25rem', fontSize: '1.125rem' }}>3-Year Warranty</strong>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Complete protection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
