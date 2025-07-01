import React, { useEffect, useState } from 'react';

const SubscriberList = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    fetch('/api/subscribers').then(res => res.json()).then(setSubs);
  }, []);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Newsletter Subscribers</h2>
      <ul>
        {subs.map(s => (
          <li key={s._id}>{s.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscriberList; 