import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import CollectionArchive from './components/Collection';
import ProductView from './components/ProductView';
import About from './components/About';
import Policies from './components/Policies';
import Contact from './components/Contact';

import Instagram from './components/Instagram';

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

    this.oldClass = document.querySelector('body').classList[0];
    this.handleCartToggle = this.handleCartToggle.bind(this);
    this.updateCheckout = this.updateCheckout.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  createNewCheckout = () => {
    this.props.client.checkout.create().then(res => {
      this.setState({
        checkout: res
      });
    });
  };

  componentWillMount() {
    const checkoutId = JSON.parse(localStorage.getItem('cartID'));

    this.props.client.collection.fetchAllWithProducts().then(res => {
      this.setState({
        collections: res
      });
    });


    if (checkoutId) {
      this.props.client.checkout.fetch(checkoutId).then(res => {
        if (!res.completedAt) {
          this.setState({
            checkout: res
          });
        } else {
          this.createNewCheckout();
        }
      });
    } else {
      this.createNewCheckout();
    }

    this.props.client.product.fetchAll(100).then(res => {
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
      this.setState(
        {
          checkout: res
        },
        () => localStorage.setItem('cartID', JSON.stringify(res.id))
      );
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];

    return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState(
        {
          checkout: res
        },
        () => localStorage.setItem('cartID', JSON.stringify(res.id))
      );
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState(
        {
          checkout: res
        },
        () => localStorage.setItem('cartID', JSON.stringify(res.id))
      );
    });
  }

  handleCartToggle() {
    this.setState(prevState => ({
      isCartOpen: !prevState.isCartOpen
    }));
  }

  updateCheckout(res) {
    this.setState(
      {
        checkout: res
      },
      () => localStorage.setItem('cartID', JSON.stringify(res.id))
    );
  }

  render() {
    return (
      <div className="App">
        <Header cartCount={this.state.checkout.lineItems} toggleCart={this.handleCartToggle} />
        <div className="mainArea">
          <Route exact path="/" render={props => <Home oldClass={this.oldClass} {...props} />} />
          {/* <Route exact path="/" render={props => <CollectionArchive oldClass={this.oldClass} {...props} {...this.state} collections={this.state.collections} products={this.state.products}/>} /> */}

          <Route exact path="/about" render={props => <About oldClass={this.oldClass} {...props} {...this.state} />} />
          <Route exact path="/policies" render={props => <Policies oldClass={this.oldClass} {...props} {...this.state} />} />
          <Route exact path="/contact" render={props => <Contact oldClass={this.oldClass} {...props} {...this.state} />} />
          <Route exact path="/product/:handle" render={props => <ProductView oldClass={this.oldClass} {...props} {...this.state} updateCheckout={this.updateCheckout} client={this.props.client} handleCartOpen={this.handleCartToggle} />} />
          <Route exact path="/collection/:handle" render={props => <CollectionArchive oldClass={this.oldClass} {...props} {...this.state} collections={this.state.collections} products={this.state.products} />} />
        </div>
        <Cart checkout={this.state.checkout} isCartOpen={this.state.isCartOpen} toggleCart={this.handleCartToggle} updateQuantityInCart={this.updateQuantityInCart} removeLineItemInCart={this.removeLineItemInCart} />
        <Instagram />
        <Footer />
      </div>
    );
  }
}

export default App;
