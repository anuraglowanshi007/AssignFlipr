import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '', city: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then(res => res.json()).then(() => alert('Submitted Successfully'));
  };

  return (
    <section style={{ padding: '20px' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <input name="name" placeholder="Full Name" onChange={handleChange} style={{ margin: '5px' }} />
        <input name="email" placeholder="Email Address" onChange={handleChange} style={{ margin: '5px' }} />
        <input name="mobile" placeholder="Mobile Number" onChange={handleChange} style={{ margin: '5px' }} />
        <input name="city" placeholder="City" onChange={handleChange} style={{ margin: '5px' }} />
        <button type="submit" style={{ margin: '5px' }}>Submit</button>
      </form>
    </section>
  );
};

export default ContactForm; 