import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import '.././css/product.scss';
import { CSSTransition } from 'react-transition-group';


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
    bodyCol();
    if (this.props.products) {
      this.setState({
        product: getSingleProduct(this.props.products, this.props.match.params.handle)
      });
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.products !== prevProps.products) {
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

  changeImage = e => {
    const featured = document.querySelector('.featuredImg');
    featured.src = e.target.src;
  };

  render() {
    const product = this.state.product;
    return product && product.attrs ? (
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">

      <div className="ProductView">
        <div className="col-left pa3">
          <img alt={product.attrs.images[0].altText} src={product.attrs.images[0].src} className="featuredImg" />
        </div>
        <div className="col-right pa3">
          <h2>{product.attrs.title.value}</h2>
          <p>{product.attrs.descriptionHtml.value}</p>

          {product.attrs.variants[0].price}
          <button className="Product__buy button" onClick={() => this.addVariantToCart(product.variants[0].id)}>
            Add to Cart
          </button>
          {product.images.length > 1 && (
            <div className="thumbnails">
              {product.images.map((image, index) => {
                return <img alt={image.altText} src={image.src} className={`thumbImage t-${index}`} onClick={e => this.changeImage(e)} />;
              })}
            </div>
          )}
        </div>
      </div>
      </CSSTransition>
    ) : (
      <div>Loading</div>
    );
  }
}

export default SingleProduct;
