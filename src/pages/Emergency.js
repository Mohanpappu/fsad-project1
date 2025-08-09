import React from 'react';
import './Emergency.css';

const Emergency = () => {
  return (
    <div className="emergency-page">
      <div className="emergency-header">
        <h1>Emergency Services</h1>
        <p>24/7 Emergency Care Available</p>
      </div>

      <div className="emergency-content">
        <div className="emergency-contact">
          <div className="contact-card">
            <h2>Emergency Hotline</h2>
            <div className="phone-number">911</div>
            <p>Available 24/7 for immediate assistance</p>
          </div>

          <div className="contact-card">
            <h2>Hospital Emergency</h2>
            <div className="phone-number">(555) 123-4567</div>
            <p>Direct line to our emergency department</p>
          </div>

          <div className="contact-card">
            <h2>Ambulance Service</h2>
            <div className="phone-number">(555) 987-6543</div>
            <p>Quick response ambulance service</p>
          </div>
        </div>

        <div className="emergency-info">
          <div className="info-section">
            <h2>What to Do in an Emergency</h2>
            <ul>
              <li>Stay calm and assess the situation</li>
              <li>Call emergency services immediately</li>
              <li>Follow the dispatcher's instructions</li>
              <li>Keep the patient comfortable while waiting</li>
              <li>Have important medical information ready</li>
            </ul>
          </div>

          <div className="info-section">
            <h2>Emergency Department Location</h2>
            <p>Our emergency department is located at the main entrance of the hospital.</p>
            <div className="location-details">
              <p><strong>Address:</strong> 123 Medical Center Drive</p>
              <p><strong>Entrance:</strong> Main Emergency Entrance (24/7)</p>
              <p><strong>Parking:</strong> Emergency parking available</p>
            </div>
          </div>
        </div>

        <div className="emergency-services">
          <h2>Available Emergency Services</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon trauma-icon"></div>
              <h3>Trauma Care</h3>
              <p>Immediate care for severe injuries</p>
            </div>
            <div className="service-item">
              <div className="service-icon cardiac-icon"></div>
              <h3>Cardiac Emergency</h3>
              <p>24/7 cardiac care and monitoring</p>
            </div>
            <div className="service-item">
              <div className="service-icon stroke-icon"></div>
              <h3>Stroke Care</h3>
              <p>Rapid response stroke treatment</p>
            </div>
            <div className="service-item">
              <div className="service-icon pediatric-icon"></div>
              <h3>Pediatric Emergency</h3>
              <p>Specialized care for children</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency; 