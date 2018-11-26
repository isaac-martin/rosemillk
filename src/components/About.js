import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import Text from './Text.js';
import about from '../data/about.js';

import Draggable from './draggable.js';

import Headshot from '.././imgs/headshot.jpg';

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    bodyCol(this.props.oldClass);
  }

  render() {
    return (
      <div className="About">
        <Text data={about} />
        <Draggable src={Headshot} />
      </div>
    );
  }
}

export default About;
