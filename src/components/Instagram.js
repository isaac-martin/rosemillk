import React, {Component} from 'react';

const accessToken = '1600018844.85a9c09.a83efcc5ac8449f09b49cde1bbf059ae';
const apiURL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken;

class Instagram extends Component {
  fetchFromIG = () => {
    return fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        return this.setState({
          instagram: {
            data: data.data
          }
        });
      });
  };

  constructor() {
    super();
    this.state = {
      instagram: {}
    };
  }

  componentDidMount() {
    this.fetchFromIG();
  }

  render() {
    return <div>Instagram</div>;
  }
}

export default Instagram;
