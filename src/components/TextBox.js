import React, { Component } from 'react';

class TextBox extends Component {
  render() {
    const { text } = this.props;
    return (
      <h4>{ text }</h4>
    );
  }
}

export default TextBox;