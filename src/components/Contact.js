import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import Text from './Text.js';

class Contact extends Component {
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
      <div className="Contact">
        <Text data={this.state.pageData} />
      </div>
    );
  }
}

export default Contact;
