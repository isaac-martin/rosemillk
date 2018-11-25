import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import CollectionArchive from "./components/Collection";
import ProductView from "./components/ProductView";
import About from "./components/About";
import Policies from "./components/Policies";
import Contact from "./components/Contact";

import Instagram from "./components/Instagram";

import "./css/default.scss";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      collections: [],
      shop: {}
    };

    this.oldClass = document.querySelector("body").classList[0];
    this.handleCartToggle = this.handleCartToggle.bind(this);
    this.updateCheckout = this.updateCheckout.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }

  fetchInventory() {
    let query = `
      { shop { name } }
    `;
    fetch("https://myrosemilk.myshopify.com/admin/api/graphql", {
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": "1791e1adeded40d40bdc58573d2bf4b4",
        "Content-Type": "application/graphql",
      },
      body: JSON.stringify(query)
    })
    .then(res => res.json())
    .then(res => console.log(res.data));
  }
  componentWillMount() {
    this.fetchInventory();
    this.props.client.collection.fetchAllWithProducts().then(res => {
      this.setState({
        collections: res
      });
    });

    this.props.client.checkout.create().then(res => {
      this.setState({
        checkout: JSON.parse(localStorage.getItem("cart")) || res
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

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then(res => {
        this.setState(
          {
            checkout: res
          },
          () => localStorage.setItem("cart", JSON.stringify(res))
        );
      });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) }
    ];

    return this.props.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then(res => {
        this.setState(
          {
            checkout: res
          },
          () => localStorage.setItem("cart", JSON.stringify(res))
        );
      });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then(res => {
        this.setState(
          {
            checkout: res
          },
          () => localStorage.setItem("cart", JSON.stringify(res))
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
      () => localStorage.setItem("cart", JSON.stringify(res))
    );
  }

  render() {
    return (
      <div className="App">
        <Header
          cartCount={this.state.checkout.lineItems}
          toggleCart={this.handleCartToggle}
        />
        <div className="mainArea">
          <Route
            exact
            path="/"
            render={props => <Home oldClass={this.oldClass} {...props} />}
          />
          <Route
            exact
            path="/about"
            render={props => (
              <About oldClass={this.oldClass} {...props} {...this.state} />
            )}
          />
          <Route
            exact
            path="/policies"
            render={props => (
              <Policies oldClass={this.oldClass} {...props} {...this.state} />
            )}
          />
          <Route
            exact
            path="/contact"
            render={props => (
              <Contact oldClass={this.oldClass} {...props} {...this.state} />
            )}
          />
          <Route
            exact
            path="/product/:handle"
            render={props => (
              <ProductView
                oldClass={this.oldClass}
                {...props}
                {...this.state}
                updateCheckout={this.updateCheckout}
                client={this.props.client}
                handleCartOpen={this.handleCartToggle}
              />
            )}
          />
          <Route
            exact
            path="/collection/:handle"
            render={props => (
              <CollectionArchive
                oldClass={this.oldClass}
                {...props}
                {...this.state}
                collections={this.state.collections}
                products={this.state.products}
              />
            )}
          />
        </div>
        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          toggleCart={this.handleCartToggle}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
        <Instagram />
        <Footer />
      </div>
    );
  }
}

export default App;
