import React, { useState } from 'react';

const AddProject = () => {
  const [form, setForm] = useState({ name: '', description: '', imageUrl: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    alert('Project Added!');
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Add Project</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <input placeholder="Project Name" name="name" onChange={handleChange} style={{ margin: '5px 0' }} />
        <input placeholder="Image URL" name="imageUrl" onChange={handleChange} style={{ margin: '5px 0' }} />
        <textarea placeholder="Description" name="description" onChange={handleChange} style={{ margin: '5px 0' }} />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default AddProject; 