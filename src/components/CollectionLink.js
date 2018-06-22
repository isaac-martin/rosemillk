import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const CollectionLink = ({title, handle, id}) => (
    <Link to={`/collection/${handle}`} className="absolute absolute--fill z-3">
        <div className="pv3 bb b--light-gray flex justify-between items-center">
            <h1 className="f6 mv0 black ttu biryani pr2"> Collection : {title}</h1>
        </div>
    </Link>
);

export default CollectionLink;
