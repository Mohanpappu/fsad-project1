import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (id) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'services', name: 'Our Services' },
    { id: 'appointments', name: 'Appointments' },
    { id: 'insurance', name: 'Insurance & Billing' },
    { id: 'covid', name: 'COVID-19 Information' }
  ];

  const faqs = {
    general: [
      {
        id: 'general-1',
        question: 'What are your operating hours?',
        answer: 'Our healthcare center is open Monday to Friday from 8:00 AM to 8:00 PM. We have limited hours on weekends, with Saturday services from 9:00 AM to 5:00 PM and Sunday services from 10:00 AM to 3:00 PM for urgent care only.'
      },
      {
        id: 'general-2',
        question: 'How can I contact customer support?',
        answer: 'You can reach our customer support team by calling +91 8050725121 during our business hours, or by emailing srinandu@gmail.com. We typically respond to email inquiries within 24 hours on business days.'
      },
      {
        id: 'general-3',
        question: 'Do you have parking facilities?',
        answer: 'Yes, we provide free parking for all patients and visitors in our designated parking area. Handicap accessible parking spots are available near the main entrance.'
      },
      {
        id: 'general-4',
        question: 'Is your facility wheelchair accessible?',
        answer: 'Yes, our entire facility is wheelchair accessible with ramps, elevators, and specially designed restrooms to accommodate patients with mobility challenges.'
      }
    ],
    services: [
      {
        id: 'services-1',
        question: 'What medical services do you offer?',
        answer: 'We offer a comprehensive range of medical services including primary care, emergency care, specialized surgeries, pediatrics, mental health counseling, nutrition consulting, and preventive health screenings.'
      },
      {
        id: 'services-2',
        question: 'Do you offer telemedicine services?',
        answer: 'Yes, we provide telemedicine consultations for both new and existing patients. You can schedule a virtual appointment through our website or by calling our appointment line.'
      },
      {
        id: 'services-3',
        question: 'Are laboratory services available on-site?',
        answer: 'Yes, we have a fully equipped laboratory on-site that provides blood work, urinalysis, and other diagnostic tests with quick turnaround times for results.'
      },
      {
        id: 'services-4',
        question: 'Do you offer mental health services?',
        answer: 'Yes, our mental health department provides counseling, therapy, psychiatric evaluations, and medication management for various mental health conditions.'
      }
    ],
    appointments: [
      {
        id: 'appointments-1',
        question: 'How do I schedule an appointment?',
        answer: 'You can schedule an appointment by calling our appointment line at +91 8050725121, using our online appointment booking system on our website, or visiting our facility in person to speak with our scheduling staff.'
      },
      {
        id: 'appointments-2',
        question: 'What should I bring to my first appointment?',
        answer: 'For your first appointment, please bring a valid ID, your insurance card, a list of current medications, your medical history information, and any recent test results or medical records relevant to your visit.'
      },
      {
        id: 'appointments-3',
        question: 'How do I cancel or reschedule an appointment?',
        answer: 'To cancel or reschedule an appointment, please contact us at least 24 hours in advance by calling our appointment line or through your patient portal. Late cancellations may incur a fee.'
      },
      {
        id: 'appointments-4',
        question: 'Do you accept walk-in patients?',
        answer: 'Yes, we accept walk-in patients for urgent care needs. However, patients with appointments will be prioritized. For non-urgent matters, we recommend scheduling an appointment to minimize your wait time.'
      }
    ],
    insurance: [
      {
        id: 'insurance-1',
        question: 'What insurance plans do you accept?',
        answer: 'We accept most major insurance plans including Medicare, Medicaid, Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealthcare. Please contact our billing department to verify if we accept your specific insurance plan.'
      },
      {
        id: 'insurance-2',
        question: 'What if I don\'t have insurance?',
        answer: 'We offer self-pay options with transparent pricing for patients without insurance. We also have financial assistance programs available for eligible patients. Our financial counselors can help you understand your options.'
      },
      {
        id: 'insurance-3',
        question: 'How can I get a copy of my bill?',
        answer: 'You can request a copy of your bill by contacting our billing department at +91 8050725121 or by logging into your patient portal where you can view and download your statements.'
      },
      {
        id: 'insurance-4',
        question: 'Do you offer payment plans?',
        answer: 'Yes, we offer flexible payment plans for patients who need assistance managing their healthcare costs. Please speak with our billing department to discuss your options and set up a plan that works for you.'
      }
    ],
    covid: [
      {
        id: 'covid-1',
        question: 'Do you offer COVID-19 testing?',
        answer: 'Yes, we offer both PCR and rapid antigen COVID-19 testing. PCR test results are typically available within 24-48 hours, while rapid test results are available within 15-30 minutes.'
      },
      {
        id: 'covid-2',
        question: 'Do you provide COVID-19 vaccinations?',
        answer: 'Yes, we provide COVID-19 vaccinations as recommended by health authorities. Please check our website or call our vaccine hotline for the latest information on availability and eligibility.'
      },
      {
        id: 'covid-3',
        question: 'What COVID-19 safety protocols do you have in place?',
        answer: 'We maintain strict safety protocols including enhanced cleaning procedures, mask requirements, social distancing in waiting areas, temperature checks upon entry, and separate areas for patients with respiratory symptoms.'
      },
      {
        id: 'covid-4',
        question: 'Can I get a doctor\'s note for COVID-19 related absence?',
        answer: 'Yes, our physicians can provide documentation for COVID-19 related absences from work or school following an evaluation, either in-person or through a telemedicine appointment.'
      }
    ]
  };

  return (
    <div className="faq-page">
      <header className="header">
        <div className="logo">
          <span className="logo-text">Health<span className="logo-highlight">Care</span></span>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/pages">Pages</a></li>
            <li><a href="/blog">Blog</a></li>
            <li className="active"><a href="/faq">FAQs</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="login-btn">Login</button>
          <button className="contact-btn">Ask Service</button>
        </div>
      </header>

      <div className="page-title-section">
        <h1>Frequently Asked Questions</h1>
        <div className="breadcrumbs">
          <a href="/">Home</a> <span>/</span> <span>FAQs</span>
        </div>
      </div>

      <section className="faq-section">
        <div className="container">
          <div className="section-title center">
            <h2>How Can We Help You?</h2>
            <div className="title-underline"></div>
            <p>Find answers to the most common questions about our healthcare services</p>
          </div>

          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search for questions..." 
            />
            <button className="search-btn">Search</button>
          </div>

          <div className="faq-content">
            <div className="category-nav">
              {categories.map(category => (
                <button 
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="faq-list">
              {faqs[activeCategory].map(faq => (
                <div key={faq.id} className="faq-item">
                  <div 
                    className={`faq-question ${expandedQuestions[faq.id] ? 'active' : ''}`}
                    onClick={() => toggleQuestion(faq.id)}
                  >
                    <h3>{faq.question}</h3>
                    <span className="toggle-icon">{expandedQuestions[faq.id] ? '−' : '+'}</span>
                  </div>
                  {expandedQuestions[faq.id] && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="cant-find-answer">
            <h3>Couldn't find what you're looking for?</h3>
            <p>Our customer support team is here to help with any other questions you may have.</p>
            <div className="contact-options">
              <a href="tel:+918050725121" className="contact-option phone">
                <div className="icon">📞</div>
                <div className="info">
                  <h4>Call Us</h4>
                  <p>+91 8050725121</p>
                </div>
              </a>
              <a href="mailto:srinandu@gmail.com" className="contact-option email">
                <div className="icon">✉️</div>
                <div className="info">
                  <h4>Email Us</h4>
                  <p>srinandu@gmail.com</p>
                </div>
              </a>
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
              <li><a href="#">FAQs</a></li>
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

export default FAQ; 