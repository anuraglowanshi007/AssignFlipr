import React, { useEffect, useState } from 'react';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('/api/contacts').then(res => res.json()).then(setContacts);
  }, []);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Contact Form Submissions</h2>
      {contacts.map(c => (
        <div key={c._id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <p><strong>Name:</strong> {c.name}</p>
          <p><strong>Email:</strong> {c.email}</p>
          <p><strong>Mobile:</strong> {c.mobile}</p>
          <p><strong>City:</strong> {c.city}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList; 