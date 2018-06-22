import React, {Component} from 'react';
import {connect} from 'react-redux';
import Collection from './Collection';

import actions from '.././store/actions';

const CollectionList = ({collections, ...props}) => (
    <ul className="list pl0 archive mv0 pad-bottom">
        {collections.map(collection => (
            <li className="ph3 ph4-l">
                <Collection {...collection} {...props} />
            </li>
        ))}
    </ul>
);

export default connect(
    state => state,
    actions
)(CollectionList);
