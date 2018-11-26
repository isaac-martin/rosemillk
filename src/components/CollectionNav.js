import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {tween, styler, easing} from 'popmotion';
import {interpolate} from 'polymorph-js';
import {CSSTransition} from 'react-transition-group';

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
            fillRule="evenodd"
          />
        </svg>
        <svg id="container" viewBox="0 0 800 800" preserveAspectRatio="none">
          <path
            id="menu"
             d="M357.4,38.2c-83.3,78.1-198.6-54.4-231.6,20.3C81.3,158.7,80.1,39.9-12,619.4L1,2l653.1-2
      C656.5,71,440.6-39.7,357.4,38.2L357.4,38.2"
            fillRule="evenodd"
          />
        </svg>
        <span className={this.state.isCollectionNavOpen ? 'navOpen' : ''} onClick={evt => this.toggleCollectionMenu()}>
          Shop
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.67 107.25"><g data-name="Layer 2"><g data-name="Layer 1" stroke="#fff" strokeMiterlimit="10"><path d="M53.08 80.8c-20.85 0-25.42-18.37-25.46-18.55a1.5 1.5 0 1 1 2.92-.69c.16.66 4.11 16.24 22.54 16.24 7.78 0 13.93-2.74 18.3-8.14a22.81 22.81 0 0 0 4.24-8.1 1.5 1.5 0 1 1 2.92.69c-.04.18-4.61 18.55-25.46 18.55zM28.86 44.18a8.49 8.49 0 0 1 0-17 8.49 8.49 0 0 1 0 17zm0-3a5.49 5.49 0 0 0 0-11 5.49 5.49 0 0 0 0 11m48.95 2.25a8.49 8.49 0 1 1 8.52-8.49 8.46 8.46 0 0 1-8.55 8.49zm0-14a5.49 5.49 0 0 0 0 11 5.49 5.49 0 0 0 0-11z" fill="#fcfcfc"/><path d="M53.33 106.25a52.63 52.63 0 1 1 52.33-52.63 52.54 52.54 0 0 1-52.33 52.63zm0-102.82a50.2 50.2 0 1 0 49.9 50.2 50.11 50.11 0 0 0-49.9-50.2z" fill="#fff" strokeWidth="2"/></g></g></svg>
        </span>
        {this.state.isCollectionNavOpen && (
          <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
            <ul className="list flex justify-center pl0 flex-column">
              <li className="">
                <NavLink onClick={evt => this.toggleCollectionMenu()} exact to="/collection/all-products" className="nav-link link">
                  All Products
                </NavLink>
              </li>
              <li className="">
                <NavLink onClick={evt => this.toggleCollectionMenu()} exact to="/collection/jewelry" className="nav-link link ">
                  Jewelry
                </NavLink>
              </li>
              <li className="">
                <NavLink onClick={evt => this.toggleCollectionMenu()} exact to="/collection/cups" className="nav-link link">
                  Cups
                </NavLink>
              </li>
              <li className="">
                <NavLink onClick={evt => this.toggleCollectionMenu()} exact to="/collection/vases" className="nav-link link ">
                  Vases &amp; Planters
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
