import React, {Component} from 'react';
import Select from 'react-select';
import {bodyCol} from '../util.js';
import Loader from './Loader.js';
import {CSSTransition} from 'react-transition-group';

const getSingleProduct = (products, handle) => {
  // here we grab the product that has a handle that matches	  // here we grab the product that has a handle that matches
  // our params from the url	  // our params from the url;
  const product = products.find(product => product.handle === handle);
  return product;
};

class SingleProduct extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
      variants: [],
      selectedVariant: {},
      selectedOption: null
    };
    this.addVariantToCart = this.addVariantToCart.bind(this);
  }

  componentDidMount() {
    bodyCol(this.props.oldClass);
    if (this.props.products) {
      const product = getSingleProduct(this.props.products, this.props.match.params.handle);
      this.setState({
        product,
        variants: product ? product.variants : [],
        selectedVariant: product ? product.variants[0] : {},
        selectedOption: product ? this.buildOptions(product.variants)[0] : null,
        options: product ? this.buildOptions(product.variants) : []
      });
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.products !== prevProps.products) {
      const product = getSingleProduct(this.props.products, this.props.match.params.handle);
      this.setState({
        product,
        variants: product ? product.variants : [],
        selectedVariant: product ? product.variants[0] : {},
        selectedOption: product ? this.buildOptions(product.variants)[0] : null,
        options: product ? this.buildOptions(product.variants) : []
      });
    }
  }

  addVariantToCart(variantId, quantity) {
    this.props.handleCartOpen();
    const lineItemsToAdd = [{variantId: variantId, quantity: 1}];
    const checkoutId = this.props.checkout.id;
    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.props.updateCheckout(res);
    });
  }

  changeImage = id => {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY - 90;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });

    this.changeVariantFromImage(id);
  };

  buildOptions = variants => variants.map((variant, index) => ({value: variant.id, label: `${variant.title} - $${variant.price}`, index: index, imageId: variant.image.id}));

  handleChange = selectedOption => {
    this.changeImage(selectedOption.imageId);
  };

  setVariant = selectedOption => {
    this.setState({selectedOption, selectedVariant: this.state.variants[selectedOption.index]});
  };

  changeVariantFromImage = id => {
    const options = this.state.options;
    const option = options.find(option => option.imageId === id);
    this.setVariant(option ? option : options[0]);
  };

  getPriceRange = variants => {
    const prices = variants.map(variant => parseFloat(variant.price));
    if (variants.length === 1) {
      return `$${prices[0]}`;
    }
    const max = Math.max(...prices);
    const min = Math.min(...prices);

    return `$${min} - $${max}`;
  };

  render() {
    const customStyles = {
      container: provided => ({
        ...provided,
        '&:focus': {
          border: '2px solid'
        }
      }),
      control: provided => ({
        ...provided,
        background: 'none',
        borderColor: 'white',
        boxShadow: 'none',
        '&:hover': {
          borderColor: 'white'
        }
      }),
      option: (provided, state) => ({
        ...provided,
        background: 'none',
        color: 'black',
        padding: 20
      }),
      indicatorsContainer: provided => ({
        ...provided,
        color: 'white',
        '&:hover': {
          color: 'white'
        }
      }),
      indicatorContainer: provided => ({
        ...provided,
        color: 'white',
        '&:hover': {
          color: 'white'
        }
      }),
      indicatorSeparator: () => {},
      dropdownIndicator: provided => ({
        ...provided,
        color: 'white' // your changes to the arrow
      }),
      singleValue: (provided, state) => {
        return {...provided, color: 'white'};
      }
    };

    const {product, variants, selectedVariant, selectedOption, options} = this.state;

    return product && product.attrs ? (
      <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
        <div className="ProductView">
          <div className="col-left pa3 scrollable">
            {product.images.length > 1 && (
              <div className="thumbnails">
                {product.images.map((image, index) => {
                  return <img loading="lazy" data-thumb={image.id} alt={image.altText} src={image.src} className={`thumbImage t-${index}`} onClick={e => this.changeImage(e.target.dataset.thumb)} />;
                })}
              </div>
            )}
            <div className="images">
              {product.images.map((image, index) => {
                return <img loading="lazy" id={image.id} alt={image.altText} src={image.src} className={`t-${index}`} onClick={e => this.changeVariantFromImage(e.target.id)} />;
              })}
            </div>
          </div>
          <div className="col-right pa3 sticky">
            <h2>{product.attrs.title.value}</h2>
            <div dangerouslySetInnerHTML={{__html: product.attrs.descriptionHtml.value}} />

            <p className="prodPrice">{this.getPriceRange(variants)}</p>

            {variants.length > 1 && (
              <>
                <h3>{product.options[0].name}:</h3>
                <Select styles={customStyles} value={selectedOption} onChange={this.handleChange} options={options} />
              </>
            )}

            {selectedVariant.available ? (
              <button className="Product__buy button" onClick={() => this.addVariantToCart(selectedVariant.id)}>
                Add to Cart - ${selectedVariant.price}
              </button>
            ) : (
              <h3 className="soldOut">
                Sorry Sold Out! To commission something similar contact us at <a href="mailto:hi@rosemi.lk">hi@rosemi.lk</a>
              </h3>
            )}
          </div>
        </div>
      </CSSTransition>
    ) : (
      <Loader />
    );
  }
}

export default SingleProduct;
