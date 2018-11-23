import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {tween, styler, easing} from 'popmotion';
import {interpolate} from 'polymorph-js';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class CollectionNav extends Component {
  constructor() {
    super();
    this.state = {
      isCollectionNavOpen: false
    };
  }

  menuAnim = () => {
    const shape = styler(document.querySelector('#menu'));
    let morph;
    if (this.state.isCollectionNavOpen) {
      morph = interpolate(['#open', '#closed'], {precision: 4});
    } else {
      morph = interpolate(['#closed', '#open'], {precision: 4});
    }

    tween({
      duration: 700,
      ease: easing.easeInOut
    })
      .pipe(morph)
      .start(shape.set('d'));
  };

  toggleCollectionMenu = () => {
    this.menuAnim();
    this.setState(prevState => ({
      isCollectionNavOpen: !prevState.isCollectionNavOpen
    }));
  };
  render() {
    return (
      <nav className="collectionNav f3">
        <svg id="shape-defs">
          <path
            d="M357.4,38.2c-83.3,78.1-198.6-54.4-231.6,20.3C81.3,158.7,80.1,39.9-12,619.4L1,2l653.1-2
      C656.5,71,440.6-39.7,357.4,38.2L357.4,38.2"
            id="closed"
          />
          <path
            id="open"
            stroke="#979797"
            fill="#D8D8D8"
            d="M576.9,420.3c-81.1,76-112,93.1-144.1,165.8c-43.3,97.5-225.5,67.1-443.3,16.6L2.2,2l635.4-2
      C673.1,273.5,657.8,344.4,576.9,420.3L576.9,420.3"
            fill-rule="evenodd"
          />
        </svg>
        <svg id="container" viewBox="0 0 800 800" preserveAspectRatio="none">
          <path
            id="menu"
            d="M357.4,38.2c-83.3,78.1-198.6-54.4-231.6,20.3C81.3,158.7,80.1,39.9-12,619.4L1,2l653.1-2
      C656.5,71,440.6-39.7,357.4,38.2L357.4,38.2"
          />
        </svg>
        <span className={this.state.isCollectionNavOpen ? 'navOpen' : ''} onClick={evt => this.toggleCollectionMenu()}>
          Shop
          <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 21C19.6 13.8 16 10 14.5 7C13 4 18 0.833333 22 1C26 1.16667 32.737 8.16767 29.5 11C25.5 14.5 17.8333 34.6667 19.5 35.5C21.1667 36.3333 23.1 29.7 27.5 28.5C33 27 47 48.5 34.5 39.5C24.5 32.3 19.6667 41.8333 18.5 47.5C19.0429 47.9937 17.7724 47.1206 17.5429 46.9937C-0.373505 37.0842 -4.37985 25.9557 5.00001 22.5C11.4 20.5 14 29 12.5 29.5C11 30 9.00001 26.4 7.00001 30C4.50001 34.5 16.5 39.5 15 38.5C13.5 37.5 16 30 18 21Z"
              fill="white"
            />
          </svg>
        </span>
        {this.state.isCollectionNavOpen && (
          <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
            <ul className="list flex justify-center pl0 flex-column">
              <li className="">
                <NavLink exact to="/collection/all-products" className="nav-link link">
                  All Products
                </NavLink>
              </li>
              <li className="">
                <NavLink exact to="/collection/jewelry" className="nav-link link ">
                  Jewelry
                </NavLink>
              </li>
              <li className="">
                <NavLink exact to="/collection/cups" className="nav-link link">
                  Cups
                </NavLink>
              </li>
              <li className="">
                <NavLink exact to="/collection/vases" className="nav-link link ">
                  Vases
                </NavLink>
              </li>
              <li className="">
                <NavLink exact to="/collection/planters" className="nav-link link ">
                  Planters
                </NavLink>
              </li>
            </ul>
          </CSSTransition>
        )}
      </nav>
    );
  }
}

export default CollectionNav;
