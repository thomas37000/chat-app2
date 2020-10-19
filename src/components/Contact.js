import React from "react";

import "./Contact.css";
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      //status: false,
      online: props.online
    }
  }

  render() {
    return (
      <div className="Contact">
      <img className="avatar" src={this.props.image} alt={this.props.name} />

      <div className="status">
        <h4>{this.props.name}</h4>
        <div className={this.state.online ? "status-online" : "status-offline"} 
            onClick={event => {
              const newStatus = !this.state.online;
              this.setState({ online: newStatus });
            }}></div>
        <div className="status-text">{this.state.online ? "online" : "offline"}</div>
      </div>
    </div>
    );
  }
}


Contact.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;