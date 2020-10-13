import React from "react";

import "./Contact.css";
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" 
        src={props.image} 
        alt={props.firstName}  
      />

        <h4>{props.firstName}</h4>
        <h4>{props.lastName}</h4>
    </div>
  );
}

Contact.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Contact;