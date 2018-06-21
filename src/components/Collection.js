import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import Client from 'shopify-buy';

const Collection = ({title, handle, id, ...props}) => (
  <Link to={`/collection/${handle}`} className="absolute absolute--fill z-3">
    <div id={id}>
      <div className="pv3 bb b--light-gray flex justify-between items-center">
        <h1 className="f6 mv0 black ttu biryani pr2"> Collection : {title}</h1>
      </div>
    </div>
  </Link>
);

export default Collection;
