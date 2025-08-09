import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page">
      <header className="header">
        <div className="logo">
          <span className="logo-text">Health<span className="logo-highlight">Care</span></span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li className="active"><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pages">Pages</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="login-btn">Login</button>
          <button className="contact-btn">Ask Service</button>
        </div>
      </header>

      <div className="page-title-section">
        <h1>About Us</h1>
        <div className="breadcrumbs">
          <a href="/">Home</a> <span>/</span> <span>About Us</span>
        </div>
      </div>

      <section className="about-section">
        <div className="about-content">
          <div className="section-title">
            <h2>About Us</h2>
            <div className="title-underline"></div>
          </div>
          
          <p className="intro-paragraph">
            Welcome to our healthcare website, your one-stop destination for reliable and comprehensive health care information. We are committed to promoting wellness and providing valuable resources to empower you on your health journey.
          </p>
          
          <p>
            Explore our extensive collection of expertly written articles and guides covering a wide range of health topics. From understanding common medical conditions to tips for maintaining a healthy lifestyle, our content is designed to educate, inspire, and support you in making informed choices for your health.
          </p>
          
          <p>
            Discover practical health tips and lifestyle advice to optimize your physical and mental well-being. We believe that small changes can lead to significant improvements in your quality of life, and we're here to guide you on your path to a healthier and happier you.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-text">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-text">Expert Doctors</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15k+</div>
              <div className="stat-text">Happy Patients</div>
            </div>
          </div>

          <button className="learn-more-btn">Learn More About Us</button>
        </div>
        
        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Healthcare Professional" />
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-box">
            <div className="section-title">
              <h2>Our Mission</h2>
              <div className="title-underline"></div>
            </div>
            <p>
              Our mission is to provide accessible, high-quality healthcare information and services to our community. We strive to empower individuals with knowledge about their health, enabling them to make informed decisions and take control of their well-being.
            </p>
            <p>
              We are dedicated to promoting preventive care, early intervention, and holistic approaches to health. By combining medical expertise with compassionate care, we aim to improve the overall health and quality of life for all our patients.
            </p>
          </div>
          
          <div className="vision-box">
            <div className="section-title">
              <h2>Our Vision</h2>
              <div className="title-underline"></div>
            </div>
            <p>
              We envision a world where everyone has access to the healthcare resources they need to live healthy, fulfilling lives. We aspire to be leaders in healthcare innovation, constantly evolving to meet the changing needs of our patients and community.
            </p>
            <p>
              Through education, advocacy, and cutting-edge medical practices, we strive to create a healthcare system that is not only responsive to illness but proactive in maintaining wellness. Our vision extends beyond treating symptoms to fostering a culture of health and well-being.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-title center">
            <h2>Our Expert Team</h2>
            <div className="title-underline"></div>
            <p>Meet our team of experienced healthcare professionals dedicated to your well-being</p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Dr. Sarah Johnson" />
              </div>
              <h3>Dr. Sarah Johnson</h3>
              <p className="member-role">Chief Medical Officer</p>
              <p className="member-desc">With over 15 years of experience in internal medicine, Dr. Johnson leads our medical team with expertise and compassion.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Dr. Michael Chen" />
              </div>
              <h3>Dr. Michael Chen</h3>
              <p className="member-role">Cardiologist</p>
              <p className="member-desc">Specializing in cardiovascular health, Dr. Chen brings innovative approaches to heart disease prevention and treatment.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Dr. Rebecca Martinez" />
              </div>
              <h3>Dr. Rebecca Martinez</h3>
              <p className="member-role">Nutritionist</p>
              <p className="member-desc">Dr. Martinez helps patients develop healthy eating habits and nutritional plans tailored to their unique health needs.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <span className="logo-text">Health<span className="logo-highlight">Care</span></span>
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
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Doctors</a></li>
              <li><a href="#">Appointments</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><a href="#">Primary Care</a></li>
              <li><a href="#">Emergency Care</a></li>
              <li><a href="#">Surgery</a></li>
              <li><a href="#">Pediatrics</a></li>
              <li><a href="#">Mental Health</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="contact-info">
              <li className="address">123 Healthcare Ave, Medical City</li>
              <li className="phone">+91 8050725121</li>
              <li className="email">srinandu@gmail.com</li>
              <li className="hours">Mon-Fri: 8:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HealthCare. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutUs; 