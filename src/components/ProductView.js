import React, {Component} from 'react';

const getSingleProduct = (products, handle) => {
  // here we grab the product that has a handle that matches	  // here we grab the product that has a handle that matches
  // our params from the url	  // our params from the url;
  const product = products.find(product => product.handle === handle);
  return product;
};

class SingleProduct extends Component {
  constructor() {
    super();

    this.state = {
      product: []
    };
    this.addVariantToCart = this.addVariantToCart.bind(this);
  }

  componentDidMount() {
    if (this.props.products) {
      this.setState({
        product: getSingleProduct(this.props.products, this.props.match.params.handle)
      });
    }
  }

  addVariantToCart(variantId, quantity) {
    this.props.handleCartOpen();
    const lineItemsToAdd = [{variantId: variantId, quantity: 1}];
    const checkoutId = this.props.checkout.id;
    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.props.updateCheckout(res);
    });
  }

  render() {
    const product = this.state.product;
    return product.attrs ? (
      <div className="ProductView">
        <div className="col-left pa3">
          <img src={product.attrs.images[0].src} className="featuredImg" />
        </div>
        <div className="col-right pa3">
          <h2 onClick={this.props.handleCartOpen}>{product.attrs.title.value}</h2>
          <p>{product.attrs.descriptionHtml.value}</p>

          {product.attrs.variants[0].price}
          <button className="Product__buy button" onClick={() => this.addVariantToCart(product.variants[0].id)}>
            Add to Cart
          </button>
        </div>
      </div>
    ) : (
      <div>Loading</div>
    );
  }
}

export default SingleProduct;
