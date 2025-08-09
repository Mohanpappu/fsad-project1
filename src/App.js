import { useState, useEffect } from 'react';
import './App.css';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import DoctorsPage from './pages/DoctorsPage';
import FAQ from './pages/FAQ';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import Patients from './pages/Patients';
import Emergency from './pages/Emergency';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  useEffect(() => {
    window.setCurrentPage = setCurrentPage;
    
    return () => {
      delete window.setCurrentPage;
    };
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'admin':
        return <AdminPage />;
      case 'about':
        return <AboutUs />;
      case 'doctors':
        return <DoctorsPage />;
      case 'faq':
        return <FAQ />;
      case 'services':
        return <Services />;
      case 'blogs':
        return <Blogs />;
      case 'patients':
        return <Patients />;
      case 'emergency':
        return <Emergency />;
      case 'home':
      default:
        return (
          <div>
            <HomePage />
          </div>
        );
    }
  };

  return (
    <div className="App">
      {renderPage()}
      {currentPage !== 'home' && (
        <button 
          onClick={() => setCurrentPage('home')} 
          className="back-home-btn"
        >
          Back to Home
        </button>
      )}
      {currentPage === 'home' && (
        <div className="admin-access">
          <button onClick={() => setCurrentPage('admin')} className="admin-btn">
            Access Admin Dashboard
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
