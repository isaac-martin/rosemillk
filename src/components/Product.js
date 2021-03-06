import React, {Component} from 'react';
import LazyLoad from 'react-lazyload';
import {bodyCol} from '../util.js';
import Loader from './Loader.js';
import {Link} from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
    this.oldClass = document.querySelector('body').classList[0];
  }

  componentDidMount() {
    bodyCol(this.oldClass);
  }

  render() {
    const product = this.props.product;
    const variantImage = product.images[0];
    const variant = product.variants[0];
    const available = variant.available;

    return (
      <LazyLoad offset={[-200, 0]} placeholder={<Loader />}>
        <div className={available ? `Product` : `Product isSoldOut`}>
          <Link to={`/products/${product.handle}`}>
            {product.images.length ? <img loading="lazy" src={variantImage.src} alt={`${product.title} product shot`} /> : null}
            <h5 className="Product__title">{product.title}</h5>
            <span className="Product__price">${variant.price}</span>
            <span className="soldOut-text">Sold Out</span>
          </Link>
        </div>
      </LazyLoad>
    );
  }
}

export default Product;
