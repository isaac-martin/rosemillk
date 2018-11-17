import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import {Link} from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    bodyCol();
  }

  render() {
    const product = this.props.product;
    const variantImage = product.images[0];
    const variant = product.variants[0];

    return (
      <div className="Product">
        <Link to={`/product/${product.handle}`}>
          {product.images.length ? <img src={variantImage.src} alt={`${product.title} product shot`} /> : null}
          <h5 className="Product__title">{product.title}</h5>
          <span className="Product__price">${variant.price}</span>
        </Link>
      </div>
    );
  }
}

export default Product;
