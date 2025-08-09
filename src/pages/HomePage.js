import React, { useState } from 'react';
import './HomePage.css';
import AuthModal from '../components/AuthModal';

function HomePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    department: '',
    message: ''
  });
  
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Add state for changing pages
  const handleNavigation = (page) => {
    // Find the parent App component's setState for currentPage
    if (typeof window !== 'undefined' && window.setCurrentPage) {
      window.setCurrentPage(page);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    alert('Appointment request submitted successfully! We will contact you shortly to confirm your appointment.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      department: '',
      message: ''
    });
  };

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">
          <span className="logo-text">Medi<span className="logo-highlight">Care</span></span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li className="active"><a href="#home">Home</a></li>
            <li><a href="#" onClick={() => handleNavigation('about')}>About Us</a></li>
            <li><a href="#" onClick={() => handleNavigation('services')}>Services</a></li>
            <li><a href="#" onClick={() => handleNavigation('doctors')}>Doctors</a></li>
            <li><a href="#" onClick={() => handleNavigation('blogs')}>Blog</a></li>
            <li><a href="#" onClick={() => handleNavigation('patients')}>Patients</a></li>
            <li><a href="#" onClick={() => handleNavigation('faq')}>FAQs</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button 
            className="login-btn" 
            onClick={() => setShowAuthModal(true)}
          >
            Login
          </button>
          <button 
            className="contact-btn"
            onClick={() => handleNavigation('emergency')}
          >
            Emergency
          </button>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Your Health is Our Priority</h1>
          <p>
            Welcome to MediCare Hospital, where excellence meets compassion. 
            Our state-of-the-art facility and expert medical professionals are dedicated to providing 
            the highest quality healthcare services to our community.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Emergency Care</span>
            </div>
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">Expert Doctors</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Specialties</span>
            </div>
          </div>
        </div>

        <div className="hospital-info-container">
          <div className="hospital-info">
            <h2>Welcome to Excellence in Healthcare</h2>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon quality-icon"></div>
                <h3>Quality Care</h3>
                <p>State-of-the-art facilities and advanced medical technology for accurate diagnosis and treatment.</p>
              </div>
              <div className="info-item">
                <div className="info-icon expertise-icon"></div>
                <h3>Medical Expertise</h3>
                <p>Team of highly qualified specialists with extensive experience in their respective fields.</p>
              </div>
              <div className="info-item">
                <div className="info-icon care-icon"></div>
                <h3>Patient Care</h3>
                <p>Compassionate and personalized care ensuring the best possible patient experience.</p>
              </div>
              <div className="info-item">
                <div className="info-icon innovation-icon"></div>
                <h3>Innovation</h3>
                <p>Continuous adoption of latest medical advancements and treatment methodologies.</p>
              </div>
            </div>
            <div className="cta-buttons">
              <button className="primary-btn" onClick={() => handleNavigation('services')}>Our Services</button>
              <button className="secondary-btn" onClick={() => handleNavigation('doctors')}>Meet Our Doctors</button>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon doctor-icon"></div>
          <h3>Expert Medical Team</h3>
          <p>Our hospital is staffed with highly qualified and experienced medical professionals dedicated to providing the best care.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon facility-icon"></div>
          <h3>Advanced Technology</h3>
          <p>State-of-the-art medical equipment and modern facilities ensuring accurate diagnosis and effective treatment.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon emergency-icon"></div>
          <h3>24/7 Emergency Care</h3>
          <p>Round-the-clock emergency services with rapid response teams ready to provide immediate medical attention.</p>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="why-choose-image">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="Hospital Facility" />
        </div>
        
        <div className="why-choose-content">
          <h2>Why Choose MediCare Hospital</h2>
          <p>
            At MediCare Hospital, we combine medical expertise with compassionate care to provide 
            the best possible healthcare experience for our patients and their families.
          </p>
          
          <div className="service-features">
            <div className="service-feature">
              <div className="service-icon intensive-icon"></div>
              <div className="service-text">
                <h3>Comprehensive Care</h3>
                <p>Full range of medical services from primary care to specialized treatments</p>
              </div>
            </div>
            
            <div className="service-feature">
              <div className="service-icon ambulance-icon"></div>
              <div className="service-text">
                <h3>Quick Response</h3>
                <p>Rapid emergency response and efficient patient care delivery</p>
              </div>
            </div>
            
            <div className="service-feature">
              <div className="service-icon medical-icon"></div>
              <div className="service-text">
                <h3>Patient-Centered</h3>
                <p>Personalized care plans and attention to individual patient needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <span className="logo-text">Medi<span className="logo-highlight">Care</span></span>
            </div>
            <p>Providing exceptional healthcare services with compassion and expertise for a healthier community.</p>
            <div className="social-icons">
              <a href="#" className="social-icon facebook-icon"></a>
              <a href="#" className="social-icon twitter-icon"></a>
              <a href="#" className="social-icon instagram-icon"></a>
              <a href="#" className="social-icon linkedin-icon"></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#" onClick={() => handleNavigation('about')}>About Us</a></li>
              <li><a href="#" onClick={() => handleNavigation('services')}>Services</a></li>
              <li><a href="#" onClick={() => handleNavigation('doctors')}>Doctors</a></li>
              <li><a href="#" onClick={() => handleNavigation('blogs')}>Blog</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="#">Emergency Care</a></li>
              <li><a href="#">Surgery</a></li>
              <li><a href="#">Pediatrics</a></li>
              <li><a href="#">Cardiology</a></li>
              <li><a href="#">Neurology</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li className="address">123 Medical Center Drive, Healthcare City</li>
              <li className="phone">Emergency: +1 (555) 123-4567</li>
              <li className="email">info@medicare-hospital.com</li>
              <li className="hours">24/7 Emergency Services Available</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MediCare Hospital. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </div>
  );
}

export default HomePage; 