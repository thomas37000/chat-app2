import React from "react";

import "./Contact.css";
import PropTypes from 'prop-types';

// function Contact(props) {
//   const {image, firstName, lastName, star} = props;

const Contact = ({ image, firstName, lastName, star }) => {
  
  return (
    <div className={star ? "star" : "noStar"}>
      <img className="avatar" 
        src={image ? image : "https://www.drupal.org/files/issues/default-avatar.png"} 
        alt={firstName} 
      />

      <h4>{firstName} {lastName.toUpperCase()}</h4>
      {/* <h4>{`${firstName} ${lastName}`}</h4> */}
    </div>
  );
}

Contact.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Contact;