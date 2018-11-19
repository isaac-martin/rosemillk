import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import {CSSTransition} from 'react-transition-group';

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
    this.oldClass = document.querySelector('body').classList[0];
  }

  componentDidMount() {
    bodyCol(this.oldClass);
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

    return (
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <div className="Product-wrapper">{products}</div>
      </CSSTransition>
    );
  }
}

export default CollectionArchive;
