import React, {Component} from 'react';
import {connect} from 'react-redux';
import Product from './Product';

// import Collection from './Collection';
import actions from '.././store/actions';

class CollectionArchive extends Component {
    componentDidMount() {
        const {setCollectionID, attrs, match} = this.props;
        setCollectionID(match.params.handle);
    }

    render() {
        const {hasPreviousPage, match, collectionID, location} = this.props;
        return (
            <div className="p3 ph4-l pad-bottom">
                Collection Title
                {/* {collectionID} */}
                {location.pathname}
                {/* {title.value} */}
                {/* {this.props.attrs.handle} */}
            </div>
        );
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
        ...getCollection(state.collections, props.match.params.handle)
    }),
    actions
)(CollectionArchive);

// export default connect(
//     state => state,
//     actions
// )(CollectionArchive);
