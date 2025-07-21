import React, { useState } from 'react';
import './Navbar.css';
import { FiSearch, FiBell, FiMessageSquare } from 'react-icons/fi';
import { RiArrowDownSLine } from 'react-icons/ri';
import property1 from "../../assets/images/myavatar.jpg";

const Navbar = () => {
  const [showMessages, setShowMessages] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const messages = [
    "New message from Owner A",
    "Query from Tenant B"
  ];

  const notifications = [
    "Property 101 rent due soon.",
    "Tenant submitted maintenance request.",
    "New property added",
    "Reminder: Lease expiring"
  ];

  return (
    <div className="luxury-navbar">
      <div className="search-bar">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="Search properties, tenants..." />
      </div>

      <div className="nav-right">
        {/* Message Icon */}
        <div className="nav-icon" onClick={() => {
          setShowMessages(!showMessages);
          setShowNotifications(false); // close other dropdown
        }}>
          <FiMessageSquare />
          <span className="notification-badge">{messages.length}</span>
          {showMessages && (
            <div className="dropdown">
              <h4>Messages</h4>
              <ul>
                {messages.map((msg, index) => (
                  <li key={index}>{msg}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Notification Icon */}
        <div className="nav-icon" onClick={() => {
          setShowNotifications(!showNotifications);
          setShowMessages(false); // close other dropdown
        }}>
          <FiBell />
          <span className="notification-badge">{notifications.length}</span>
          {showNotifications && (
            <div className="dropdown">
              <h4>Notifications</h4>
              <ul>
                {notifications.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* User Dropdown */}
        <div className="user-menu">
          <div
            className="user-avatar"
            style={{
              backgroundImage: `url(${property1})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <select>
            <option value="admin">Admin</option>
            <option value="signin">Sign-In</option>
            <option value="login">Log-In</option>
            <option value="guest">Guest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
