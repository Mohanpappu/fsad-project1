import React, { useState } from 'react';
import './AdminPage.css';

function AdminPage() {
  
  const [stats, setStats] = useState({
    totalPatients: 1245,
    totalDoctors: 28,
    totalAppointments: 156,
    pendingAppointments: 43
  });

  
  
  const [recentAppointments, setRecentAppointments] = useState([
    { id: 1, patientName: 'John Smith', doctorName: 'Dr. Johnson', date: '2023-04-16', time: '09:30 AM', status: 'Completed' },
    { id: 2, patientName: 'Sarah Williams', doctorName: 'Dr. Parker', date: '2023-04-16', time: '10:15 AM', status: 'Completed' },
    { id: 3, patientName: 'Michael Brown', doctorName: 'Dr. Taylor', date: '2023-04-16', time: '11:00 AM', status: 'In Progress' },
    { id: 4, patientName: 'Emily Davis', doctorName: 'Dr. Smith', date: '2023-04-16', time: '01:30 PM', status: 'Scheduled' },
    { id: 5, patientName: 'Robert Wilson', doctorName: 'Dr. Anderson', date: '2023-04-17', time: '09:00 AM', status: 'Scheduled' }
  ]);

 
  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. Johnson', specialty: 'Cardiology', patients: 42, appointments: 16 },
    { id: 2, name: 'Dr. Smith', specialty: 'Neurology', patients: 38, appointments: 12 },
    { id: 3, name: 'Dr. Taylor', specialty: 'Pediatrics', patients: 56, appointments: 18 },
    { id: 4, name: 'Dr. Parker', specialty: 'Orthopedics', patients: 35, appointments: 10 },
    { id: 5, name: 'Dr. Anderson', specialty: 'Dermatology', patients: 44, appointments: 14 }
  ]);

  
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="admin-page">
      <div className="admin-sidebar">
        <div className="admin-logo">
          <h2>HealthCare</h2>
          <p>Admin Panel</p>
        </div>
        <nav className="admin-nav">
          <ul>
            <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
              <i className="icon dashboard-icon"></i>Dashboard
            </li>
            <li className={activeTab === 'appointments' ? 'active' : ''} onClick={() => setActiveTab('appointments')}>
              <i className="icon appointment-icon"></i>Appointments
            </li>
            <li className={activeTab === 'doctors' ? 'active' : ''} onClick={() => setActiveTab('doctors')}>
              <i className="icon doctor-icon"></i>Doctors
            </li>
            <li className={activeTab === 'patients' ? 'active' : ''} onClick={() => setActiveTab('patients')}>
              <i className="icon patient-icon"></i>Patients
            </li>
            <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
              <i className="icon settings-icon"></i>Settings
            </li>
          </ul>
        </nav>
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit"><i className="search-icon"></i></button>
          </div>
          <div className="admin-profile">
            <span className="notification-icon">
              <span className="notification-badge">3</span>
            </span>
            <div className="admin-avatar">
              <img src="https://via.placeholder.com/40" alt="Admin" />
            </div>
            <span className="admin-name">Admin User</span>
          </div>
        </div>

        {activeTab === 'dashboard' && (
          <div className="dashboard-content">
            <h1>Dashboard</h1>
            <div className="stats-container">
              <div className="stat-card">
                <div className="stat-card-inner">
                  <div className="stat-icon patients-icon"></div>
                  <div className="stat-data">
                    <h3>{stats.totalPatients}</h3>
                    <p>Total Patients</p>
                  </div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-card-inner">
                  <div className="stat-icon doctors-icon"></div>
                  <div className="stat-data">
                    <h3>{stats.totalDoctors}</h3>
                    <p>Doctors</p>
                  </div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-card-inner">
                  <div className="stat-icon appointments-icon"></div>
                  <div className="stat-data">
                    <h3>{stats.totalAppointments}</h3>
                    <p>Total Appointments</p>
                  </div>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-card-inner">
                  <div className="stat-icon pending-icon"></div>
                  <div className="stat-data">
                    <h3>{stats.pendingAppointments}</h3>
                    <p>Pending Appointments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="recent-appointments">
              <div className="section-header">
                <h2>Recent Appointments</h2>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Doctor</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentAppointments.map(appointment => (
                      <tr key={appointment.id}>
                        <td>{appointment.patientName}</td>
                        <td>{appointment.doctorName}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.time}</td>
                        <td>
                          <span className={`status-badge ${appointment.status.toLowerCase().replace(' ', '-')}`}>
                            {appointment.status}
                          </span>
                        </td>
                        <td>
                          <button className="action-btn edit-btn" title="Edit"></button>
                          <button className="action-btn delete-btn" title="Delete"></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="doctor-list">
              <div className="section-header">
                <h2>Doctors Overview</h2>
                <button className="view-all-btn">View All</button>
              </div>
              <div className="doctors-grid">
                {doctors.map(doctor => (
                  <div className="doctor-card" key={doctor.id}>
                    <div className="doctor-card-header">
                      <div className="doctor-avatar">
                        <img src={`https://via.placeholder.com/60?text=${doctor.name.charAt(0)}`} alt={doctor.name} />
                      </div>
                      <div className="doctor-info">
                        <h3>{doctor.name}</h3>
                        <p className="doctor-specialty">{doctor.specialty}</p>
                      </div>
                    </div>
                    <div className="doctor-stats">
                      <div className="doctor-stat">
                        <p className="stat-value">{doctor.patients}</p>
                        <p className="stat-label">Patients</p>
                      </div>
                      <div className="doctor-stat">
                        <p className="stat-value">{doctor.appointments}</p>
                        <p className="stat-label">Appointments</p>
                      </div>
                    </div>
                    <button className="view-profile-btn">View Profile</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div className="appointments-content">
            <h1>Appointments Management</h1>
            <p>This section would contain appointment management functionality.</p>
          </div>
        )}

        {activeTab === 'doctors' && (
          <div className="doctors-content">
            <h1>Doctors Management</h1>
            <p>This section would contain doctor management functionality.</p>
          </div>
        )}

        {activeTab === 'patients' && (
          <div className="patients-content">
            <h1>Patients Management</h1>
            <p>This section would contain patient management functionality.</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="settings-content">
            <h1>Settings</h1>
            <p>This section would contain system settings.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPage; 