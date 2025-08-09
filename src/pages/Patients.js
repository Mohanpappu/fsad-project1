import React, { useState } from 'react';
import './Patients.css';

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showAddPatient, setShowAddPatient] = useState(false);
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' for newest first, 'asc' for oldest first
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    medicalHistory: ''
  });

  // Sample patient data
  const [patients] = useState([
    {
      id: 1,
      name: "John Smith",
      age: 45,
      gender: "Male",
      phone: "+1 234-567-8901",
      email: "john.smith@email.com",
      address: "123 Main St, City",
      medicalHistory: "Hypertension, Type 2 Diabetes",
      lastVisit: "2024-03-10",
      nextAppointment: "2024-04-15"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      age: 32,
      gender: "Female",
      phone: "+1 234-567-8902",
      email: "sarah.j@email.com",
      address: "456 Oak Ave, Town",
      medicalHistory: "Asthma, Allergies",
      lastVisit: "2024-03-05",
      nextAppointment: "2024-03-20"
    },
    {
      id: 3,
      name: "Michael Brown",
      age: 58,
      gender: "Male",
      phone: "+1 234-567-8903",
      email: "m.brown@email.com",
      address: "789 Pine Rd, Village",
      medicalHistory: "Arthritis, Heart Disease",
      lastVisit: "2024-02-28",
      nextAppointment: "2024-04-01"
    }
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
  };

  const handleCloseDetails = () => {
    setSelectedPatient(null);
  };

  const handleAddPatient = () => {
    setShowAddPatient(true);
  };

  const handleNewPatientChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({
      ...newPatient,
      [name]: value
    });
  };

  const handleSubmitNewPatient = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('New patient:', newPatient);
    setShowAddPatient(false);
    setNewPatient({
      name: '',
      age: '',
      gender: '',
      phone: '',
      email: '',
      address: '',
      medicalHistory: ''
    });
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
  };

  const filteredPatients = patients
    .filter(patient =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm)
    )
    .sort((a, b) => {
      const dateA = new Date(a.lastVisit);
      const dateB = new Date(b.lastVisit);
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="patients-container">
      <div className="patients-header">
        <h1>Patient Management</h1>
        <div className="patients-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <span className="search-icon">🔍</span>
          </div>
          <div className="sort-container">
            <button 
              className="sort-btn" 
              onClick={toggleSortOrder}
              title={sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
            >
              {sortOrder === 'desc' ? '↓ Newest First' : '↑ Oldest First'}
            </button>
          </div>
          <button className="add-patient-btn" onClick={handleAddPatient}>
            Add New Patient
          </button>
        </div>
      </div>

      <div className="patients-grid">
        {filteredPatients.map(patient => (
          <div
            key={patient.id}
            className="patient-card"
            onClick={() => handlePatientClick(patient)}
          >
            <div className="patient-info">
              <div className="patient-header">
                <h3>{patient.name}</h3>
                <span className="patient-id">ID: {patient.id}</span>
              </div>
              
              <div className="patient-basic-info">
                <div className="info-item">
                  <span className="info-label">Age:</span>
                  <span className="info-value">{patient.age}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Gender:</span>
                  <span className="info-value">{patient.gender}</span>
                </div>
              </div>

              <div className="patient-contact-info">
                <div className="info-item">
                  <span className="info-label">Phone:</span>
                  <span className="info-value">{patient.phone}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{patient.email}</span>
                </div>
              </div>

              <div className="patient-visit-info">
                <div className="info-item">
                  <span className="info-label">Last Visit:</span>
                  <span className="info-value">{patient.lastVisit}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Next Appointment:</span>
                  <span className="info-value">{patient.nextAppointment}</span>
                </div>
              </div>

              <div className="patient-medical-info">
                <span className="info-label">Medical History:</span>
                <p className="info-value medical-history">{patient.medicalHistory}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPatient && (
        <div className="patient-modal">
          <div className="patient-modal-content">
            <button className="close-btn" onClick={handleCloseDetails}>×</button>
            <h2>Patient Details</h2>
            <div className="patient-details-grid">
              <div className="detail-group">
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> {selectedPatient.name}</p>
                <p><strong>Age:</strong> {selectedPatient.age}</p>
                <p><strong>Gender:</strong> {selectedPatient.gender}</p>
                <p><strong>Phone:</strong> {selectedPatient.phone}</p>
                <p><strong>Email:</strong> {selectedPatient.email}</p>
                <p><strong>Address:</strong> {selectedPatient.address}</p>
              </div>
              <div className="detail-group">
                <h3>Medical Information</h3>
                <p><strong>Medical History:</strong> {selectedPatient.medicalHistory}</p>
                <p><strong>Last Visit:</strong> {selectedPatient.lastVisit}</p>
                <p><strong>Next Appointment:</strong> {selectedPatient.nextAppointment}</p>
              </div>
            </div>
            <div className="patient-actions">
              <button className="edit-btn">Edit Patient</button>
              <button className="schedule-btn">Schedule Appointment</button>
              <button className="history-btn">View Medical History</button>
            </div>
          </div>
        </div>
      )}

      {showAddPatient && (
        <div className="add-patient-modal">
          <div className="add-patient-content">
            <button className="close-btn" onClick={() => setShowAddPatient(false)}>×</button>
            <h2>Add New Patient</h2>
            <form onSubmit={handleSubmitNewPatient}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={newPatient.name}
                  onChange={handleNewPatientChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    name="age"
                    value={newPatient.age}
                    onChange={handleNewPatientChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={newPatient.gender}
                    onChange={handleNewPatientChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={newPatient.phone}
                  onChange={handleNewPatientChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={newPatient.email}
                  onChange={handleNewPatientChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={newPatient.address}
                  onChange={handleNewPatientChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Medical History</label>
                <textarea
                  name="medicalHistory"
                  value={newPatient.medicalHistory}
                  onChange={handleNewPatientChange}
                  rows="4"
                />
              </div>
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowAddPatient(false)}>
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Add Patient
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patients; 