import React, { Component } from "react";
import { Navbar, Nav  } from "react-bootstrap";
import { Link } from "react-router-dom";


function Register() {
  return (
    <div className = 'col-sm-6 offset-sm-3'>
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Link to="/login">Home</Link>
          </Nav>
        </Navbar>
      </div>
      <form method="POST">
        <label>User Name</label>
      </form>
    </div>
  );
}

export default Register;
