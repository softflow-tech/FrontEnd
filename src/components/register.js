import React, { Component } from "react";
import { Navbar, Nav  } from "react-bootstrap";
import { Link } from "react-router-dom";

import './css_components/style.css';

function Register() {
  return (
    <div >
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Link to="/login">Home</Link>
          </Nav>
        </Navbar>
      </div>
      <div className = 'col-sm-6 offset-sm-3'>
        <input className='form-control'  placeholder='User Name' type='text' />
        <input className='form-control'  placeholder='Pass Word' type='password' />
        <input className='form-control'  placeholder='Your First Name' type='text' />
        <input className='form-control'  placeholder='Your Last Name' type='text' />
        <input className='form-control'  placeholder='Your Email' type='email' />
        <button className='btn btn-primary' >Sign Up</button>
      </div>
    </div>
  );
}

export default Register;
