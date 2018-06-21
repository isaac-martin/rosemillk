import React, {Component} from 'react';

class Header extends Component {
  render() {
    <header className="App__header">
      {!this.state.isCartOpen && (
        <div className="App__view-cart-wrapper">
          <button className="App__view-cart" onClick={() => this.setState({isCartOpen: true})}>
            Cart
          </button>
        </div>
      )}
      <div className="App__title">
        <h1>{this.state.shop.name}</h1>
        <h2>{this.state.shop.description}</h2>
      </div>
    </header>;
  }
}

export default Header;
