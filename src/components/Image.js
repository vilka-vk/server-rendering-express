import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { src, alt, width, height } = this.props;
    return (
      <img
        src = { src }
        alt = { alt }
        width = { width }
        height = { height }
      />
    );
  }
}

export default Image;