import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CollectionList from './CollectionList';
import CollectionArchive from './CollectionArchive';
import Client, {Config} from 'shopify-buy';
import Products from './Products';
import Cart from './Cart';
import Header from './Header';
import About from './About';
import Contact from './Contact';

import {connect} from 'react-redux';
import actions from '.././store/actions';

const config = new Config({
  storefrontAccessToken: 'f1166bffb632479b45464b93f1b8f0fd',
  domain: 'myrosemilk.myshopify.com'
});

export const clients = new Client(config);

class App extends Component {
  constructor() {
    super();
    // this.handleCartClose = this.handleCartClose.bind(this);
    // this.addVariantToCart = this.addVariantToCart.bind(this);
    // this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    // this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  componentWillMount() {
    const {setCollection, setClient, client} = this.props;

    // client.createCheckout({}).then(res => {
    //   this.setState({
    //     checkout: res
    //   });
    // });

    setClient(clients);

    // console.log(clients);
    // console.log(client);

    // console.log(client);

    // client.fetchAllCollections().then(res => {
    //   setCollection(res);
    // });

    //   componentWillMount() {
    //     this.props.client.fetchAllCollections().then(res => {
    //       this.setState({
    //         collections: res
    //       });
    //     });
    //   }

    // this.props.client.fetchAllProducts().then(res => {
    //   this.setState({
    //     products: res
    //   });
    // });

    // this.props.client.fetchShopInfo().then(res => {
    //   this.setState({
    //     shop: res
    //   });
    // });
  }

  // addVariantToCart(variantId, quantity) {
  //   this.setState({
  //     isCartOpen: true
  //   });

  //   const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}];
  //   const checkoutId = this.state.checkout.id;

  //   return this.props.client.addLineItems(checkoutId, lineItemsToAdd).then(res => {
  //     this.setState({
  //       checkout: res
  //     });
  //   });
  // }

  // updateQuantityInCart(lineItemId, quantity) {
  //   const checkoutId = this.state.checkout.id;
  //   const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];

  //   return this.props.client.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
  //     this.setState({
  //       checkout: res
  //     });
  //   });
  // }

  // removeLineItemInCart(lineItemId) {
  //   const checkoutId = this.state.checkout.id;

  //   return this.props.client.removeLineItems(checkoutId, [lineItemId]).then(res => {
  //     this.setState({
  //       checkout: res
  //     });
  //   });
  // }

  // handleCartClose() {
  //   this.setState({
  //     isCartOpen: false
  //   });
  // }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <section className="pageWrapper">
            <Route exact path="/collection/:handle" component={CollectionArchive} />
            <Route exact path="/" component={CollectionList} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </section>
          {/* <CollectionList /> */}
          {/* <Products products={this.state.products} addVariantToCart={this.addVariantToCart} /> */}
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
