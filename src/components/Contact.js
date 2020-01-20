import React, {Component} from 'react';
import {bodyCol} from '../util.js';
import Text from './Text.js';
import Newsletter from './Newsletter.js';
import contact from '../data/contact.js';


class Contact extends Component {
  componentDidMount() {
    bodyCol(this.props.oldClass);
  }

  render() {
    return (
      <div className="Contact">
        <Text data={contact} />
        <Newsletter/>
      </div>
    );
  }
}

export default Contact;
