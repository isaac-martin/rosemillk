import React, {Component} from 'react';
import Product from './Product';

class Products extends Component {
    // componentDidMount() {
    //     this.props.client.fetchAllProducts().then(res => {
    //         this.setState({
    //             products: res
    //         });
    //     });
    // }
    render() {
        // let products = this.props.products.map(product => {
        //     return <Product addVariantToCart={this.props.addVariantToCart} checkout={this.props.checkout} key={product.id.toString()} product={product} />;
        // });

        // return <div className="Product-wrapper">{products}</div>;
        return <div className="Product-wrapper">Product</div>;
    }
}

export default Products;
