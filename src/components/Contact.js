import React from "react";

import "./Contact.css";
import PropTypes from 'prop-types';

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" src={props.image} alt={props.name} />

      <div className="status">
        <h4>{props.name}</h4>
        <div className={props.status ? "status-online" : "status-offline"}></div>
        <div className="status-text">{props.status ? "online" : "offline"}</div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;
