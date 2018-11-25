import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {tween, styler, easing} from 'popmotion';
import {interpolate} from 'polymorph-js';
import {CSSTransition} from 'react-transition-group';

class CollectionNav extends Component {
  constructor() {
    super();
    this.state = {
      isCollectionNavOpen: true
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
            d="M576.9,420.3c-81.1,76-112,93.1-144.1,165.8c-43.3,97.5-225.5,67.1-443.3,16.6L2.2,2l635.4-2
      C673.1,273.5,657.8,344.4,576.9,420.3L576.9,420.3"
            fillRule="evenodd"
          />
        </svg>
        <span className={this.state.isCollectionNavOpen ? 'navOpen' : ''} onClick={evt => this.toggleCollectionMenu()}>
          Shop
          <svg viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M138 69c0 38.108-30.892 69-69 69-38.108 0-69-30.892-69-69C0 30.892 30.892 0 69 0c38.108 0 69 30.892 69 69zm-69 62c34.242 0 62-27.758 62-62 0-34.242-27.758-62-62-62C34.758 7 7 34.758 7 69c0 34.242 27.758 62 62 62z"
              fill="#fff"
            />
            <path
              d="M49.483 61.571c3.86 0 6.991-3.13 6.991-6.99a6.991 6.991 0 1 0-6.991 6.99zM87.43 61.571a6.99 6.99 0 1 0 0-13.98 6.991 6.991 0 0 0 0 13.98zM68.456 98.94c-19.903 0-24-17.396-24-17.396h-9.952s6.145 26.678 33.952 26.678c27.514 0 33.952-26.678 33.952-26.678h-9.951s-4.098 17.395-24.001 17.395z"
              fill="#fff"
            />
          </svg>
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
