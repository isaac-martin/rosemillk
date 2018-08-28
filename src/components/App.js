import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CollectionList from './CollectionList';
import CollectionArchive from './CollectionArchive';
import Client, {Config} from 'shopify-buy';
// import Products from './Products';
import SingleProduct from './SingleProduct';
// import Cart from './Cart';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Contact from './Contact';

import {connect} from 'react-redux';
import actions from '.././store/actions';

const config = new Config({
  storefrontAccessToken: 'f1166bffb632479b45464b93f1b8f0fd',
  domain: 'myrosemilk.myshopify.com'
});

const client = new Client(config);

class App extends React.Component {
  constructor() {
    super();
    // this.handleCartClose = this.handleCartClose.bind(this);
    // this.addVariantToCart = this.addVariantToCart.bind(this);
    // this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    // this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {
    const {setClient} = this.props;

    client.createCheckout({}).then(res => {
      this.setState({
        checkout: res
      });
    });

    setClient(client);

    client.shop.fetchInfo().then(res => {
      this.setState({
        shop: res
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <section className="pageWrapper">
            <Route exact path="/collection/:handle" component={CollectionArchive} />
            <Route
              exact
              path="/product/:handle"
              render={props => <SingleProduct {...props} {...this.state} />}
            />
            <Route exact path="/" render={props => <CollectionList {...props} {...this.state} />} />
            <Route exact path="/about" render={props => <About {...props} {...this.state} />} />

            <Route exact path="/contact" render={props => <Contact {...props} {...this.state} />} />
          </section>
          <Footer />
          {/* <Cart
            checkout={this.state.checkout}
            isCartOpen={this.state.isCartOpen}
            handleCartClose={this.handleCartClose}
            updateQuantityInCart={this.updateQuantityInCart}
            removeLineItemInCart={this.removeLineItemInCart}
          /> */}
        </div>
      </Router>
    );
  }
}
export default connect(
  state => state,
  actions
)(App);
