import "./Footer.css";
import React from 'react'
import {FaHome,FaPhone,FaMailBulk} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="location">
            <div className="left">
                <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div><p>68 Nugegoda</p>
                     <p>Colombo</p>
                     <p>Srilanka</p>
                    </div>
            </div>        
            </div>
            <div className="center">
                 <div>
                <p>
                <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                01142234760
                </p>
                <p>
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                imanthiwijeweera@gmail.com</p>
                </div>
                
            </div>
          
        
        <div className="right">
        <h4>About the E-Supporter</h4>
        <p> This is a E-learning web site with student monitoring features.</p>
        
    
        </div>
      </div>
      
    </div>
  )
}

export default Footer
