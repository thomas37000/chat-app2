import React from 'react';
import Contact from './Contact';

// const bart = {
//   image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
//   firstName: "Bart",
//   lastName: "Simpson"
// };

const Simpsons = [
  {  
    id: 1,
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  },
  {  
    id: 2,
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "Simpson"
  },
  {  
    id: 3,
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png",
    firstName: "Marge",
    lastName: "Simpson"
  },
  {  
    id: 4,
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png",
    firstName: "Maggie",
    lastName: "Simpson"
  },
  {  
    id: 5,
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png",
    firstName: "Lisa",
    lastName: "Simpson"
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