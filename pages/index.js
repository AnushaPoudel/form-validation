import React, { useState } from 'react';

export default function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  const validateEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    if (!emailRegex.test(emailValue)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  
  const validatePassword = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (passwordValue.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }

    
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    if (strongPassword.test(passwordValue)) {
      setPasswordStrength('Strong');
    } else if (passwordValue.length >= 6) {
      setPasswordStrength('Weak');
    } else {
      setPasswordStrength('');
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError) {
      alert(`Email: ${email}\nPassword: ${password}`);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>

      
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={validateEmail}
            placeholder="Enter your email"
          />
          {emailError && <span className="error">{emailError}</span>}
        </div>

       
        <div className="input-group">
          <label>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={validatePassword}
            placeholder="Enter your password"
          />
          {passwordError && <span className="error">{passwordError}</span>}
          {passwordStrength && (
            <span className={`password-strength ${passwordStrength}`}>
              Password strength: {passwordStrength}
            </span>
          )}
        </div>

      
        <div className="input-group">
          <label>
            <input
              type="Checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            Show Password
          </label>
        </div>

      
        <button
          type="submit"
          disabled={emailError || passwordError || !email || !password}
        >
          Submit
        </button>
      </form>
    </div>
  );
};


