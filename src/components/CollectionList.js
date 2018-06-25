import React, {Component} from 'react';
import {connect} from 'react-redux';
import Collection from './Collection';

import actions from '.././store/actions';

// console.log(this.props.client);

class CollectionList extends Component {
    componentDidMount() {
        const {setCollection, collections, client} = this.props;

        client.fetchAllCollections().then(res => {
            setCollection(res);
        });
    }

    render() {
        const {collections, attrs, client, index} = this.props;
        return (
            <ul className="homeProdList list pl0 archive mv0 pad-bottom">
                {collections.map(collection => (
                    <li key={collection.id} className="ph3 ph4-l">
                        <Collection {...collection} {...client} />
                        {/* <Collection /> */}
                    </li>
                ))}
            </ul>
        );
    }
}

// const CollectionList = ({collections, client, ...props}) => (
//   <ul className="list pl0 archive mv0 pad-bottom">
//     {collections.map(collection => (
//       <li className="ph3 ph4-l">
//         <Collection {...collection} {...props} {...client} />
//       </li>
//     ))}
//   </ul>
// );

export default connect(
    state => state,
    actions
)(CollectionList);
