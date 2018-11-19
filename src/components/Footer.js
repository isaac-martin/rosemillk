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
      <footer className="white pa3 pl5 pr5 items-center justify-between flex f3">
        <ul className="list flex justify-center pl0 flex-row">
          <li className="mh2">&copy; {new Date().getFullYear()} Rosemilk |</li>
          <li className="mh2">
            <NavLink exact to="/about" className="nav-link link">
              About |
            </NavLink>
          </li>
          <li className="mh2">
            <NavLink exact to="/terms" className="nav-link link">
              Terms &amp; Conditions |
            </NavLink>
          </li>
          <li className="mh2">
            <NavLink exact to="/privacy-policy" className="nav-link link">
              Privacy Policy |
            </NavLink>
          </li>
          <li className="mh2">
            <a href="https://instagram.com/rosemi.lk" target="_blank" className="nav-link link">
              Instagram
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
