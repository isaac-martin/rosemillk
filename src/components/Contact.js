import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import Text from './Text.js';
import contact from '../data/contact.js';


class Contact extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    bodyCol(this.props.oldClass);
  }

  render() {
    return (
      <div className="Contact">
        <Text data={contact} />
      </div>
    );
  }
}

export default Contact;
