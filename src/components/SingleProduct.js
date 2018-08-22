import React, {Component} from 'react';
import {connect} from 'react-redux';

import actions from '.././store/actions';

class SingleProduct extends Component {
  constructor() {
    super();
    this.addVariantToCart = this.addVariantToCart.bind(this);
  }
  componentDidMount() {
    const {attrs, client, setProductID} = this.props;
    setProductID(attrs.id.value);
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

  render() {
    const {attrs, product} = this.props;

    return (
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
            onClick={() => this.props.addVariantToCart(attrs.variants[0].id, attrs.variantQuantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
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
