import React from 'react';
import smile from '.././imgs/smile.svg';

const Loader = () => (
  <div className="smile-loader">
    <img loading="lazy" alt="loader" src={smile} />
  </div>
);

export default Loader;
