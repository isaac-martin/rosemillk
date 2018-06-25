import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

const Footer = props => (
  <footer className="black mb5 pa3 items-center justify-between flex">
    <p>
      &copy; 2018 rosemilk ceramics <br />
      <a href="mailto:hi@rosemi.lk">hi@rosemi.lk</a>
    </p>
    <ul className="list flex justify-center pl0 flex-column">
      <li className="mh2">
        <NavLink exact to="/terms" className="nav-link link biryani-black f2">
          Store Terms
        </NavLink>
      </li>
      <li className="mh2">
        <a
          className="nav-link link biryani-black f2"
          href="http://instagram.com/rosemi.lk"
          target="_blank"
        >
          @rosemi.lk
        </a>
      </li>
      <li className="mh2">
        <NavLink to="/" className="nav-link link biryani-black f2">
          Contact
        </NavLink>
      </li>
    </ul>
  </footer>
);

export default Footer;
