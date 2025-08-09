import React, { useState } from 'react';
import './AppointmentManager.css';

const AppointmentManager = ({ service, onClose, onBook }) => {
  const [step, setStep] = useState('select'); // select, confirm, success
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    reason: '',
    notes: ''
  });
  const [existingAppointments, setExistingAppointments] = useState([]);

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleDateChange = (e) => {
    setAppointmentData({
      ...appointmentData,
      date: e.target.value
    });
  };

  const handleTimeSelect = (time) => {
    setAppointmentData({
      ...appointmentData,
      time
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({
      ...appointmentData,
      [name]: value
    });
  };

  const handleBookAppointment = () => {
    // Here you would typically make an API call to save the appointment
    const newAppointment = {
      id: Date.now(),
      service: service.title,
      ...appointmentData,
      status: 'scheduled'
    };
    
    setExistingAppointments([...existingAppointments, newAppointment]);
    setStep('success');
  };

  const handleCancelAppointment = (appointmentId) => {
    setExistingAppointments(
      existingAppointments.map(apt => 
        apt.id === appointmentId ? { ...apt, status: 'cancelled' } : apt
      )
    );
  };

  const handleRescheduleAppointment = (appointmentId) => {
    const appointment = existingAppointments.find(apt => apt.id === appointmentId);
    setAppointmentData({
      date: '',
      time: '',
      reason: '',
      notes: ''
    });
    setStep('select');
    // You would typically show a modal or form to select new date/time
  };

  const renderSelectStep = () => (
    <div className="appointment-form">
      <h3>Book {service.title}</h3>
      <div className="form-group">
        <label>Select Date</label>
        <input
          type="date"
          name="date"
          value={appointmentData.date}
          onChange={handleDateChange}
          min={new Date().toISOString().split('T')[0]}
          required
        />
      </div>
      
      <div className="form-group">
        <label>Select Time</label>
        <div className="time-slots">
          {timeSlots.map(time => (
            <button
              key={time}
              className={`time-slot ${appointmentData.time === time ? 'selected' : ''}`}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>Reason for Visit</label>
        <textarea
          name="reason"
          value={appointmentData.reason}
          onChange={handleInputChange}
          placeholder="Please describe your reason for visit"
          required
        />
      </div>

      <div className="form-group">
        <label>Additional Notes</label>
        <textarea
          name="notes"
          value={appointmentData.notes}
          onChange={handleInputChange}
          placeholder="Any additional information you'd like to share"
        />
      </div>

      <div className="form-actions">
        <button className="cancel-btn" onClick={onClose}>Cancel</button>
        <button 
          className="confirm-btn"
          onClick={() => setStep('confirm')}
          disabled={!appointmentData.date || !appointmentData.time || !appointmentData.reason}
        >
          Continue
        </button>
      </div>
    </div>
  );

  const renderConfirmStep = () => (
    <div className="confirmation-step">
      <h3>Confirm Your Appointment</h3>
      <div className="confirmation-details">
        <p><strong>Service:</strong> {service.title}</p>
        <p><strong>Date:</strong> {appointmentData.date}</p>
        <p><strong>Time:</strong> {appointmentData.time}</p>
        <p><strong>Reason:</strong> {appointmentData.reason}</p>
        {appointmentData.notes && (
          <p><strong>Notes:</strong> {appointmentData.notes}</p>
        )}
      </div>
      <div className="form-actions">
        <button className="back-btn" onClick={() => setStep('select')}>Back</button>
        <button className="confirm-btn" onClick={handleBookAppointment}>
          Confirm Booking
        </button>
      </div>
    </div>
  );

  const renderSuccessStep = () => (
    <div className="success-step">
      <div className="success-icon">✓</div>
      <h3>Appointment Booked Successfully!</h3>
      <p>Your appointment has been scheduled. You will receive a confirmation email shortly.</p>
      <div className="appointment-details">
        <p><strong>Service:</strong> {service.title}</p>
        <p><strong>Date:</strong> {appointmentData.date}</p>
        <p><strong>Time:</strong> {appointmentData.time}</p>
      </div>
      <button className="close-btn" onClick={onClose}>Close</button>
    </div>
  );

  const renderExistingAppointments = () => (
    <div className="existing-appointments">
      <h3>Your Appointments</h3>
      {existingAppointments.length === 0 ? (
        <p>No appointments scheduled</p>
      ) : (
        existingAppointments.map(appointment => (
          <div key={appointment.id} className="appointment-card">
            <div className="appointment-info">
              <h4>{appointment.service}</h4>
              <p>Date: {appointment.date}</p>
              <p>Time: {appointment.time}</p>
              <p>Status: <span className={`status ${appointment.status}`}>{appointment.status}</span></p>
            </div>
            {appointment.status === 'scheduled' && (
              <div className="appointment-actions">
                <button 
                  className="reschedule-btn"
                  onClick={() => handleRescheduleAppointment(appointment.id)}
                >
                  Reschedule
                </button>
                <button 
                  className="cancel-btn"
                  onClick={() => handleCancelAppointment(appointment.id)}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );

  return (
    <div className="appointment-manager">
      {step === 'select' && renderSelectStep()}
      {step === 'confirm' && renderConfirmStep()}
      {step === 'success' && renderSuccessStep()}
      {renderExistingAppointments()}
    </div>
  );
};

export default AppointmentManager; 