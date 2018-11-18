import React, {Component} from 'react';
import Logo from '.././imgs/rosemilk.jpg';
import {NavLink} from 'react-router-dom';
import '.././css/header.scss';
import CollectionNav from './CollectionNav';

class Header extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    const cartCount = this.props.cartCount.length;
    return (
      <header className="pa3 pl5 pr5 items-center justify-between flex">
        <CollectionNav />
        <div />
        <NavLink to="/" className="logo">
          <img alt="logo" src={Logo} />
        </NavLink>
    
            <p onClick={this.props.toggleCart} className="cart-count nav-link link f2">
              Cart <span>{cartCount}</span>
            </p>
      
      </header>
    );
  }
}

export default Header;
