import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Lectures from './pages/Lectures';
import Participation from './pages/Participation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './pages/Welcome';
import Home from "./Home";
import Loging from "./Loging";
import Register from "./Register";
import Dashboard from "./Dashboard";
import ProtectedRoute from './ProtectedRoute';
import AdminRout from './AdminRout';  
import Quiz from './pages/Quiz';
import Feedback from './pages/Feedback';
import "./App.css";
import Footer from './components/Footer';

function App() {
  const bodyElement = document.querySelector('body');
  console.log(bodyElement); 
  
  return (
      
      <>
        <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loging" element={<Loging />} />
          <Route path="/dashboard" element={<ProtectedRoute ><Dashboard /></ProtectedRoute>} />
          <Route path="/welcome" element={<AdminRout ><Welcome/></AdminRout>}  />
          <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}  />
          <Route path="/lectures" element={<ProtectedRoute><Lectures/></ProtectedRoute>}/>
          <Route path="/quiz" element={<ProtectedRoute><Quiz/></ProtectedRoute>}  />
          <Route path="/participation" element={<ProtectedRoute><Participation/></ProtectedRoute>} />
          <Route path="/feedback" element={<ProtectedRoute><Feedback/></ProtectedRoute>}  />
          
        </Routes>
        </div>
        <Footer/>
        
    </>  
      
    
  );
}

export default App;