// Login.js
import React from 'react';
import '../styles/login.css'; // Import the external CSS

const Login = () => {
  return (
    <div className="login-panel">
      <h3 className="login-title">Discover & read more</h3>
      <button className="login-button amazon-button">
        Continue with Amazon
      </button>
      <button className="login-button apple-button">
        Continue with Apple
      </button>
      <button className="login-button email-button">
        Sign up with email
      </button>
      <div className="terms-text">
        By creating an account, you agree to the Goodreads 
        <a href="#">Terms of Service</a> and 
        <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
};

export default Login;
