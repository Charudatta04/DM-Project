import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '4rem' }}>
      {/* Background dynamic glow effects */}
      <div className="animate-pulse-glow" style={{ position: 'absolute', top: '10%', right: '5%', width: '500px', height: '500px', background: 'var(--accent-primary)', filter: 'blur(200px)', opacity: 0.15, borderRadius: '50%', zIndex: 0 }}></div>
      <div className="animate-pulse-glow" style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '450px', height: '450px', background: 'var(--accent-secondary)', filter: 'blur(200px)', opacity: 0.1, borderRadius: '50%', zIndex: 0, animationDelay: '2s' }}></div>

      <div className="container flex items-center justify-between" style={{ position: 'relative', zIndex: 10, width: '100%', gap: '4rem' }}>
        <div className="animate-fade-in-up" style={{ flex: '1 1 50%', maxWidth: '650px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.25rem', borderRadius: '30px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-secondary)', marginBottom: '2.5rem', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', backdropFilter: 'blur(8px)' }}>
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', boxShadow: '0 0 10px var(--accent-primary)' }}></span>
            NEXT-GEN HARDWARE ARCHITECTURE
          </div>
          
          <h1 style={{ fontSize: 'clamp(3.5rem, 5vw, 5.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.04em', lineHeight: 1.05, fontWeight: 800 }}>
            Command Absolute <br />
            <span className="text-gradient">Performance.</span>
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3.5rem', lineHeight: 1.6, maxWidth: '540px', fontWeight: 400 }}>
            Transcend previous limits with hand-picked components engineered for extreme workloads, relentless gaming, and absolute reliability.
          </p>
          
          <div className="flex gap-4">
            <Link to="/products" className="btn btn-primary hover-lift" style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem', borderRadius: '12px' }}>
              Shop Now <ArrowRight size={20} />
            </Link>
            <Link to="/products" className="btn btn-outline hover-lift" style={{ padding: '1.125rem 2.5rem', fontSize: '1.125rem', borderRadius: '12px' }}>
              Explore Builds <ChevronRight size={20} style={{ marginLeft: '-0.25rem' }} />
            </Link>
          </div>
          
          <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
            <div>
               <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>12K+</h4>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Premium Parts</p>
            </div>
            <div>
               <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>24/7</h4>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Expert Support</p>
            </div>
            <div>
               <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem', letterSpacing: '-0.02em' }}>4.9/5</h4>
               <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Customer Rating</p>
            </div>
          </div>
        </div>
        
        <div className="animate-fade-in-up" style={{ flex: '1 1 50%', animationDelay: '0.3s', display: 'flex', justifyContent: 'center' }}>
          <div className="glass-panel animate-float" style={{ width: '100%', maxWidth: '540px', aspectRatio: '4/5', padding: '1.25rem', display: 'flex', flexDirection: 'column', position: 'relative', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <img src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=800&q=80" alt="Premium PC Build" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px', opacity: 0.95 }} />
            
            <div className="glass" style={{ position: 'absolute', bottom: '2.5rem', left: '2.5rem', right: '2.5rem', padding: '1.5rem', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(5,5,5,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <strong style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.01em' }}>Titanium RTX 4090</strong>
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Unparalleled Performance</span>
              </div>
              <div style={{ textAlign: 'right' }}>
                 <span className="text-gradient" style={{ fontWeight: 800, fontSize: '1.75rem', display: 'block', lineHeight: 1.1 }}>$1,599</span>
                 <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>In Stock</span>
              </div>
            </div>
            
            {/* Decorative element */}
            <div style={{ position: 'absolute', top: '3rem', right: '-1.5rem', background: 'var(--accent-primary)', color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 700, transform: 'rotate(12deg)', boxShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>
               Ultimate Edition
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
