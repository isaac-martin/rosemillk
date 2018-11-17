import React, {Component} from 'react';
import Logo from '.././imgs/rosemilk.jpg';
import {NavLink} from 'react-router-dom';
import '.././css/header.css';
import CollectionNav from './CollectionNav';

class Header extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    const cartCount = this.props.cartCount.length;
    return (
      <header className="black pa3 pl5 pr5 items-center justify-between flex">
        <CollectionNav />
        <div />
        <NavLink to="/" className="logo">
          <img alt="logo" src={Logo} />
        </NavLink>
        <ul className="list flex justify-center pl0 flex-row">
          <li className="mh2">
            <span onClick={this.props.toggleCart} className="nav-link link biryani-black f2">
              Cart {cartCount}
            </span>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
