import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import React, { Component } from 'react'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1 className="logo">
          <a href="/home" className="navlink" aria-current="page">Krypto</a>
        </h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-aria-label="Toggle-navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li  className="nav-item">
              <a href="/about" className="navlink">About</a>
            </li>
            <li  className="nav-item">
              <a href="/services" className="navlink">Services</a>
            </li>
            <li  className="nav-item">
              <a href="/portfolio" className="navlink">Portfolio</a>
            </li>
            <li  className="nav-item">
              <a href="/contacts" className="navlink">Contacts</a>
            </li>

            <button type="button" className="btn btn-dark">Get Started</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;