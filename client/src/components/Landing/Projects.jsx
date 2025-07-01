import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Uncomment this when API is ready
    /*
    fetch('/api/projects')
      .then(res => res.json())
      .then(setProjects)
      .catch(error => {
        console.error('Error fetching projects:', error);
        // Fallback to dummy data if API fails
        setProjects(dummyProjects);
      });
    */
    
    // Using dummy data initially
    setProjects(dummyProjects);
  }, []);

  // Dummy data matching the reference image with working image URLs
  const dummyProjects = [
    {
      _id: '1',
      name: 'Consultation',
      description: 'Project Norms, Location',
      imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      _id: '2',
      name: 'Design',
      description: 'Project Name, Location',
      imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      _id: '3',
      name: 'Marketing & Design',
      description: 'Project Name, Location',
      imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      _id: '4',
      name: 'Consultation & Marketing',
      description: 'Project Norms, Location',
      imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      _id: '5',
      name: 'Consultation',
      description: 'Project Name, Location',
      imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <section style={{ 
      padding: '80px 20px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '50px',
        color: '#333'
      }}>Our Projects</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {projects.map(project => (
          <div 
            key={project._id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            <div style={{
              height: '200px',
              backgroundImage: `url(${project.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }} />
            
            <div style={{ padding: '20px' }}>
              <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '10px',
                color: '#222'
              }}>
                {project.name}
              </h3>
              
              <p style={{
                color: '#666',
                marginBottom: '20px',
                fontSize: '0.9rem'
              }}>
                {project.description}
              </p>
              
              <button style={{
                display: 'block',
                width: '100%',
                padding: '12px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                ':hover': {
                  backgroundColor: '#45a049',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }
              }}>
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;