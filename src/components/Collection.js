import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '.././store/actions';
import CollectionLink from './CollectionLink';
// import Client from 'shopify-buy';

const Collection = ({attrs: {title, handle, id, client, image}, ...props}) => (
  <CollectionLink
    image={image}
    id={id.value}
    handle={handle.value}
    title={title.value}
    client={client}
  />
);

export default connect(
  state => state,
  actions
)(Collection);
