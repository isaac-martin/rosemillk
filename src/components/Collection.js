import React, {Component} from 'react';
// import Client from 'shopify-buy';

class Collection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.setState({
            handle: this.props.collection.handle,
            image: this.props.collection.image.src
        });
    }

    render() {
        return (
            <div className="Collection" handle={this.state.handle}>
                {this.state.handle}
                <img src={this.state.image} />
            </div>
        );
    }
}

export default Collection;
