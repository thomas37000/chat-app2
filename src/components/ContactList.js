import React from 'react';
import Contact from './Contact';

const users =  
  [
    {
      id: 1,
      image : "https://randomuser.me/api/portraits/men/84.jpg",
      name : "nathan",
      status : false
    },
    {
      id: 2,
      image : "https://randomuser.me/api/portraits/women/44.jpg",
      name : "Sophie",
      status : true
    },
    {
      id: 3,
      image : "https://randomuser.me/api/portraits/men/74.jpg",
      name : "Drake",
      status : true
    },
    {
      id: 4,
      image : "https://randomuser.me/api/portraits/men/88.jpg",
      name : "Blake",
      status : true
    },
    {
      id: 5,
      image : "https://randomuser.me/api/portraits/men/8.jpg",
      name : "Mortimer",
      status : false
    },
    {
      id: 6,
      image : "https://randomuser.me/api/portraits/women/4.jpg",
      name : "Nathalie",
      status : true
    },
    {
      id: 7,
      image : "https://randomuser.me/api/portraits/women/67.jpg",
      name : "Julie",
      status : false
    }
  ];

const ContactList = () => (
  <>
    {users.map(user => (
      <Contact key={user.id} {...user} />
    ))}
  </>
);
export default ContactList;