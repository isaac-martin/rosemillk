import React, {Component} from 'react';
import Collection from './Collection';

class Collections extends Component {
    // componentWillMount() {
    //     this.props.client.fetchAllCollections().then(res => {
    //         this.setState({
    //             collections: res
    //         });
    //     });
    // }
    render() {
        // let collections = this.props.collections.map(collection => {
        //     return <Collection slug={collection.handle} collection={collection} />;
        // });

        // return <div className="Collections-wrapper">{collections}</div>;
        return <div className="Collections-wrapper">test</div>;
    }
}

export default Collections;
