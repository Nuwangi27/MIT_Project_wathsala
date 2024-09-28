import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navibar from "./components/Navibar";
import "./login.css";

const Loging = () => {
  const history = useNavigate();

  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const sendData = {
      email: user.email,
      password: user.password,
    };

    axios.post("http://localhost:5000/login", sendData)
      .then((result) => {
        localStorage.setItem("auth", true);
        const userRoll = result.data.user_roll;
        const userName = result.data.user_name;
        localStorage.setItem("user_roll", userRoll);
        localStorage.setItem("user_name", userName);
        
        if (result.data.user_roll === "Admin") {
          history('/welcome');
        } else {
          history('/dashboard');
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401) {
            alert("Invalid credentials. Please check your email and password.");
          } else if (error.response.status === 400) {
            alert("Email and password are required.");
          }
        }
        localStorage.setItem("auth", false);
        console.log(error.response.status);
      });
  };

  return (
    <div>
      <Navibar />
      <form onSubmit={submitForm}>
        <div className="container2" style={{ width: 500 }}>
          <div className="row">
            <div className="text-center col-md-12">
              <h1>Login Page</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ">Email:</div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={user.email}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ">Password:</div>
            <div className="col-md-6">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={user.password}
              />
            </div>
          </div>

          <div className="row">
            <div className="text-center col-md-12">
              <input
                type="Submit"
                name="submit"
                className="btn btn-success"
                value="Loging"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Loging;
