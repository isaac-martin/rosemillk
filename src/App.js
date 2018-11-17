import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CollectionArchive from './components/Collection';
import ProductView from './components/ProductView';
import About from './components/About';
// import Contact from './components/Contact';

import './css/default.scss';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: {lineItems: []},
      products: [],
      collections: [],
      shop: {}
    };

    this.handleCartToggle = this.handleCartToggle.bind(this);
    this.updateCheckout = this.updateCheckout.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {
    this.props.client.collection.fetchAllWithProducts().then(res => {
      this.setState({
        collections: res
      });
    });

    this.props.client.checkout.create().then(res => {
      this.setState({
        checkout: res
      });
    });

    this.props.client.product.fetchAll().then(res => {
      this.setState({
        products: res
      });
    });

    this.props.client.shop.fetchInfo().then(res => {
      this.setState({
        shop: res
      });
    });
  }

  addVariantToCart(variantId, quantity) {
    this.setState({
      isCartOpen: true
    });

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}];
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];

    return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res
      });
    });
  }

  handleCartToggle() {
    this.setState(prevState => ({
      isCartOpen: !prevState.isCartOpen
    }));
  }

  updateCheckout(res) {
    this.setState({
      checkout: res
    });
  }

  render() {
    return (
      <div className="App">
        <Header cartCount={this.state.checkout.lineItems} toggleCart={this.handleCartToggle} />
        <div className="mainArea">
          <Route exact path="/" render={props => <About {...props} />} />
          <Route exact path="/about" render={props => <About {...props} {...this.state} />} />
          <Route
            exact
            path="/product/:handle"
            render={props => <ProductView {...props} {...this.state} updateCheckout={this.updateCheckout} client={this.props.client} handleCartOpen={this.handleCartToggle} />}
          />
          <Route exact path="/collection/:handle" render={props => <CollectionArchive {...props} {...this.state} collections={this.state.collections} products={this.state.products} />} />
        </div>
        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          toggleCart={this.handleCartToggle}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
