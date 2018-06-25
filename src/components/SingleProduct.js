import React, {Component} from 'react';
import {connect} from 'react-redux';

import actions from '.././store/actions';

class SingleProduct extends Component {
    componentDidMount() {
        const {attrs, client, setProductID} = this.props;
        setProductID(attrs.id.value);
    }

    render() {
        const {attrs} = this.props;

        return (
            <div className="SingleProduct">
                {attrs.title.value}
                {attrs.descriptionHtml.value}
                <img src={attrs.images[0].src} />
                {attrs.variants[0].price}
                {attrs.variants[0].available.value}
            </div>
        );
    }
}

const getSingleProduct = (products, handle) => {
    // here we grab the product that has a handle that matches
    // our params from the url
    const product = products.find(product => product.handle === handle);
    return product;
};

export default connect(
    (state, props) => ({
        ...state,
        ...getSingleProduct(state.products, props.match.params.handle)
    }),
    actions
)(SingleProduct);
