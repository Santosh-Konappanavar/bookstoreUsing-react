import React from 'react';
import { FaUser } from 'react-icons/fa';
import Navbar from './navbar';

export default function Header() {
  return (
    <div className="header">
      <div className="header1">
        <h2>Bookstore CMS</h2>
        <Navbar />
      </div>
      <div className="login">
        <FaUser className="loginicon" />
      </div>
    </div>
  );
}
