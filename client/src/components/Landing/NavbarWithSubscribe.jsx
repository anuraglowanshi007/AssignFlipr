import React, { useState } from 'react';

const NavbarWithSubscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  return (
    <nav style={{ backgroundColor: '#1E88E5', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        {['Home', 'Services', 'Projects', 'Testimonials', 'Contact'].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#fff', textDecoration: 'none', fontWeight: 500 }}>{item}</a>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
        <span style={{ color: '#fff', fontWeight: 600 }}>Subscribe Us</span>
        <form onSubmit={handleSubscribe} style={{ display: 'flex' }}>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ padding: '8px', border: '1px solid white', borderRight: 'none', borderRadius: '5px 0 0 5px', width: '200px' }}
            required
          />
          <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#fff', color: '#1E88E5', fontWeight: 600, border: '1px solid white', borderRadius: '0 5px 5px 0', cursor: 'pointer' }}>
            Subscribe
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavbarWithSubscribe; 