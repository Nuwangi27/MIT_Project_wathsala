// YourParentComponent.js
import React from 'react';
import StartButton from '../components/Startbutton';
import StopButton from '../components/Stopbutton';
import ResultButton from '../components/Resultbutton';
import Navibar from "../components/Navibar";
import "./About.css";
//import { classNames } from '@emotion/react';
const About = () => {
  const handleStartButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/Startfacetracking', {
        method: 'POST',
        
        headers: {
          'Content-Type': 'application/json',
          // You may include authentication headers if required
        },
        mode: 'cors', // Add this line
      });
      const data = await response.json();
      console.log('Response from backend:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleStopButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/stopfacetracking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You may include authentication headers if required
        },
      });
      const data = await response.json();
      console.log('Response from backend:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleResultButtonClick = async () => {
    try {
      const response = await fetch('http://localhost:5000/showchart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You may include authentication headers if required
        },
      });
      const data = await response.json();
      console.log('Response from backend:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <Navibar/>
      {/* Other components */}
      <div classNames="container3">
      <p className='title-welcome'> Face Detection Module</p>
        <div className='center2'>
         
          <StartButton onClick={handleStartButtonClick} />
          <StopButton onClick={handleStopButtonClick} />
          <ResultButton onClick={handleResultButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default About;
