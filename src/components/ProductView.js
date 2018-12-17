import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import Loader from './Loader.js';
import {CSSTransition} from 'react-transition-group';

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
    bodyCol(this.props.oldClass);
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
    const id = e.target.dataset.thumb;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY - 90;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
  };

  render() {
    const product = this.state.product;
    return product && product.attrs ? (
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <div className="ProductView">
          <div className="col-left pa3 scrollable">
            {product.images.length > 1 && (
              <div className="thumbnails">
                {product.images.map((image, index) => {
                  return <img data-thumb={`image-${index}`} alt={image.altText} src={image.src} className={`thumbImage t-${index}`} onClick={e => this.changeImage(e)} />;
                })}
              </div>
            )}
            <div className="images">
              {product.images.map((image, index) => {
                return <img id={`image-${index}`} alt={image.altText} src={image.src} className={` t-${index}`} onClick={e => this.changeImage(e)} />;
              })}
            </div>
          </div>
          <div className="col-right pa3 sticky">
            <h2>{product.attrs.title.value}</h2>
            <div dangerouslySetInnerHTML={{__html: product.attrs.descriptionHtml.value}} />

            <p className="prodPrice">{product.attrs.variants[0].price}</p>
            {product.variants[0].available ? (
              <button className="Product__buy button" onClick={() => this.addVariantToCart(product.variants[0].id)}>
                Add to Cart
              </button>
            ) : (
              <h3 className="soldOut">
                Sorry Sold Out! To commission something similar contact us at <a href="mailto:hi@rosemi.lk">hi@rosemi.lk</a>
              </h3>
            )}
          </div>
        </div>
      </CSSTransition>
    ) : (
      <Loader />
    );
  }
}

export default SingleProduct;
