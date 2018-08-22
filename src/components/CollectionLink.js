import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const CollectionLink = ({title, handle, image, id}) => (
    <Link key={id} to={`/collection/${handle}`} className="">
        <div className="homeProdWrap pv3 flex justify-between items-end">
            <h1 className="f1 mv0 black pr2">{title}</h1>
            <div className="collectionHomeImg">
                <img src={image.src} alt={image.altText} />
            </div>
        </div>
    </Link>
);

export default CollectionLink;