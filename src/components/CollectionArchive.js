import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from './Product';

import Collection from './Collection';
import actions from '.././store/actions';

class CollectionArchive extends Component {
    componentDidMount() {
        const {setProducts, setCollectionID, attrs} = this.props;
        setCollectionID(attrs);
    }

    render() {
        return <div className="p3 ph4-l pad-bottom">Collection Title : </div>;
    }
}

export default connect(
    state => state,
    actions
)(CollectionArchive);
