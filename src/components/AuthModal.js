import React, { useState, useEffect } from 'react';
import './AuthModal.css';

function AuthModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEsc);
    
    // Prevent body scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!isLogin && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!isLogin && !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      
      // In a real app, you would handle the authentication here
      alert(isLogin 
        ? 'Login successful!' 
        : 'Account created successfully! You can now login.');
      
      if (!isLogin) {
        // Switch to login after successful signup
        setIsLogin(true);
        setFormData({
          ...formData,
          name: '',
          confirmPassword: '',
          phone: ''
        });
      } else {
        // Close modal after successful login
        onClose();
      }
    }, 1500);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setShowPassword(false);
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>×</button>
        
        <div className="auth-modal-header">
          <div className="auth-tabs">
            <button 
              className={`auth-tab ${isLogin ? 'active' : ''}`} 
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`auth-tab ${!isLogin ? 'active' : ''}`} 
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>
            {isLogin 
              ? 'Sign in to access your account and health services' 
              : 'Join us to get personalized health care services'}
          </p>
        </div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                <span className="input-icon user-icon"></span>
              </div>
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              <span className="input-icon email-icon"></span>
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <button 
                type="button"
                className={`password-toggle ${showPassword ? 'visible' : ''}`}
                onClick={togglePasswordVisibility}
              ></button>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                  />
                  <span className="input-icon lock-icon"></span>
                </div>
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <div className="input-wrapper">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                  <span className="input-icon phone-icon"></span>
                </div>
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </>
          )}
          
          {isLogin && (
            <div className="auth-options">
              <div className="remember-me">
                <input 
                  type="checkbox" 
                  id="rememberMe" 
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
            </div>
          )}
          
          <button 
            type="submit" 
            className={`auth-button ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <span className="spinner"></span>
            ) : (
              isLogin ? 'Login' : 'Create Account'
            )}
          </button>
        </form>
        
        <div className="auth-divider">
          <span>OR</span>
        </div>
        
        <div className="social-auth">
          <button className="social-button google">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/>
            </svg>
            Continue with Google
          </button>
          <button className="social-button facebook">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M20.9 2H3.1C2.5 2 2 2.5 2 3.1v17.8c0 .6.5 1.1 1.1 1.1h9.6v-7.8h-2.6v-3h2.6V9.2c0-2.6 1.6-4 3.9-4 1.1 0 2.1.1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.9h3l-.4 3h-2.6V22h5.1c.6 0 1.1-.5 1.1-1.1V3.1c0-.6-.5-1.1-1.1-1.1z"/>
            </svg>
            Continue with Facebook
          </button>
        </div>
        
        <div className="auth-footer">
          {isLogin ? (
            <p>Don't have an account? <button onClick={toggleAuthMode}>Sign Up</button></p>
          ) : (
            <p>Already have an account? <button onClick={toggleAuthMode}>Login</button></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal; 