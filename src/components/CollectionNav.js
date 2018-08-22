import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// import Collection from './Collection';

import actions from '.././store/actions';

// console.log(this.props.client);

class CollectionList extends Component {
  //   componentDidMount() {
  //     const {setCollection, client} = this.props;

  //     client.fetchAllCollections().then(res => {
  //       setCollection(res);
  //     });
  //   }

  render() {
    const {collections} = this.props;
    return (
      <nav className="menuProdList">
        {collections.map(collection => (
          <Link key={collection.id} to={`/collection/${collection.handle}`} className="">
            {collection.title}
          </Link>
        ))}
      </nav>
    );
  }
}

export default connect(
  state => state,
  actions
)(CollectionList);
