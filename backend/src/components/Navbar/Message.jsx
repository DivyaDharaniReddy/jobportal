// components/Navbar/Message.jsx
import React, { useState } from "react";
import "./Notification.css";

const Message = () => {
  const [open, setOpen] = useState(false);

  const messages = [
    "New message from Owner A",
    "Query from Tenant B",
    "Maintenance team update"
  ];

  return (
    <div className="icon-wrapper">
      <div className="icon" onClick={() => setOpen(!open)}>
        📨
        <span className="badge">{messages.length}</span>
      </div>
      {open && (
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
  );
};

export default Message;
