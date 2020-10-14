import React from 'react';
import Contact from './Contact';

const Simpsons = [
  {  
    id: 1,
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson",
    star: true
    
  },
  {  
    id: 2,
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "Simpson",
    star: true
  },
  {  
    id: 3,
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
    firstName: "Marge",
    lastName: "Simpson",
    star: true
  },
  {  
    id: 4,
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
    firstName: "Maggie",
    lastName: "Simpson",
    star: true
  },
  {  
    id: 5,
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
    firstName: "Lisa",
    lastName: "Simpson",
    star: true
  },
  {  
    id: 7,
    image: "",
    firstName: "",
    lastName: "",
    star: false
  }
  
  
]

const Avatar = () => (
  <>
    {Simpsons.map(simpson => (
      <Contact key={simpson.id} {...simpson} />
    ))}
  </>
);
export default Avatar;