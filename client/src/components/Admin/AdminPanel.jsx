import React from 'react';
import AddProject from './AddProject';
import AddClient from './AddClient';
import ContactList from './ContactList';
import SubscriberList from './SubscriberList';

const AdminPanel = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Panel</h1>
      <AddProject />
      <AddClient />
      <ContactList />
      <SubscriberList />
    </div>
  );
};

export default AdminPanel; 