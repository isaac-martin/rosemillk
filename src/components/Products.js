import React, {Component} from 'react';
import Product from './Product';
import {CSSTransition} from 'react-transition-group';

class Products extends Component {
  render() {
    let products = this.props.products.map(product => {
      return <Product client={this.props.client} key={product.id.toString()} product={product} />;
    });

    return (
      <div className="Product-wrapper">
        <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
          {/* <CSSTransition appear={true} enter={true} className="productList"> */}
          {products}
        </CSSTransition>
      </div>
    );
  }
}

export default Products;
