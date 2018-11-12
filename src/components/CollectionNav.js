import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class CollectionNav extends Component {
  constructor() {
    super();
    this.state = {
      isCollectionNavOpen: false
    };
  }

  toggleCollectionMenu = () => {
    this.setState(prevState => ({
      isCollectionNavOpen: !prevState.isCollectionNavOpen
    }));
  };
  render() {
    return (
      <nav className="collectionNav f3">
        <span onClick={evt => this.toggleCollectionMenu()}>Shop \</span>
        {this.state.isCollectionNavOpen && (
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
              <NavLink exact to="/collection/mugs" className="nav-link link">
                Mugs
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
        )}
      </nav>
    );
  }
}

export default CollectionNav;
