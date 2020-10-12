import React from 'react';
import './Contact.css';

const image = "https://randomuser.me/api/portraits/men/84.jpg";
const name = "nathan";
const online = "online";

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" 
        src={image} alt="" />

      <div className="status">
        <h4>{name}</h4>
        <div className="status-online">
          
        </div>
        <div className="status-text">
          {online} 
        </div>
        
      </div>
  </div>
  );
}

export default Contact;