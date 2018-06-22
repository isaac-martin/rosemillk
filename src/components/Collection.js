import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import Client from 'shopify-buy';

const Collection = ({attrs: {title, handle, id}, ...props}) => (
    <Link id={id.value} to={`/collection/${handle.value}`} className="absolute absolute--fill z-3">
        <div>
            <div className="pv3 bb b--light-gray flex justify-between items-center">
                <h1 className="f6 mv0 black ttu biryani pr2"> Collection : {title.value}</h1>
            </div>
        </div>
    </Link>
);

export default Collection;
