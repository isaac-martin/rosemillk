import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import Text from './Text.js';
import policies from '../data/policies.js';


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
        <Text data={policies} />
      </div>
    );
  }
}

export default Policies;
