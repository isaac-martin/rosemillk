import React, {Component} from 'react';

const accessToken = '1600018844.85a9c09.a83efcc5ac8449f09b49cde1bbf059ae';
const apiURL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken;

class Instagram extends Component {
  fetchFromIG = () => {
    return fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        return this.setState({
          instagram: data.data.slice(0, 6)
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
    // return null;
    return this.state.instagram.length ? (
      <div className="instagramWrap">
        <a href="https://instagram.com/rosemi.lk" target="_blank" rel="noopener noreferrer">
          @rosemi.lk
        </a>
        <div className="instagramGrid">
          {this.state.instagram.map(post => {
            return <a style={{backgroundImage: `url(${post.images.standard_resolution.url})`}} href={post.link} className="instagramPost" target="_blank" rel="noopener noreferrer" ><svg viewBox='0 0 1 1'></svg></a>;
          })}
        </div>
      </div>
    ) : null;
  }
}

export default Instagram;
