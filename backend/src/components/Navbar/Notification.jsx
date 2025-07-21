// components/Navbar/Notification.jsx
import React, { useState } from "react";
import "./Notification.css";

const Notification = () => {
  const [open, setOpen] = useState(false);

  const notifications = [
    "Property 101 rent due soon.",
    "Tenant John Smith submitted maintenance request.",
    "New property added: Elite Residency."
  ];

  return (
    <div className="icon-wrapper">
      <div className="icon" onClick={() => setOpen(!open)}>
        🔔
        <span className="badge">{notifications.length}</span>
      </div>
      {open && (
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
  );
};

export default Notification;
