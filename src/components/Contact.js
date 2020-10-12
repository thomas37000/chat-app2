import React from 'react';
import './Contact.css';

// const image = $.ajax({
//   url: 'https://randomuser.me/api/',
//   dataType: 'json',
//   success: function(data) {
//     console.log(data);
//   }
// });

function Contact() {
  return (
    <div className="Contact">
    
  {/* {image} */}
        <p>
      
        </p>
        <a href="/#">
        <img src="https://randomuser.me/api/" alt="" className="avatar"></img>
        </a>

        <a href="/#" className="status">
          a
        </a>
      
    </div>
  );
}

export default Contact;