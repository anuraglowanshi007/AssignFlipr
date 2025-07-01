import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = e => {
    e.preventDefault();
    fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    }).then(res => res.json()).then(() => alert('Subscribed!'));
  };

  return (
    <section style={{ padding: '20px' }}>
      <h2>Subscribe to Newsletter</h2>
      <form onSubmit={handleSubscribe} style={{ display: 'flex', maxWidth: '400px' }}>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
          style={{ flex: 1, marginRight: '5px', padding: '8px' }}
          required
        />
        <button type="submit" style={{ padding: '8px 12px' }}>Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter; 