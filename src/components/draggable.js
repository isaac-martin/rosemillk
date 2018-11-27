import React from 'react';
import posed from 'react-pose';

const props = {
  draggable: true
};

const Image = posed.img(props);

class Draggable extends React.Component {
  render() {
    return <Image className={`drag ${this.props.className}`} src={this.props.src} />;
  }
}

export default Draggable;
