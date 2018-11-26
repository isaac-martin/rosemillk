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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 138"><g data-name="Layer 2"><g data-name="Layer 1"><path d="M138 69A69 69 0 1 1 69 0a69 69 0 0 1 69 69zm-69 62A62 62 0 1 0 7 69a62 62 0 0 0 62 62z" fill="#fff"/><path d="M68.46 100.44C47.61 100.44 43 82.07 43 81.89a1.5 1.5 0 0 1 2.92-.69c.16.66 4.11 16.24 22.54 16.24 7.78 0 13.93-2.74 18.3-8.14A22.81 22.81 0 0 0 91 81.2a1.5 1.5 0 0 1 2.92.69c-.05.18-4.61 18.55-25.46 18.55zM44.23 63.82a8.49 8.49 0 0 1 0-17 8.49 8.49 0 0 1 0 17zm0-3a5.49 5.49 0 0 0 0-11 5.49 5.49 0 0 0 0 11m48.95 2.25a8.49 8.49 0 1 1 8.52-8.49 8.46 8.46 0 0 1-8.55 8.49zm0-14a5.49 5.49 0 0 0 0 11 5.49 5.49 0 0 0 0-11z" fill="#fff"/></g></g></svg>

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
