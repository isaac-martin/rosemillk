import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import CollectionList from './Collections';
import CollectionArchive from './CollectionArchive';
import Products from './Products';
import Cart from './Cart';
import Header from './Header';

import {connect} from 'react-redux';
import actions from '.././store/actions';

class App extends Component {
    constructor() {
        super();
        // this.handleCartClose = this.handleCartClose.bind(this);
        // this.addVariantToCart = this.addVariantToCart.bind(this);
        // this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
        // this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    }

    componentWillMount() {
        const {setCollection} = this.props;

        // this.props.client.createCheckout({}).then(res => {
        //   this.setState({
        //     checkout: res
        //   });
        // });

        this.props.client.fetchAllCollections().then(res => {
            setCollection(res);
        });

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
                    <Route exact path="/collection/:handle" component={CollectionArchive} />
                    <Route exact path="/" component={CollectionList} />
                    {/* <CollectionList /> */}
                    {/* <Products products={this.state.products} addVariantToCart={this.addVariantToCart} /> */}
                    {/* <Header {...state} {...props} /> */}
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
