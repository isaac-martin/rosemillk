import React, {Component} from 'react';
import LineItem from './LineItem';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    let line_items = this.props.checkout.lineItems.map(line_item => {
      return <LineItem updateQuantityInCart={this.props.updateQuantityInCart} removeLineItemInCart={this.props.removeLineItemInCart} key={line_item.id.toString()} line_item={line_item} />;
    });


    return (
      <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
        <div className="Cart-side" />
        <header className="Cart__header">
          <h2>Your cart</h2>
          <button onClick={this.props.toggleCart} className="Cart__close">
            ×
          </button>
        </header>
        <ul className="Cart__line-items">{line_items}</ul>
        <div className="Cart-info clearfix">
            <div className="covid">Due to COVID-19 I am only dropping packages off once a week + shipping may be delayed outside of my control</div>
          </div>
        <footer className="Cart__footer">
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {this.props.checkout.subtotalPrice}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes calculated at checkout if applicable</div>
          </div>
          <button className="Cart__checkout button" onClick={this.openCheckout}>
            Checkout
          </button>
        </footer>
      </div>
    );
  }
}

export default Cart;
