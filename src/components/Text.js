import React from 'react';

const Text = props => <div dangerouslySetInnerHTML={{__html: props.data}} />;

export default Text;
