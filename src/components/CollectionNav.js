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
        <span onClick={evt => this.toggleCollectionMenu()}>Shop \</span>
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
