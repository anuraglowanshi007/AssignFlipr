import React, { useState, useEffect } from "react";

const projectsData = [
  {
    title: "Consultation",
    description: "Helping you define your business needs and goals to create actionable plans.",
    imgAlt: "Business professionals having a consultation meeting in a bright modern office with glass walls",
    icon: "📊"
  },
  {
    title: "Design",
    description: "Crafting appealing and effective designs that communicate your brand's vision.",
    imgAlt: "Creative team collaborating on design concepts displayed on large monitors in a stylish office",
    icon: "🎨"
  },
  {
    title: "Marketing & Design",
    description: "Integrating marketing strategies with design for maximum outreach and engagement.",
    imgAlt: "Detailed marketing strategy plans and design drafts on a desk with digital tablets and charts",
    icon: "🚀"
  },
  {
    title: "Consultation & Marketing",
    description: "Combining expert consultation with targeted marketing to accelerate growth.",
    imgAlt: "Marketing consultant presenting data analysis and campaign strategy in a modern conference room",
    icon: "📈"
  },
  {
    title: "Consultation",
    description: "Ongoing expert consultation services for real estate and business growth.",
    imgAlt: "Real estate consultant reviewing client documents in a sunlit office with wooden furnishings",
    icon: "🏢"
  },
];

const testimonialsData = [
  {
    name: "Emily R.",
    role: "CEO, TechStart Inc.",
    feedback: "Outstanding service! The team really understood my vision and delivered beyond expectations.",
    rating: 5
  },
  {
    name: "Michael S.",
    role: "Marketing Director",
    feedback: "Professional and efficient from start to finish. Highly recommended for marketing solutions.",
    rating: 5
  },
  {
    name: "Sophia L.",
    role: "Creative Director",
    feedback: "Creative designs that perfectly captured my brand identity. A pleasure to work with.",
    rating: 4
  },
  {
    name: "David K.",
    role: "Real Estate Developer",
    feedback: "Their strategic approach helped us increase property sales by 30% in just 3 months.",
    rating: 5
  }
];

const servicesData = [
  {
    title: "Business Strategy",
    description: "Comprehensive business planning and growth strategies",
    icon: "💡"
  },
  {
    title: "Brand Development",
    description: "Creating memorable brand identities that resonate",
    icon: "✨"
  },
  {
    title: "Digital Marketing",
    description: "Data-driven online marketing campaigns",
    icon: "📱"
  },
  {
    title: "Real Estate Consulting",
    description: "Specialized advice for property investments",
    icon: "🏠"
  }
];

function HeroSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    e.target.reset();
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Transform Your Business with Expert Consultation, Design & Marketing</h1>
          <p>
            Partner with us to transform your business strategies into standout
            successes with expert consulting, design, and marketing solutions.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Satisfied Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
        <div className="hero-form-container" aria-label="Free consultation form">
          <h2>Get a Free Consultation</h2>
          {isSubmitted ? (
            <div className="form-success-message">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#27AE60"/>
              </svg>
              <h3>Thank You!</h3>
              <p>We'll contact you within 24 hours to schedule your consultation.</p>
            </div>
          ) : (
            <form className="hero-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Your full name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select 
                  id="service" 
                  name="service" 
                  required
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  <option value="consultation">Consultation</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="all">All Services</option>
                </select>
              </div>
              <button 
                type="submit" 
                className="cta-button"
                aria-label="Submit free consultation request"
              >
                Request Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <p className="form-note">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          )}
        </div>
      </div>
      <div className="hero-bg-shapes">
        <div className="circle large-circle"></div>
        <div className="circle medium-circle"></div>
        <div className="circle small-circle"></div>
      </div>
    </section>
  );
}

function NotAverageRealtor() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Confident real estate agent discussing plans with clients in bright office"
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Professional marketing consultant presenting data in modern conference room"
    },
    {
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      alt: "Team collaborating across whiteboard in open workspace with natural light"
    }
  ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="not-average-section" aria-label="Not Your Average Realtor">
      <div className="container">
        <div className="text-content">
          <h2>Not Your Average Realtor</h2>
          <p>
            We bring a modern, holistic approach to real estate with expert
            consulting and marketing strategies that deliver measurable results.
          </p>
          <div className="features-grid">
            {servicesData.map((service, index) => (
              <div key={index} className="feature-item">
                <span className="feature-icon">{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="image-carousel">
          <div className="carousel-container">
            {images.map((img, idx) => (
              <div 
                key={idx}
                className={`carousel-slide ${idx === activeImage ? 'active' : ''}`}
                aria-hidden={idx !== activeImage}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === activeImage ? 'active' : ''}`}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setActiveImage(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="why-choose-section" aria-label="Why Choose Us">
      <div className="section-header">
        <span className="section-subtitle">Our Advantages</span>
        <h2>Why Choose Us?</h2>
        <p className="section-description">
          We combine industry expertise with innovative solutions to deliver exceptional results for our clients.
        </p>
      </div>
      <div className="choose-cards">
        <article className="choose-card" tabIndex="0">
          <div className="card-header">
            <div className="icon-container" aria-hidden="true">
              <svg
                className="icon"
                fill="#2D9CDB"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
              >
                <path d="M12 2C6.48 2 2 6.5 2 12s4.48 10 10 10 10-4.5 10-10S17.52 2 12 2zm1 17.93c-2.83.48-5.48-.92-7-3.67.76-1.03 2.21-1.67 3.74-1.67.87 0 1.71.3 2.37.83l2.85-2.85a7.01 7.01 0 00-3.71-2.02v3.84l-3.44 3.44c.91 1.25 2.43 2.06 4.19 2.06 3.04 0 5.56-2.39 5.69-5.38l-1.86 1.87a6.96 6.96 0 00-1.63 3.58z" />
              </svg>
            </div>
            <h3>Personal ROI</h3>
          </div>
          <p>
            Tailored strategies ensuring your investments generate maximum return
            on investment with our data-driven approach.
          </p>
          <a href="#!" className="learn-more-link">
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#2D9CDB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </article>
        
        <article className="choose-card" tabIndex="0">
          <div className="card-header">
            <div className="icon-container" aria-hidden="true">
              <svg
                className="icon"
                fill="#27AE60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
              >
                <path d="M20 6h-8v8h8V6zm-10 12v-8H4v8h6zM2 4h20v2H2V4zm0 12h20v2H2v-2z" />
              </svg>
            </div>
            <h3>Design Excellence</h3>
          </div>
          <p>
            Innovative design solutions that captivate and communicate your brand
            clearly across all platforms and mediums.
          </p>
          <a href="#!" className="learn-more-link">
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#27AE60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </article>
        
        <article className="choose-card" tabIndex="0">
          <div className="card-header">
            <div className="icon-container" aria-hidden="true">
              <svg
                className="icon"
                fill="#F2994A"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
              >
                <path d="M13 3a9 9 0 00-9 9h2a7 7 0 017-7v-2zm-1 18a9 9 0 009-9h-2a7 7 0 01-7 7v2zm1-10a4 4 0 14-4 4 4 4 0 014-4z" />
              </svg>
            </div>
            <h3>Strategic Marketing</h3>
          </div>
          <p>
            Data-driven marketing campaigns designed to maximize your customer reach
            and engagement with measurable results.
          </p>
          <a href="#!" className="learn-more-link">
            Learn more
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#F2994A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </article>
      </div>
    </section>
  );
}

function AboutUs() {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "50+", label: "Industry Awards" }
  ];

  return (
    <section className="about-us-section" aria-label="About Us">
      <div className="container">
        <div className="about-content">
          <div className="section-header">
            <span className="section-subtitle">Our Story</span>
            <h2>About Us</h2>
            <p className="about-text">
              Founded in 2008, our team specializes in delivering innovative real estate 
              and marketing solutions with a personalized approach. We merge industry 
              knowledge with creative design and strategic marketing to offer you a 
              comprehensive service that's tailored to your needs.
            </p>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <button className="cta-button secondary">
              Learn More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="about-images">
            <div className="image-stack">
              <div className="image-wrapper main-image">
                <img
                  src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Small group of professionals in a team meeting discussing strategies"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <div className="image-wrapper secondary-image">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Business consultant advising client with paperwork at desk"
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurProjects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => 
        project.title.toLowerCase().includes(activeFilter.toLowerCase())
      );

  return (
    <section className="projects-section" aria-label="Our Projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Work</span>
          <h2>Our Projects</h2>
          <p className="projects-description">
            We showcase a diverse range of successful projects that are driving
            clients to higher performance and brand recognition.
          </p>
        </div>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === "all" ? 'active' : ''}`}
            onClick={() => setActiveFilter("all")}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${activeFilter === "consultation" ? 'active' : ''}`}
            onClick={() => setActiveFilter("consultation")}
          >
            Consultation
          </button>
          <button 
            className={`filter-btn ${activeFilter === "design" ? 'active' : ''}`}
            onClick={() => setActiveFilter("design")}
          >
            Design
          </button>
          <button 
            className={`filter-btn ${activeFilter === "marketing" ? 'active' : ''}`}
            onClick={() => setActiveFilter("marketing")}
          >
            Marketing
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(({ title, description, imgAlt, icon }, idx) => (
            <article key={idx} className="project-card" tabIndex="0">
              <div className="project-icon">{icon}</div>
              <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href="#!" className="project-link">
                  View Case Study
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="section-cta">
          <button className="cta-button">
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

function HappyClients() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialsData.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonialsData.length]);

  return (
    <section className="clients-section" aria-label="Happy Clients">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Testimonials</span>
          <h2>Happy Clients</h2>
          <p className="section-description">
            Don't just take our word for it - hear what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonial-track">
            {testimonialsData.map(({ name, role, feedback, rating }, idx) => (
              <div 
                key={idx}
                className={`testimonial-slide ${idx === activeTestimonial ? 'active' : ''}`}
                aria-hidden={idx !== activeTestimonial}
              >
                <blockquote className="testimonial-card">
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill={i < rating ? "#F2C94C" : "#E0E0E0"} 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="feedback">"{feedback}"</p>
                  <footer className="client-info">
                    <span className="client-name">{name}</span>
                    <span className="client-role">{role}</span>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
          <div className="testimonial-nav">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                className={`nav-dot ${idx === activeTestimonial ? 'active' : ''}`}
                aria-label={`View testimonial ${idx + 1}`}
                onClick={() => setActiveTestimonial(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter for the latest tips and industry insights.</p>
          </div>
          {isSubscribed ? (
            <div className="newsletter-success">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#27AE60"/>
              </svg>
              <h3>Thank You for Subscribing!</h3>
              <p>You'll receive our next newsletter soon.</p>
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="cta-button">
                  Subscribe
                </button>
              </div>
              <p className="form-note">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    { title: "About Us", url: "#" },
    { title: "Services", url: "#" },
    { title: "Projects", url: "#" },
    { title: "Testimonials", url: "#" },
    { title: "Contact", url: "#" },
    { title: "Blog", url: "#" }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "#", icon: "linkedin" },
    { name: "Twitter", url: "#", icon: "twitter" },
    { name: "Facebook", url: "#", icon: "facebook" },
    { name: "Instagram", url: "#", icon: "instagram" }
  ];

  return (
    <footer className="footer" aria-label="Footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <h3 className="footer-logo">ConsultPro</h3>
            <p>
              We help businesses grow through strategic consulting, 
              innovative design, and effective marketing solutions.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  aria-label={social.name}
                  className="social-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {social.icon === "linkedin" && (
                      <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
                    )}
                    {social.icon === "twitter" && (
                      <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.4 4.53 14.42 3.89 14.27C4.16 15.16 4.77 15.9 5.58 16.34C6.39 16.78 7.35 16.9 8.29 16.67C6.81 17.9 4.93 18.6 2.94 18.6C2.61 18.6 2.28 18.58 1.95 18.54C3.9 19.81 6.16 20.5 8.58 20.5C16 20.5 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="currentColor"/>
                    )}
                    {social.icon === "facebook" && (
                      <path d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.891H13.563V21.878C18.343 21.128 22 16.991 22 12Z" fill="currentColor"/>
                    )}
                    {social.icon === "instagram" && (
                      <path d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C18.021 2.287 18.68 2.46 19.14 2.645C19.728 2.881 20.176 3.188 20.633 3.645C21.09 4.102 21.397 4.55 21.633 5.138C21.818 5.598 21.991 6.257 22.045 7.428C22.103 8.694 22.115 9.074 22.115 12.278C22.115 15.482 22.103 15.862 22.045 17.128C21.991 18.299 21.818 18.958 21.633 19.418C21.397 20.006 21.09 20.454 20.633 20.911C20.176 21.368 19.728 21.675 19.14 21.911C18.68 22.096 18.021 22.269 16.85 22.323C15.584 22.381 15.204 22.393 12 22.393C8.796 22.393 8.416 22.381 7.15 22.323C5.979 22.269 5.32 22.096 4.86 21.911C4.272 21.675 3.824 21.368 3.367 20.911C2.91 20.454 2.603 20.006 2.367 19.418C2.182 18.958 2.009 18.299 1.955 17.128C1.897 15.862 1.885 15.482 1.885 12.278C1.885 9.074 1.897 8.694 1.955 7.428C2.009 6.257 2.182 5.598 2.367 5.138C2.603 4.55 2.91 4.102 3.367 3.645C3.824 3.188 4.272 2.881 4.86 2.645C5.32 2.46 5.979 2.287 7.15 2.233C8.416 2.175 8.796 2.163 12 2.163ZM12 4C8.839 4 8.488 4.011 7.235 4.068C6.156 4.119 5.598 4.284 5.236 4.428C4.745 4.624 4.403 4.858 4.047 5.214C3.691 5.57 3.457 5.912 3.261 6.403C3.117 6.765 2.952 7.323 2.901 8.402C2.844 9.655 2.833 10.006 2.833 13.167C2.833 16.328 2.844 16.679 2.901 17.932C2.952 19.011 3.117 19.569 3.261 19.931C3.457 20.422 3.691 20.764 4.047 21.12C4.403 21.476 4.745 21.71 5.236 21.906C5.598 22.05 6.156 22.215 7.235 22.266C8.488 22.323 8.839 22.334 12 22.334C15.161 22.334 15.512 22.323 16.765 22.266C17.844 22.215 18.402 22.05 18.764 21.906C19.255 21.71 19.597 21.476 19.953 21.12C20.309 20.764 20.543 20.422 20.739 19.931C20.883 19.569 21.048 19.011 21.099 17.932C21.156 16.679 21.167 16.328 21.167 13.167C21.167 10.006 21.156 9.655 21.099 8.402C21.048 7.323 20.883 6.765 20.739 6.403C20.543 5.912 20.309 5.57 19.953 5.214C19.597 4.858 19.255 4.624 18.764 4.428C18.402 4.284 17.844 4.119 16.765 4.068C15.512 4.011 15.161 4 12 4ZM12 7.5C9.519 7.5 7.5 9.519 7.5 12C7.5 14.481 9.519 16.5 12 16.5C14.481 16.5 16.5 14.481 16.5 12C16.5 9.519 14.481 7.5 12 7.5ZM12 14.5C10.619 14.5 9.5 13.381 9.5 12C9.5 10.619 10.619 9.5 12 9.5C13.381 9.5 14.5 10.619 14.5 12C14.5 13.381 13.381 14.5 12 14.5ZM18.75 6.75C18.75 7.164 18.414 7.5 18 7.5C17.586 7.5 17.25 7.164 17.25 6.75C17.25 6.336 17.586 6 18 6C18.414 6 18.75 6.336 18.75 6.75Z" fill="currentColor"/>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-links">
            <div className="links-column">
              <h4>Company</h4>
              <ul>
                {footerLinks.slice(0, 3).map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="links-column">
              <h4>Resources</h4>
              <ul>
                {footerLinks.slice(3).map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="links-column">
              <h4>Contact</h4>
              <ul>
                <li>123 Business Ave</li>
                <li>New York, NY 10001</li>
                <li>info@consultpro.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} ConsultPro. All rights reserved.
          </div>
          <div className="legal-links">
            <a href="#!">Privacy Policy</a>
            <a href="#!">Terms of Service</a>
            <a href="#!">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        /* CSS Variables */
        :root {
          --primary-color: #2D9CDB;
          --primary-dark: #2077BF;
          --secondary-color: #F2994A;
          --secondary-dark: #D97C1F;
          --accent-color: #27AE60;
          --accent-dark: #1F8F4A;
          --text-color: #333;
          --text-light: #555;
          --text-lighter: #777;
          --bg-color: #F9FAFE;
          --bg-light: #FFFFFF;
          --bg-dark: #F8FAFF;
          --border-radius: 12px;
          --box-shadow: 0 8px 20px rgba(45, 156, 219, 0.12);
          --transition: all 0.3s ease;
        }

        /* Reset and base styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
                       Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          background: var(--bg-color);
          color: var(--text-color);
          line-height: 1.6;
          min-height: 100vh;
          overflow-x: hidden;
        }
        
        h1, h2, h3, h4 {
          font-weight: 700;
          line-height: 1.2;
          color: var(--text-color);
        }
        
        h1 {
          font-size: clamp(2rem, 5vw, 3rem);
          margin-bottom: 1.5rem;
        }
        
        h2 {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          margin-bottom: 1.25rem;
        }
        
        h3 {
          font-size: clamp(1.5rem, 3vw, 1.8rem);
          margin-bottom: 1rem;
        }
        
        p {
          font-size: 1rem;
          margin-bottom: 1.25rem;
          color: var(--text-light);
        }
        
        a {
          text-decoration: none;
          color: var(--primary-color);
          transition: var(--transition);
        }
        
        ul {
          list-style: none;
        }
        
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
        
        button {
          cursor: pointer;
          border: none;
          background: none;
          font-family: inherit;
          transition: var(--transition);
        }
        
        /* Accessibility */
        :focus-visible {
          outline: 3px solid var(--primary-color);
          outline-offset: 3px;
        }
        
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }
        
        /* Layout */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        /* Buttons */
        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background-color: var(--primary-color);
          color: white;
          font-weight: 600;
          padding: 0.8rem 1.75rem;
          border-radius: var(--border-radius);
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(45, 156, 219, 0.3);
          transition: var(--transition);
        }
        
        .cta-button:hover,
        .cta-button:focus {
          background-color: var(--primary-dark);
          box-shadow: 0 6px 16px rgba(45, 156, 219, 0.4);
          transform: translateY(-2px);
        }
        
        .cta-button.secondary {
          background-color: white;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
          box-shadow: none;
        }
        
        .cta-button.secondary:hover,
        .cta-button.secondary:focus {
          background-color: var(--primary-color);
          color: white;
          box-shadow: 0 4px 12px rgba(45, 156, 219, 0.3);
        }
        
        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          padding: 1rem 0;
        }
        
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
        }
        
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: var(--text-color);
          cursor: pointer;
          z-index: 1001;
        }
        
        .nav-menu {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          font-weight: 500;
          color: var(--text-color);
          position: relative;
          padding: 0.5rem 0;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-color);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after,
        .nav-link:focus::after {
          width: 100%;
        }
        
        /* Hero Section */
        .hero-section {
          position: relative;
          background: white;
          padding: 8rem 0 6rem;
          overflow: hidden;
        }
        
        .hero-content {
          display: flex;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }
        
        .hero-text {
          flex: 1;
          max-width: 600px;
        }
        
        .hero-text h1 {
          color: var(--text-color);
          margin-bottom: 1.5rem;
        }
        
        .hero-text p {
          font-size: 1.125rem;
          color: var(--text-light);
          margin-bottom: 2rem;
          max-width: 500px;
        }
        
        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--text-light);
        }
        
        .hero-form-container {
          flex: 0 1 420px;
          background: var(--primary-color);
          border-radius: var(--border-radius);
          padding: 2.5rem;
          box-shadow: var(--box-shadow);
          color: white;
        }
        
        .hero-form-container h2 {
          color: white;
          text-align: center;
          margin-bottom: 1.5rem;
        }
        
        .form-group {
          margin-bottom: 1.25rem;
        }
        
        .hero-form label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: white;
        }
        
        .hero-form input,
        .hero-form select {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: none;
          font-size: 1rem;
          background: rgba(255, 255, 255, 0.9);
          transition: var(--transition);
        }
        
        .hero-form input:focus,
        .hero-form select:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
          background: white;
        }
        
        .form-note {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 1rem;
          text-align: center;
        }
        
        .form-success-message {
          text-align: center;
          padding: 1rem;
        }
        
        .form-success-message h3 {
          color: white;
          margin: 1rem 0 0.5rem;
        }
        
        .form-success-message p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
        }
        
        /* Background shapes */
        .hero-bg-shapes {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }
        
        .circle {
          border-radius: 50%;
          position: absolute;
          filter: blur(90px);
          opacity: 0.2;
        }
        
        .large-circle {
          width: 600px;
          height: 600px;
          background: var(--primary-color);
          top: -300px;
          right: -300px;
        }
        
        .medium-circle {
          width: 400px;
          height: 400px;
          background: var(--secondary-color);
          top: 100px;
          right: 100px;
        }
        
        .small-circle {
          width: 200px;
          height: 200px;
          background: var(--accent-color);
          top: 300px;
          right: 300px;
        }
        
        /* Not Average Realtor Section */
        .not-average-section {
          padding: 6rem 0;
          background: var(--bg-light);
        }
        
        .not-average-section .container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }
        
        .text-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .text-content h2 {
          margin-bottom: 1rem;
        }
        
        .text-content p {
          max-width: 600px;
          margin: 0 auto 2rem;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        
        .feature-item {
          background: var(--bg-light);
          border-radius: var(--border-radius);
          padding: 2rem;
          box-shadow: var(--box-shadow);
          transition: var(--transition);
        }
        
        .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(45, 156, 219, 0.2);
        }
        
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: inline-block;
        }
        
        .feature-item h3 {
          margin-bottom: 0.75rem;
        }
        
        .feature-item p {
          font-size: 0.95rem;
          margin-bottom: 0;
        }
        
        .image-carousel {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .carousel-container {
          position: relative;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .carousel-slide {
          position: relative;
          padding-top: 56.25%; /* 16:9 aspect ratio */
          display: none;
        }
        
        .carousel-slide.active {
          display: block;
        }
        
        .carousel-slide img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #E0E0E0;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .dot.active {
          background: var(--primary-color);
          transform: scale(1.2);
        }
        
        /* Why Choose Us Section */
        .why-choose-section {
          padding: 6rem 0;
          background: var(--bg-dark);
        }
        
        .section-header {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem;
        }
        
        .section-subtitle {
          display: inline-block;
          color: var(--primary-color);
          font-weight: 600;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.875rem;
        }
        
        .section-description {
          max-width: 600px;
          margin: 0 auto;
        }
        
        .choose-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .choose-card {
          background: var(--bg-light);
          border-radius: var(--border-radius);
          padding: 2rem;
          box-shadow: var(--box-shadow);
          transition: var(--transition);
        }
        
        .choose-card:hover,
        .choose-card:focus-within {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(45, 156, 219, 0.2);
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .icon-container {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(45, 156, 219, 0.1);
        }
        
        .learn-more-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          margin-top: 1rem;
          color: var(--primary-color);
        }
        
        /* About Us Section */
        .about-us-section {
          padding: 6rem 0;
          background: var(--bg-light);
        }
        
        .about-content {
          display: flex;
          gap: 3rem;
          align-items: center;
        }
        
        .about-text {
          margin-bottom: 2rem;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary-color);
          display: block;
          line-height: 1;
        }
        
        .stat-label {
          font-size: 0.875rem;
          color: var(--text-light);
        }
        
        .about-images {
          flex: 1;
          position: relative;
          min-height: 400px;
        }
        
        .image-stack {
          position: relative;
          width: 100%;
          height: 100%;
        }
        
        .image-wrapper {
          position: absolute;
          border-radius: var(--border-radius);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          transition: var(--transition);
        }
        
        .image-wrapper:hover {
          transform: scale(1.02);
          z-index: 2;
        }
        
        .main-image {
          width: 70%;
          height: 70%;
          top: 0;
          left: 0;
          z-index: 1;
        }
        
        .secondary-image {
          width: 60%;
          height: 60%;
          bottom: 0;
          right: 0;
          z-index: 0;
        }
        
        /* Projects Section */
        .projects-section {
          padding: 6rem 0;
          background: var(--bg-dark);
        }
        
        .project-filters {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        
        .filter-btn {
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          background: white;
          border: 1px solid #E0E0E0;
          font-weight: 500;
          transition: var(--transition);
        }
        
        .filter-btn:hover,
        .filter-btn:focus {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }
        
        .filter-btn.active {
          background: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .project-card {
          background: white;
          border-radius: var(--border-radius);
          padding: 2rem;
          box-shadow: var(--box-shadow);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .project-card:hover,
        .project-card:focus-within {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(45, 156, 219, 0.2);
        }
        
        .project-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          margin-top: auto;
          color: var(--primary-color);
        }
        
        .section-cta {
          text-align: center;
          margin-top: 3rem;
        }
        
        /* Happy Clients Section */
        .clients-section {
          padding: 6rem 0;
          background: var(--bg-light);
        }
        
        .testimonials-container {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }
        
        .testimonial-track {
          position: relative;
          min-height: 300px;
        }
        
        .testimonial-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .testimonial-slide.active {
          opacity: 1;
          visibility: visible;
        }
        
        .testimonial-card {
          background: var(--bg-light);
          border-radius: var(--border-radius);
          padding: 3rem;
          box-shadow: var(--box-shadow);
          text-align: center;
        }
        
        .rating {
          display: flex;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 1.5rem;
        }
        
        .feedback {
          font-size: 1.25rem;
          font-style: italic;
          color: var(--text-color);
          margin-bottom: 2rem;
          position: relative;
        }
        
        .feedback::before,
        .feedback::after {
          content: '"';
          font-size: 3rem;
          color: var(--primary-color);
          opacity: 0.2;
          position: absolute;
        }
        
        .feedback::before {
          top: -1.5rem;
          left: -1rem;
        }
        
        .feedback::after {
          bottom: -2.5rem;
          right: -1rem;
        }
        
        .client-info {
          display: flex;
          flex-direction: column;
        }
        
        .client-name {
          font-weight: 700;
          color: var(--text-color);
        }
        
        .client-role {
          font-size: 0.875rem;
          color: var(--text-light);
        }
        
        .testimonial-nav {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }
        
        .nav-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #E0E0E0;
          border: none;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .nav-dot.active {
          background: var(--primary-color);
          transform: scale(1.2);
        }
        
        /* Newsletter Section */
        .newsletter-section {
          padding: 4rem 0;
          background: var(--primary-color);
          color: white;
        }
        
        .newsletter-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .newsletter-text h2 {
          color: white;
          margin-bottom: 1rem;
        }
        
        .newsletter-text p {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
        }
        
        .newsletter-form {
          width: 100%;
        }
        
        .newsletter-form .form-group {
          display: flex;
          gap: 1rem;
          width: 100%;
        }
        
        .newsletter-form input {
          flex: 1;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: none;
          font-size: 1rem;
        }
        
        .newsletter-form input:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
        }
        
        .newsletter-success {
          text-align: center;
        }
        
        .newsletter-success h3 {
          color: white;
          margin: 1rem 0 0.5rem;
        }
        
        .newsletter-success p {
          color: rgba(255, 255, 255, 0.9);
        }
        
        /* Footer */
        .footer {
          background: #1A1A1A;
          color: white;
          padding: 4rem 0 2rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-about {
          max-width: 300px;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
        }
        
        .footer-about p {
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 1.5rem;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          transition: var(--transition);
        }
        
        .social-link:hover,
        .social-link:focus {
          background: var(--primary-color);
          transform: translateY(-3px);
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }
        
        .links-column h4 {
          color: white;
          margin-bottom: 1.25rem;
          font-size: 1.125rem;
        }
        
        .links-column ul {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .links-column a {
          color: rgba(255, 255, 255, 0.7);
          transition: var(--transition);
        }
        
        .links-column a:hover,
        .links-column a:focus {
          color: white;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .copyright {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
        }
        
        .legal-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .legal-links a {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.875rem;
          transition: var(--transition);
        }
        
        .legal-links a:hover,
        .legal-links a:focus {
          color: white;
        }
        
        /* Responsive styles */
        @media (max-width: 1024px) {
          .hero-content {
            flex-direction: column;
          }
          
          .hero-text {
            text-align: center;
            max-width: 100%;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .hero-form-container {
            width: 100%;
            max-width: 500px;
          }
          
          .about-content {
            flex-direction: column;
          }
          
          .about-images {
            width: 100%;
            min-height: 300px;
          }
        }
        
        @media (max-width: 768px) {
          .header {
            padding: 1rem 0;
          }
          
          .nav-toggle {
            display: block;
          }
          
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 300px;
            height: 100vh;
            background: white;
            flex-direction: column;
            align-items: flex-start;
            padding: 5rem 2rem;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            transition: right 0.3s ease;
          }
          
          .nav-menu.active {
            right: 0;
          }
          
          .hero-section {
            padding: 7rem 0 4rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .image-stack {
            min-height: 250px;
          }
          
          .main-image {
            width: 80%;
            height: 80%;
          }
          
          .secondary-image {
            width: 70%;
            height: 70%;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
          
          .legal-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .hero-form-container {
            padding: 1.5rem;
          }
          
          .newsletter-form .form-group {
            flex-direction: column;
          }
          
          .newsletter-form .cta-button {
            width: 100%;
          }
        }
      `}</style>
      
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <a href="#" className="logo">ConsultPro</a>
          <button 
            className="nav-toggle" 
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>
      
      <main>
        <HeroSection />
        <NotAverageRealtor />
        <WhyChooseUs />
        <AboutUs />
        <OurProjects />
        <HappyClients />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}