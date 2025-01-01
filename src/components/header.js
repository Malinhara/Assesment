// Header.js
import React from 'react';
import '../styles/header.css'; // Import the external CSS
import Login from './login';

const Header = () => {
  return (
    <div className="header-container">
      {/* Top Navbar */}
      <div className="Topnavbar">
       <p className="good">good</p><span><p className="reads">reads</p></span>
    </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="left-section">
          <div className="trophy"></div>
          <div className="badge">
            <div className="badge-text">goodreads</div>
            <div className="badge-awards">CHOICE AWARDS</div>
            <div className="badge-year">2024</div>
          </div>
        </div>
        <div className="center-section">
          <h1 className="announcing">Announcing</h1>
          <h2 className="readers-favorite">Readers' Favorite</h2>
          <h2 className="books-of">Books of 2024</h2>
        </div>
        <Login />
      </div>

    

      <div className="star star-2"></div>
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
    </div>
  );
};

export default Header;
