// src/components/RegisterForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navibar from './components/Navibar';
import"./login.css";

const Register = () => {
  let history = useNavigate();

  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    const { first_name, last_name, email, password, confirm_password } = data;

    if (!email || !password) {
      alert('Email and password are required');
      return;
    }

    if (password !== confirm_password) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    // Add password validation logic here if needed

    const sendData = {
      first_name,
      last_name,
      email,
      password,
      confirm_password,
    };

    axios.post('http://localhost:5000/register', sendData)
      .then((result) => {
        console.log(result);
        if (result.data.message === 'User registered successfully') {
          alert('Registration successful!');
          history('/Dashboard');
        } else {
          alert(result.data.message);
        }
      })
      .catch((error) => {
        console.error('Error during registration:', error);
      });
  };

  return (
    <div>
      <div>
        <Navibar />
      </div>
      <div className="container2" style={{ width: 500 , height: '434px', marginTop: '20px' }}>
        <form onSubmit={submitForm}>
          <div className="row">
            <div className="col-md-12 text-center registration-title">
              <h2>Registration Form</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">First Name</div>
            <div className="col-md-6">
              <input
                className="form-control"
                type="text"
                name="first_name"
                onChange={handleChange}
                value={data.first_name}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">Last Name</div>
            <div className="col-md-6">
              <input
                className="form-control"
                type="text"
                name="last_name"
                onChange={handleChange}
                value={data.last_name}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">Email</div>
            <div className="col-md-6">
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">Password</div>
            <div className="col-md-6">
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">Confirm Password</div>
            <div className="col-md-6">
              <input
                className="form-control"
                type="password"
                name="confirm_password"
                onChange={handleChange}
                value={data.confirm_password}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <button type="submit" className="btn btn-warning">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
