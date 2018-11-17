import React, {Component} from 'react';
import {bodyCol} from '../util.js';

import Product from './Product';

const getCollection = (collections, handle) => {
  const collection = collections.find(collection => collection.handle === handle);
  return collection;
};

class CollectionArchive extends Component {
  constructor() {
    super();
    this.state = {
      collection: []
    };
  }

  componentDidMount() {
    bodyCol();
  }

  render() {
    let products;
    if (this.props.collections.length) {
      const collection = getCollection(this.props.collections, this.props.match.params.handle);
      products = collection.products.map(product => {
        return <Product client={this.props.client} key={product.id.toString()} product={product} />;
      });
      // products = 'collection';
    } else {
      products = 'loading';
    }

    return <div className="Product-wrapper">{products}</div>;
  }
}

export default CollectionArchive;
