import React, { Component } from 'react';

import PropTypes from 'prop-types';

const users =  [
  {
    image : "https://randomuser.me/api/portraits/men/84.jpg",
    name : "nathan",
    online : false
  },
  {
    image : "https://randomuser.me/api/portraits/women/44.jpg",
    name : "Sophie",
    online : true
  },
  {
    image : "https://randomuser.me/api/portraits/men/74.jpg",
    name : "Drake",
    online : true
  }
];

const ContactList = () => (
  <div>
    {users.map(item => (
      <img src={item.image} alt={item.name} />
    ))}
  </div>
);

// class ContactList extends Component {
//   constructor(props) {
//     super(props);
  
//       props = {
//         users : [
//           {
//             image : "https://randomuser.me/api/portraits/men/84.jpg",
//             name : "nathan",
//             online : false
//           },
//           {
//             image : "https://randomuser.me/api/portraits/women/44.jpg",
//             name : "Sophie",
//             online : true
//           },
//           {
//             image : "https://randomuser.me/api/portraits/men/74.jpg",
//             name : "Drake",
//             online : true
//           }
//         ]
//       }
//     }
// }

// return (
//   <div className="Contact">
//     <img className="avatar" 
//       src={props.image} alt="" />

//     <div className="status">
//       <h4>{props.name}</h4>
//       <div className="status-online">
        
//       </div>
//       <div className="status-text">
//         {props.online} 
//       </div>
//     </div>
// </div>
// );

ContactList.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  online: PropTypes.string.isRequired
};

export default ContactList;