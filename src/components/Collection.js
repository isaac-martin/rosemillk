import React, {Component} from 'react';
import Product from './Product';

class Collection extends Component {
  render() {
    let products = this.props.products.map(product => {
      return <Product client={this.props.client} key={product.id.toString()} product={product} />;
    });

    return <div className="Product-wrapper">{products}</div>;
  }
}

export default Collection;
