import React, {Component} from 'react';
import {connect} from 'react-redux';

import actions from '.././store/actions';

class SingleProduct extends Component {
  constructor() {
    super();
    this.addVariantToCart = this.addVariantToCart.bind(this);
  }

  componentDidMount() {
    const {attrs, setProductID} = this.props;
    setProductID(attrs.id.value);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.checkout !== prevProps.checkout) {
      this.state = {
        test: 'test',
        checkout: this.props.checkout
      };
    }
  }

  addVariantToCart(variantId) {
    this.setState({
      isCartOpen: true
    });

    const lineItemsToAdd = [{variantId, quantity: 1}];
    const checkoutId = this.props.checkout.id;

    return this.props.client.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res
      });
    });
  }

  render() {
    const {attrs} = this.props;

    return attrs ? (
      <div className="SingleProduct flex">
        <div className="col-left pa3">
          <img src={attrs.images[0].src} className="featuredImg" />
        </div>
        <div className="col-right pa3">
          <h2>{attrs.title.value}</h2>
          <p>{attrs.descriptionHtml.value}</p>

          {attrs.variants[0].price}
          <button
            className="Product__buy button"
            onClick={() => this.addVariantToCart(attrs.id.value)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    ) : (
      'Wed Up'
    );
  }
}

const getSingleProduct = (products, handle) => {
  // here we grab the product that has a handle that matches
  // our params from the url
  const product = products.find(product => product.handle === handle);
  return product;
};

export default connect(
  (state, props) => ({
    ...state,
    ...getSingleProduct(state.products, props.match.params.handle)
  }),
  actions
)(SingleProduct);
