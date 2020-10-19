import React from 'react';
import Contact from './Contact';

const users =  
  [
    {
      id: 1,
      image : "https://randomuser.me/api/portraits/men/84.jpg",
      name : "nathan",
      online : false
    },
    {
      id: 2,
      image : "https://randomuser.me/api/portraits/women/44.jpg",
      name : "Sophie",
      online : true
    },
    {
      id: 3,
      image : "https://randomuser.me/api/portraits/men/74.jpg",
      name : "Drake",
      online : true
    },
    {
      id: 4,
      image : "https://randomuser.me/api/portraits/men/88.jpg",
      name : "Blake",
      online : true
    },
    {
      id: 5,
      image : "https://randomuser.me/api/portraits/men/8.jpg",
      name : "Mortimer",
      online : false
    },
    {
      id: 6,
      image : "https://randomuser.me/api/portraits/women/4.jpg",
      name : "Nathalie",
      online : true
    },
    {
      id: 7,
      image : "https://randomuser.me/api/portraits/women/67.jpg",
      name : "Julie",
      online : false
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