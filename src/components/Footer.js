import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '.././css/header.scss';
// import CollectionNav from './CollectionNav';

class Footer extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <footer className="footer">
        <ul className="list">
          <li>
            <NavLink exact to="/about" className="nav-link link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" className="nav-link link">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/policies" className="nav-link link">
              Shop Policies
            </NavLink>
          </li>
          <li>
            <a href="https://instagram.com/rosemi.lk" target="_blank" rel="noopener noreferrer" className="nav-link link">
              Instagram
            </a>
          </li>
        </ul>
        <p className="tc">&copy; {new Date().getFullYear()} Rosemilk</p>
      </footer>
    );
  }
}

export default Footer;
