import React, {Component} from 'react';
import Product from './Product';

const getCollection = (collections, handle) => {
  // here we grab the product that has a handle that matches	  // here we grab the product that has a handle that matches
  // our params from the url	  // our params from the url;
  const collection = collections.find(product => collection.handle === handle);
  return collection;
};

class Collection extends Component {
  componentDidMount() {
    bodyCol();
  }
  render() {
    const collection = getCollection(this.props.collections, this.props.match.params.handle);

    let products = collection.map(product => {
      return <Product client={this.props.client} key={product.id.toString()} product={product} />;
    });

    return <div className="Product-wrapper">{products}</div>;
  }
}

export default Collection;
