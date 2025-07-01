import React, { useState } from 'react';
import NavbarWithSubscribe from './components/Landing/NavbarWithSubscribe';
import Projects from './components/Landing/Projects';
import Clients from './components/Landing/Clients';
import ContactForm from './components/Landing/ContactForm';
import Newsletter from './components/Landing/Newsletter';
import AdminPanel from './components/Admin/AdminPanel';

const App = () => {
  const [view, setView] = useState('landing');

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px', background: '#f5f5f5' }}>
        <button onClick={() => setView('landing')} style={{ marginRight: '10px' }}>Landing</button>
        <button onClick={() => setView('admin')}>Admin</button>
      </div>
      {view === 'landing' ? (
        <>
          <NavbarWithSubscribe />
          <Projects />
          <Clients />
          <ContactForm />
          <Newsletter />
        </>
      ) : (
        <AdminPanel />
      )}
    </div>
  );
};

export default App;