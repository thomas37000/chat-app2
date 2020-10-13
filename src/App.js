import React from 'react';

import './App.css';
import Contact from './components/Contact';

const users =  
  [
    {
      image : "https://randomuser.me/api/portraits/men/84.jpg",
      name : "nathan",
      status : false
    },
    {
      image : "https://randomuser.me/api/portraits/women/44.jpg",
      name : "Sophie",
      status : true
    },
    {
      image : "https://randomuser.me/api/portraits/men/74.jpg",
      name : "Drake",
      status : true
    }
  ];

function App() {
  return (
    <div className="App">
      <header className="App-header">

      {
        users.map(user => 
        (             
          <Contact {...user} />
        ))  
      }
      </header>
    </div>
  );
}

export default App;
