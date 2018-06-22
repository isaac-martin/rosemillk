import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '.././store/actions';
import CollectionLink from './CollectionLink';
// import Client from 'shopify-buy';

const Collection = ({attrs: {title, handle, id}, ...props}) => <CollectionLink id={id.value} handle={handle.value} title={title.value} />;

export default connect(
    state => state,
    actions
)(Collection);
