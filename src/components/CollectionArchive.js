import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from './Product';

// import Collection from './Collection';
import actions from '.././store/actions';

class CollectionArchive extends Component {
  componentDidMount() {
    const {setCollectionID, attrs, client, setProducts} = this.props;
    setCollectionID(attrs.id.value);

    client.fetchCollectionWithProducts(attrs.id.value).then(res => {
      setProducts(res.products);
    });
  }

  render() {
    const {attrs, products} = this.props;
    let productArchive = products.map(product => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });

    return <div className="Product-wrapper">{productArchive}</div>;
  }
}

const getCollection = (collections, handle) => {
  // here we grab the mix that has a slug that matches
  // our params from the url
  const [collection = {}] = collections.filter(collection => collection.handle === handle);
  return collection;
};

export default connect(
  (state, props) => ({
    ...state,
    ...getCollection(state.collections, props.match.params.handle)
  }),
  actions
)(CollectionArchive);

// export default connect(
//     state => state,
//     actions
// )(CollectionArchive);
