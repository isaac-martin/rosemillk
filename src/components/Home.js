import React, {Component} from 'react';
import Draggable from './draggable.js';

import home1 from '.././imgs/home1.jpg';
import home2 from '.././imgs/home2.jpg';
import home3 from '.././imgs/home3.jpg';
import smile from '.././imgs/smile.svg';



class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        <Draggable 
        className="img1"
        src={home2} />
        <Draggable 
        className="img2"
        src={home1} />
        <Draggable 
        className="img3"
        src={home3} />
        <Draggable 
        className="svg1"
        src={smile} />
        <Draggable 
        className="svg2"
         src={smile} />
        <Draggable 
        className="svg3"
        src={smile} />
      </div>
    );
  }
}

export default Home;
