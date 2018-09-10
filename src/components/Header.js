import React, { Component } from 'react';
import Logo from '.././imgs/logo.png';
import { NavLink } from 'react-router-dom';
// import CollectionNav from './CollectionNav';

class Header extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <header className="black mb5 pa3 pl5 pr5 items-center justify-between flex">
        {/* <CollectionNav /> */}
        <NavLink to="/" className="logo">
          <img alt="logo" src={Logo} />
        </NavLink>
        <ul className="list flex justify-center pl0 flex-column">
          <li className="mh2">
            <NavLink exact to="/about" className="nav-link link biryani-black f2">
              About
        </NavLink>
          </li>
          <li className="mh2">
            <NavLink to="/contact" className="nav-link link biryani-black f2">
              Contact
        </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}



// class Header extends Component {
//   render() {
//     <header className="App__header">
//       <div>About Contact</div>
//       {!this.state.isCartOpen && (
//         <div className="App__view-cart-wrapper">
//           <button className="App__view-cart" onClick={this.handleToggleCart}>
//             Cart
//           </button>
//         </div>
//       )}
//     </header>;
//   }
// }

export default Header;
