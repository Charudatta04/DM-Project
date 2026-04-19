import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const featuredProducts = [
    { id: 1, name: 'QuantumX RTX 4090 Titanium', price: 1599.99, category: 'Graphics Cards', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=80', tag: 'Bestseller' },
    { id: 2, name: 'Core i9 14900K Processor', price: 589.00, category: 'Processors', image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'New' },
    { id: 3, name: 'Vengeance 64GB DDR5 RGB Memory', price: 219.99, category: 'Memory', image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Z790 Premium ATX Motherboard', price: 349.50, category: 'Motherboards', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80' }
  ];

  return (
    <>
      <Hero />
      <div className="container" style={{ padding: '8rem 0 4rem 0' }}>
        <div className="flex items-end justify-between" style={{ marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Featured <span className="text-gradient">Components</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>Hand-selected hardware to elevate your next build.</p>
          </div>
          <Link to="/products" className="btn btn-outline hover-lift" style={{ padding: '0.75rem 1.5rem', borderRadius: '8px' }}>
            View Catalog <ArrowRight size={18} />
          </Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Categories Banner */}
      <div className="container" style={{ padding: '4rem 0 6rem 0' }}>
         <div className="glass-panel hover-lift" style={{ padding: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'linear-gradient(45deg, rgba(30, 41, 59, 0.4), rgba(15, 23, 42, 0.8))', borderRadius: '24px' }}>
            <div style={{ maxWidth: '600px' }}>
               <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Looking for a Complete System?</h2>
               <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '2rem' }}>We offer pre-built performance beasts fully optimized for 4K gaming and heavy productivity.</p>
               <button className="btn btn-primary" style={{ padding: '1rem 2rem' }}>Browse Prebuilds</button>
            </div>
            {/* Minimalist illustration placeholder */}
            <div style={{ width: '300px', height: '200px', position: 'relative' }}>
               <div className="animate-float" style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', border: '1px solid var(--accent-primary)', borderRadius: '20px', transform: 'rotate(15deg)' }}></div>
               <div className="animate-float" style={{ position: 'absolute', bottom: 0, left: 0, width: '180px', height: '120px', background: 'var(--accent-secondary)', opacity: 0.2, filter: 'blur(30px)', borderRadius: '20px' }}></div>
            </div>
         </div>
      </div>
    </>
  );
}
