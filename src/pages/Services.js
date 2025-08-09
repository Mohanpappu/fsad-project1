import React, { useState } from 'react';
import './Services.css';
import AppointmentManager from '../components/AppointmentManager';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showDetails, setShowDetails] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showAppointmentManager, setShowAppointmentManager] = useState(false);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'primary', name: 'Primary Care' },
    { id: 'specialized', name: 'Specialized Care' },
    { id: 'emergency', name: 'Emergency Care' },
    { id: 'virtual', name: 'Virtual Care' }
  ];

  const services = [
    {
      id: 1,
      title: "Primary Care",
      category: "primary",
      description: "Comprehensive healthcare services for individuals and families, including routine check-ups, preventive care, and treatment of common illnesses.",
      icon: "🏥",
      features: [
        "Regular health check-ups",
        "Preventive care",
        "Chronic disease management",
        "Vaccinations"
      ],
      details: {
        duration: "30-60 minutes",
        availability: "Mon-Fri, 8AM-6PM",
        price: "Starting from $100",
        requirements: "Insurance card, ID, Medical history"
      }
    },
    {
      id: 2,
      title: "Specialized Treatment",
      category: "specialized",
      description: "Expert care for specific medical conditions with our team of specialized healthcare professionals.",
      icon: "👨‍⚕️",
      features: [
        "Specialist consultations",
        "Advanced diagnostics",
        "Treatment planning",
        "Follow-up care"
      ],
      details: {
        duration: "45-90 minutes",
        availability: "By appointment",
        price: "Starting from $200",
        requirements: "Referral, Medical records"
      }
    },
    {
      id: 3,
      title: "Emergency Care",
      category: "emergency",
      description: "24/7 emergency medical services with rapid response and immediate attention to critical conditions.",
      icon: "🚑",
      features: [
        "24/7 availability",
        "Rapid response",
        "Critical care",
        "Emergency transport"
      ],
      details: {
        duration: "Immediate",
        availability: "24/7",
        price: "Emergency rates apply",
        requirements: "None for emergencies"
      }
    },
    {
      id: 4,
      title: "Telemedicine",
      category: "virtual",
      description: "Virtual healthcare services allowing you to consult with healthcare providers from the comfort of your home.",
      icon: "💻",
      features: [
        "Online consultations",
        "Remote monitoring",
        "Digital prescriptions",
        "Health advice"
      ],
      details: {
        duration: "20-30 minutes",
        availability: "Mon-Sun, 8AM-8PM",
        price: "Starting from $75",
        requirements: "Internet connection, Device with camera"
      }
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedService(null);
  };

  const handleBookAppointment = () => {
    setShowAppointmentManager(true);
    setShowDetails(false);
  };

  const handleCloseAppointmentManager = () => {
    setShowAppointmentManager(false);
  };

  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Comprehensive healthcare solutions tailored to your needs</p>
        
        <div className="services-search-filter">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="services-grid">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className={`service-card ${activeService === service.id ? 'active' : ''}`}
            onClick={() => handleServiceClick(service)}
          >
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <div className="service-features">
              <ul>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button className="learn-more-btn">View Details</button>
          </div>
        ))}
      </div>

      {showDetails && selectedService && (
        <div className="service-details-modal">
          <div className="service-details-content">
            <button className="close-btn" onClick={handleCloseDetails}>×</button>
            <div className="service-details-header">
              <div className="service-icon">{selectedService.icon}</div>
              <h2>{selectedService.title}</h2>
            </div>
            <div className="service-details-body">
              <p className="description">{selectedService.description}</p>
              <div className="details-grid">
                <div className="detail-item">
                  <h4>Duration</h4>
                  <p>{selectedService.details.duration}</p>
                </div>
                <div className="detail-item">
                  <h4>Availability</h4>
                  <p>{selectedService.details.availability}</p>
                </div>
                <div className="detail-item">
                  <h4>Price</h4>
                  <p>{selectedService.details.price}</p>
                </div>
                <div className="detail-item">
                  <h4>Requirements</h4>
                  <p>{selectedService.details.requirements}</p>
                </div>
              </div>
              <div className="features-section">
                <h3>Key Features</h3>
                <ul>
                  {selectedService.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="service-details-footer">
              <button className="book-now-btn" onClick={handleBookAppointment}>Book Now</button>
              <button className="contact-btn">Contact Us</button>
            </div>
          </div>
        </div>
      )}

      {showAppointmentManager && selectedService && (
        <div className="appointment-modal">
          <div className="appointment-modal-content">
            <button className="close-btn" onClick={handleCloseAppointmentManager}>×</button>
            <AppointmentManager
              service={selectedService}
              onClose={handleCloseAppointmentManager}
            />
          </div>
        </div>
      )}

      <div className="services-cta">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to schedule your appointment or learn more about our services.</p>
        <button className="contact-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default Services; 