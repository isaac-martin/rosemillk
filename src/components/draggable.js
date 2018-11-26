import React from 'react';
import posed from 'react-pose';

const props = {
  draggable: true
};

const Image = posed.img(props);

class Draggable extends React.Component {
  render() {
    return (
      <div className={`drag ${this.props.className}`}>
        <Image src={this.props.src} />
      </div>
    );
  }
}

export default Draggable;
