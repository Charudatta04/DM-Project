import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, Check, SlidersHorizontal } from 'lucide-react';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const allProducts = [
    { id: 1, name: 'QuantumX RTX 4090', price: 1599.99, category: 'Graphics Cards', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=80', tag: 'Bestseller' },
    { id: 2, name: 'Core i9 14900K Processor', price: 589.00, category: 'Processors', image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80', tag: 'New' },
    { id: 3, name: 'Vengeance 64GB DDR5', price: 219.99, category: 'Memory', image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=400&q=80' },
    { id: 4, name: 'Z790 Premium Motherboard', price: 349.50, category: 'Motherboards', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80' },
    { id: 5, name: 'Ryzen 9 7950X3D', price: 649.00, category: 'Processors', image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80' },
    { id: 6, name: 'Radeon RX 7900 XTX', price: 999.99, category: 'Graphics Cards', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=80' },
    { id: 7, name: '2TB NVMe PCIe 4.0 SSD', price: 149.99, category: 'Storage', image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=400&q=80', tag: 'Sale' },
    { id: 8, name: '850W 80+ Gold Power Supply', price: 129.99, category: 'Power', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80' },
    { id: 9, name: 'Kraken Z73 RGB Cooler', price: 279.99, category: 'Cooling', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=80' }
  ];

  const categories = ['All', 'Processors', 'Graphics Cards', 'Motherboards', 'Memory', 'Storage', 'Power', 'Cooling'];
  
  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container animate-fade-in-up" style={{ padding: '6rem 0 4rem 0' }}>
      <div style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem', letterSpacing: '-0.03em', fontWeight: 800 }}>Explore <span className="text-gradient">Hardware</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem' }}>Curated components for uncompromising performance.</p>
        </div>
        <div className="glass" style={{ padding: '0.75rem 1.25rem', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', fontWeight: 500 }}>
          Sort by: <strong style={{ color: 'var(--text-primary)' }}>Featured</strong> <ChevronDown size={18} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start' }}>
        <aside className="glass-panel" style={{ width: '280px', padding: '2rem', flexShrink: 0, position: 'sticky', top: '120px', borderRadius: '24px', background: 'rgba(5, 5, 5, 0.4)' }}>
          <div className="flex items-center justify-between" style={{ marginBottom: '2rem' }}>
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={20} className="text-gradient" />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Filters</h3>
            </div>
            {activeCategory !== 'All' && (
              <span onClick={() => setActiveCategory('All')} style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', cursor: 'pointer' }}>Clear</span>
            )}
          </div>
          
          <div style={{ marginBottom: '3rem' }}>
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Categories</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => setActiveCategory(cat)}
                    style={{ 
                      background: activeCategory === cat ? 'rgba(59, 130, 246, 0.1)' : 'transparent', 
                      border: '1px solid',
                      borderColor: activeCategory === cat ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
                      color: activeCategory === cat ? 'var(--text-primary)' : 'var(--text-secondary)', 
                      fontSize: '0.95rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif', 
                      padding: '0.8rem 1rem', borderRadius: '8px',
                      textAlign: 'left', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      transition: 'all 0.2s',
                      fontWeight: activeCategory === cat ? 600 : 400
                    }}
                    onMouseOver={e => { if (activeCategory !== cat) { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; } }}
                    onMouseOut={e => { if (activeCategory !== cat) { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; } }}
                  >
                    <span>{cat}</span>
                    {activeCategory === cat && <Check size={16} className="text-gradient" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1rem', color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Price Range</h4>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
               <div style={{ flex: 1, position: 'relative' }}>
                 <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>$</span>
                 <input type="text" placeholder="Min" style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-color)', color: '#fff', padding: '0.75rem 0.75rem 0.75rem 1.5rem', borderRadius: '8px', fontSize: '0.875rem' }} />
               </div>
               <span style={{ color: 'var(--text-secondary)' }}>-</span>
               <div style={{ flex: 1, position: 'relative' }}>
                 <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>$</span>
                 <input type="text" placeholder="Max" style={{ width: '100%', background: 'rgba(0,0,0,0.4)', border: '1px solid var(--border-color)', color: '#fff', padding: '0.75rem 0.75rem 0.75rem 1.5rem', borderRadius: '8px', fontSize: '0.875rem' }} />
               </div>
            </div>
            <button className="btn btn-outline hover-lift w-full" style={{ marginTop: '1.5rem', padding: '0.75rem', fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Apply Filter</button>
          </div>
        </aside>

        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Showing <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{filteredProducts.length}</strong> available products</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2.5rem' }} key={activeCategory /* force re-mount for animation */}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="glass-panel" style={{ gridColumn: '1 / -1', padding: '6rem 2rem', textAlign: 'center', border: '1px dashed var(--border-highlight)' }}>
                <Filter size={48} color="var(--text-secondary)" style={{ margin: '0 auto 1.5rem', opacity: 0.5 }} />
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: 700 }}>No products found</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem' }}>We couldn't find anything matching your current filters.</p>
                <button className="btn btn-primary" onClick={() => setActiveCategory('All')}>Reset Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
