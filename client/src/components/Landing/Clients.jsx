import React, { useEffect, useState } from 'react';

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch('/api/clients').then(res => res.json()).then(setClients);
  }, []);

  return (
    <section style={{ padding: '20px' }}>
      <h2>Happy Clients</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {clients.map(client => (
          <div key={client._id} style={{ border: '1px solid #ccc', padding: '10px', width: '250px' }}>
            <img src={client.imageUrl} alt={client.name} style={{ width: '100%' }} />
            <p>"{client.description}"</p>
            <p><strong>{client.name}</strong>, {client.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients; 