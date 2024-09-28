// Navibar.js

import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navibar.css";

const Navibar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const userRoll = localStorage.getItem('user_roll');
  const userName = localStorage.getItem('user_name') || 'Guest';
  console.log("Username in local storage:", userName); 
  //console.log(userName)

  let history = useNavigate();

  
  const logOut = async () => {
    try {
        const response = await fetch('http://localhost:5000/logout', {
            method: 'POST',  // Use POST method for logout
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            localStorage.clear();  // Clear local storage on successful logout
            history('/loging'); // Redirect to login page upon successful logout
        } else {
            throw new Error('Failed to log out');
        }
    } catch (error) {
        console.error('Error logging out:', error.message);
    }
};
/*
const logOut = () => {
  localStorage.clear();
  history('/loging');
};

*/
   


  return (
    <Navbar expand="lg" className="Navbar">
      <Container>
      
        <Navbar.Brand href="/">E-supportor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isHomePage && <Nav.Link href="/register">Register</Nav.Link>}
            {isHomePage && <Nav.Link href="/loging">Loging</Nav.Link>}

            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            {userRoll === 'Admin' && <Nav.Link href="/welcome">Welcome</Nav.Link>}
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/lectures">Lectures</Nav.Link>
            <Nav.Link href="/quiz">Quiz</Nav.Link>
            <Nav.Link href="/participation">Participation</Nav.Link>
            <Nav.Link href="/feedback">Feedback</Nav.Link>
            <Nav.Link onClick={logOut} className="logout">
              Log Out
            </Nav.Link>
          </Nav>
          {localStorage.getItem('auth') === 'true' && (
            <Nav className="me-auto">
              
                Welcome, {userName}!  {userRoll}
              
            </Nav>
          )}
          
              
             
              
            
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navibar;
