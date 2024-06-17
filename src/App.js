import React from 'react';
import './App.css';
import profilePic from './279788184_2564307133699575_6612088671312385060_n.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>About me</h1>
        <h1>Gallery</h1>
        <h1>Contact</h1>
      </header>
      <body className='App-body'>
      <img src={profilePic} alt="Profile" className="portfolio" />
      <div className='body-text'>
      <h1>Hi! I am Mako</h1>
      <p>Welcome to my page!</p>
      </div>
      
      
      </body>
    </div>
  );
}

export default App;
