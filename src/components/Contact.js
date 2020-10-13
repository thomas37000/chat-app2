import React from "react";

import "./Contact.css";
import PropTypes from 'prop-types';

function Contact(props) {
  const {image, firstName, lastName} = props;
  return (
    <div className="Contact">
      <img className="avatar" 
        src={image} 
        alt={firstName}  
      />

      <h4>{firstName} {lastName}</h4>
      {/* <h4>{`${firstName} ${lastName}`}</h4> */}
    </div>
  );
}

Contact.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Contact;