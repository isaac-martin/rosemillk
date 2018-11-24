import React, {Component} from 'react';

const accessToken = '1600018844.85a9c09.a83efcc5ac8449f09b49cde1bbf059ae';
const apiURL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken;

class Instagram extends Component {
  fetchFromIG = () => {
    return fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        return this.setState({
          instagram: data.data.slice(0, 8)
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
        <a className="link" href="https://instagram.com/rosemi.lk" target="_blank" rel="noopener noreferrer">
  <svg viewBox="0 0 236 233" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M74.3608 179.573C30.9186 138.392 19.4043 100.39 47.5191 62.9879C76.5726 24.3369 133.886 23.8321 171.147 61.154C223.783 121.654 222.525 144.604 179.804 171.107C140.791 211.318 117.803 220.754 74.3608 179.573Z" fill="#D2E2FF"/>
<path d="M165.67 142.87C161.337 151.017 155.097 157.213 146.95 161.46C138.977 165.533 129.877 167.57 119.65 167.57C103.53 167.57 90.6167 162.587 80.91 152.62C71.6367 143.087 67 131.04 67 116.48C67 102.44 71.55 90.5233 80.65 80.73C90.53 70.2433 103.443 65 119.39 65C133.69 65 145.607 69.03 155.14 77.09C164.847 85.2367 169.7 95.7667 169.7 108.68C169.7 119.34 165.8 128.44 158 135.98C151.067 142.74 143.657 146.12 135.77 146.12C129.877 146.12 126.323 143.823 125.11 139.23C121.903 143.737 116.79 145.99 109.77 145.99C103.703 145.99 98.9367 143.997 95.47 140.01C92.2633 136.023 90.66 130.823 90.66 124.41C90.66 115.31 93.5633 107.163 99.37 99.97C105.783 92.2567 113.323 88.4 121.99 88.4C127.797 88.4 132.043 90.6533 134.73 95.16L136.55 90.61H149.03L137.46 127.01C137.027 128.57 136.81 129.653 136.81 130.26C136.81 132.253 137.633 133.25 139.28 133.25C143.353 133.25 147.08 131.083 150.46 126.75C154.013 121.983 155.79 115.96 155.79 108.68C155.79 99.32 152.193 91.78 145 86.06C138.067 80.6 129.53 77.87 119.39 77.87C109.163 77.87 100.237 81.5967 92.61 89.05C85.07 96.59 81.3 105.647 81.3 116.22C81.3 122.2 82.1667 127.573 83.9 132.34C85.6333 137.107 88.1467 141.18 91.44 144.56C94.82 147.853 98.85 150.367 103.53 152.1C108.297 153.833 113.67 154.7 119.65 154.7C134.557 154.7 145.563 150.757 152.67 142.87H165.67ZM121.47 100.62C117.397 100.62 113.54 103.003 109.9 107.77C106.26 112.623 104.44 118.04 104.44 124.02C104.44 130.693 106.693 134.03 111.2 134.03C116.14 134.03 120.56 131.3 124.46 125.84C128.013 120.727 129.79 115.44 129.79 109.98C129.79 103.74 127.017 100.62 121.47 100.62Z" fill="white"/>
</svg>




        </a>
        <div className="instagramGrid">
          {this.state.instagram.map(post => {
            return (
              <a style={{backgroundImage: `url(${post.images.standard_resolution.url})`}} href={post.link} className="instagramPost" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 1 1" />
              </a>
            );
          })}
        </div>
      </div>
    ) : null;
  }
}

export default Instagram;
