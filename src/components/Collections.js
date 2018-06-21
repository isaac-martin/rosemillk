import React, {Component} from 'react';
import {connect} from 'react-redux';
import Collection from './Collection';

import actions from '.././store/actions';

const CollectionList = ({collections, setCollection}) => (
  console.log(collections),
  (
    <ul className="list pl0 archive mv0 pad-bottom">
      {/* {collections.map(collection => (
        <li className="ph3 ph4-l">
          <div id={collection.id} slug={collection.handle}>
            <div className="pv3 bb b--light-gray flex justify-between items-center">
              <h1 className="f6 mv0 black ttu biryani pr2">{collection.title}</h1>
            </div>
          </div>
        </li>
      ))} */}
    </ul>
  )
);

export default connect(
  state => state,
  actions
)(CollectionList);
