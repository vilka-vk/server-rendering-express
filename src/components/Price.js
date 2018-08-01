import React, { Component } from 'react';

class Price extends Component {
  render() {
    const { price } = this.props;
    return (
      <span>Цена: { price } рублей</span>
    );
  }
}

export default Price;