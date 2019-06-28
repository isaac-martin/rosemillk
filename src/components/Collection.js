import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import Loader from './Loader.js';

import {CSSTransition} from 'react-transition-group';

import Product from './Product';

const getCollection = (collections, handle) => {
  const collection = collections.find(collection => collection.handle === handle);
  return collection;
};


const renderProducts = (collections, products, handle, client) => {
  if (handle === 'all-products'){
    const filteredProducts = products.filter(prod => prod.productType !== 'Commission')
    return filteredProducts.map(product => {
      return <Product client={client} key={product.id.toString()} product={product} />;
    });
   
  }
  if (collections.length) {
    const collection = getCollection(collections, handle);

    return  collection.products.map(product => {
      return <Product client={client} key={product.id.toString()} product={product} />;
    });

  } 

  else {
    return <Loader />;
  }
}

class CollectionArchive extends Component {
  constructor() {
    super();
    this.state = {
      collection: []
    };
  }

  componentDidMount() {
    bodyCol(this.props.oldClass);
  }

  render() {
    const collections = this.props.collections
    const products = this.props.products
    const handle = this.props.match.params.handle 
    const client = this.props.client

    return (
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <div className="Product-wrapper">{renderProducts(collections, products, handle, client)}</div>
      </CSSTransition>
    );
  }
}

export default CollectionArchive;
