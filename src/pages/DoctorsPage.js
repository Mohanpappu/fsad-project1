import React, { useState, useEffect } from 'react';
// Commented out FontAwesome imports until packages are installed
/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserMd, 
  faHospital, 
  faStethoscope, 
  faGraduationCap, 
  faCalendarCheck, 
  faBriefcaseMedical,
  faUserPlus,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faHandHoldingMedical
} from '@fortawesome/free-solid-svg-icons';
*/
import '../styles/DoctorsPage.css';

const DoctorsPage = () => {
  // State for active department filters
  const [activeDepartments, setActiveDepartments] = useState([]);
  
  // Sample data for doctors
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      department: 'Cardiology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. Johnson is a board-certified cardiologist with over 15 years of experience specializing in preventive cardiology and heart disease management. She is passionate about helping patients improve their heart health through lifestyle modifications and appropriate medical interventions.',
      education: 'MD from Johns Hopkins University, Cardiology Fellowship at Mayo Clinic',
      location: 'Main Hospital, 2nd Floor, Suite 210',
      phone: '(555) 123-4567',
      email: 'sarah.johnson@medcenter.com'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      department: 'Neurology',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. Chen is a leading neurologist specializing in stroke prevention and treatment. With his innovative approach to neurological care, he has helped countless patients recover from complex neurological conditions and improve their quality of life.',
      education: 'MD from Stanford University, Neurology Residency at UCSF',
      location: 'Neuroscience Building, 3rd Floor, Room 305',
      phone: '(555) 234-5678',
      email: 'michael.chen@medcenter.com'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      department: 'Pediatrics',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. Rodriguez is a compassionate pediatrician dedicated to providing comprehensive care for children from birth through adolescence. She believes in a holistic approach to pediatric medicine and works closely with families to ensure children receive the best possible care.',
      education: 'MD from Columbia University, Pediatric Residency at Children\'s Hospital of Philadelphia',
      location: 'Children\'s Wing, 1st Floor, Suite 110',
      phone: '(555) 345-6789',
      email: 'emily.rodriguez@medcenter.com'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic Surgeon',
      department: 'Orthopedics',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. Wilson is a skilled orthopedic surgeon who specializes in sports medicine and joint replacement surgery. He utilizes the latest minimally invasive techniques to help patients recover quickly and return to their active lifestyles with minimal downtime.',
      education: 'MD from Duke University, Orthopedic Surgery Residency at Hospital for Special Surgery',
      location: 'Orthopedic Center, Ground Floor, Suite G15',
      phone: '(555) 456-7890',
      email: 'james.wilson@medcenter.com'
    },
    {
      id: 5,
      name: 'Dr. Aisha Patel',
      specialty: 'Dermatologist',
      department: 'Dermatology',
      image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. Patel is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. She is known for her expertise in treating complex skin conditions and her personalized approach to patient care, ensuring each patient receives treatment tailored to their unique needs.',
      education: 'MD from University of Pennsylvania, Dermatology Residency at NYU',
      location: 'Outpatient Clinic, 4th Floor, Room 412',
      phone: '(555) 567-8901',
      email: 'aisha.patel@medcenter.com'
    },
    {
      id: 6,
      name: 'Dr. Robert Thompson',
      specialty: 'Psychiatrist',
      department: 'Psychiatry',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Dr. Thompson is a compassionate psychiatrist who focuses on mood disorders, anxiety, and PTSD. He takes a holistic approach to mental health treatment, combining evidence-based medication management with psychotherapy to help patients achieve optimal mental wellbeing.',
      education: 'MD from Yale University, Psychiatry Residency at Massachusetts General Hospital',
      location: 'Behavioral Health Building, 5th Floor, Suite 503',
      phone: '(555) 678-9012',
      email: 'robert.thompson@medcenter.com'
    },
    {
      id: 7,
      name: 'Dr. Nicole Anderson',
      specialty: 'Oncologist',
      department: 'Oncology',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      bio: 'Dr. Anderson is a medical oncologist with expertise in breast cancer and hematologic malignancies. She is dedicated to personalized cancer treatment and clinical research.',
      education: 'MD from University of Washington, Oncology Fellowship at Memorial Sloan Kettering',
      location: 'Cancer Center, Floor 2',
      phone: '(555) 789-0123',
      email: 'nicole.anderson@medcenter.com'
    },
    {
      id: 8,
      name: 'Dr. David Patel',
      specialty: 'Gastroenterologist',
      department: 'Gastroenterology',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
      bio: 'Dr. Patel specializes in digestive health and has expertise in treating disorders of the digestive tract, liver, and pancreas. He is skilled in advanced endoscopic procedures.',
      education: 'MD from UCLA, Gastroenterology Fellowship at Cleveland Clinic',
      location: 'Main Campus, Building A, Floor 2',
      phone: '(555) 890-1234',
      email: 'david.patel@medcenter.com'
    }
  ];

  // Extract unique departments for filtering
  const departments = [...new Set(doctors.map(doctor => doctor.department))];

  // Handle filter click
  const handleFilterClick = (department) => {
    if (activeDepartments.includes(department)) {
      setActiveDepartments(activeDepartments.filter(dep => dep !== department));
    } else {
      setActiveDepartments([...activeDepartments, department]);
    }
  };

  // Filter doctors based on active departments
  const filteredDoctors = activeDepartments.length > 0
    ? doctors.filter(doctor => activeDepartments.includes(doctor.department))
    : doctors;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="doctors-page">
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
            <li className="active"><a href="/doctors">Doctors</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <button className="login-btn">Login</button>
          <button className="contact-btn">Ask Service</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="doctors-hero">
        <h1>Meet Our Expert Medical Team</h1>
        <p>
          Our team of dedicated healthcare professionals is committed to providing 
          exceptional care with compassion and expertise.
        </p>
      </section>

      {/* Intro Section */}
      <section className="doctors-intro">
        <div className="intro-icon">
          {/* <FontAwesomeIcon icon={faUserMd} size="4x" /> */}
          <span className="icon-placeholder">👨‍⚕️</span>
        </div>
        <div className="intro-text">
          <h2>Exceptional Specialists, Compassionate Care</h2>
          <p>
            Our medical team consists of board-certified physicians across various specialties,
            each bringing years of experience and dedication to patient care. We pride ourselves
            on delivering personalized treatment plans tailored to each patient's unique needs,
            combining clinical excellence with compassionate care.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-container">
        <h3>Find Doctors by Department</h3>
        <div className="department-filters">
          {departments.map(department => (
            <button
              key={department}
              className={`filter-btn ${activeDepartments.includes(department) ? 'active' : ''}`}
              onClick={() => handleFilterClick(department)}
            >
              {department}
            </button>
          ))}
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="doctors-grid">
        {filteredDoctors.map(doctor => (
          <div className="doctor-card" key={doctor.id}>
            <div className="doctor-image">
              <img src={doctor.image} alt={doctor.name} />
            </div>
            <div className="doctor-info">
              <h3>{doctor.name}</h3>
              <div className="specialty">
                {/* <FontAwesomeIcon icon={faUserMd} /> */}
                <span>👨‍⚕️</span>
                <span>{doctor.specialty}</span>
              </div>
              <div className="department">
                {/* <FontAwesomeIcon icon={faHospital} /> */}
                <span>🏥</span>
                <span>{doctor.department}</span>
              </div>
              <div className="education">
                {/* <FontAwesomeIcon icon={faGraduationCap} /> */}
                <span>🎓</span>
                <span>{doctor.education}</span>
              </div>
              <p className="bio">{doctor.bio}</p>
              <div className="contact-info">
                <p>
                  {/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
                  <span>📍</span>
                  <span>{doctor.location}</span>
                </p>
                <p>
                  {/* <FontAwesomeIcon icon={faPhone} /> */}
                  <span>📞</span>
                  <span>{doctor.phone}</span>
                </p>
                <p>
                  {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                  <span>✉️</span>
                  <span>{doctor.email}</span>
                </p>
              </div>
              <button className="appointment-btn">
                {/* <FontAwesomeIcon icon={faCalendarCheck} /> */}
                <span>📅</span>
                Schedule Appointment
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Team CTA Section */}
      <section className="team-cta">
        <h2>Join Our Medical Team</h2>
        <p>
          We're always looking for talented healthcare professionals who are passionate about
          providing exceptional patient care and advancing medical excellence. If you're interested
          in joining our team, explore our career opportunities.
        </p>
        <button className="careers-btn">
          {/* <FontAwesomeIcon icon={faUserPlus} /> */}
          <span>👥</span>
          Explore Career Opportunities
        </button>
      </section>
    </div>
  );
};

export default DoctorsPage; 