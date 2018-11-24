import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import Text from './Text.js';
import Draggable from './draggable.js';

class Product extends Component {
  constructor(props) {
    super(props);
    this.oldClass = document.querySelector('body').classList[0];
    this.state = {
      pageData: 'test'
    };
  }

  componentDidMount() {
    bodyCol(this.oldClass);
  }

  render() {
    return (
      <div className="About">
        <Text data={this.state.pageData} />
        <div className="About-images" />
        <Draggable src="https://static1.squarespace.com/static/5b475b2c50a54f54f9b4e1dc/5b4a5c2d88251b376ea105c1/5b4a5c4703ce643303f960e7/1531599999503/DSCF2776.jpg?format=1000w" />
      </div>
    );
  }
}

export default Product;
