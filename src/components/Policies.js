import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import Text from './Text.js';

class Policies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageData: 'test'
    };
  }

  componentDidMount() {
    bodyCol(this.props.oldClass);
  }

  render() {
    return (
      <div className="Policies">
        <Text data={this.state.pageData} />
      </div>
    );
  }
}

export default Policies;
