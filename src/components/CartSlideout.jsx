import { X, Trash2, CreditCard } from 'lucide-react';
import { useEffect } from 'react';

export default function CartSlideout({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  if (!isOpen) return null;

  const cartItems = [
    { id: 1, name: 'QuantumX RTX 4090', price: 1599.99, quantity: 1, image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=400&q=80' },
    { id: 3, name: 'Vengeance 64GB DDR5', price: 219.99, quantity: 2, image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&w=400&q=80' }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', justifyContent: 'flex-end' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', opacity: 1, transition: 'opacity 0.3s ease' }} onClick={onClose}></div>
      <div className="glass-panel" style={{ 
        width: '100%', maxWidth: '420px', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column', 
        background: 'rgba(5, 5, 5, 0.85)', borderRadius: '0', borderLeft: '1px solid var(--border-color)', borderRight: 'none', borderTop: 'none', borderBottom: 'none',
        transform: 'translateX(0)', transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
      }}>
        
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.01)' }}>
          <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: 700 }}>Shopping Cart <span style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 400, marginLeft: '0.5rem' }}>(3)</span></h2>
          <button className="btn-icon" onClick={onClose}><X size={24} /></button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
              <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }} />
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', lineHeight: 1.2, fontWeight: 600 }}>{item.name}</h4>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Qty: {item.quantity}</span>
                  <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
              <button className="btn-icon" style={{ alignSelf: 'flex-start' }}><Trash2 size={18} /></button>
            </div>
          ))}
        </div>

        <div style={{ padding: '2rem 1.5rem', borderTop: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '1rem', color: 'var(--text-secondary)' }}>
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', fontSize: '1.5rem' }}>
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Total</span>
            <span style={{ fontWeight: 800 }} className="text-gradient">${subtotal.toFixed(2)}</span>
          </div>
          <button className="btn btn-primary w-full" style={{ padding: '1.25rem', fontSize: '1.125rem' }}>
            <CreditCard size={20} /> Checkout Securely
          </button>
        </div>

      </div>
    </div>
  );
}
