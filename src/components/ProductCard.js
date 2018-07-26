import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
  render() {
    const {
      imageUrl,
      title,
      price
    } = this.props;

    return (
      <div style = { productCardStyle }>
        <Image
          src = { imageUrl }
          alt = { title }
          width = '100%'
          height = '209px'
        />
        <TextBox text = { title } />
        <Price price = { price } />
      </div>
    );
  }
}

const productCardStyle = {
  width: '250px',
  marginBottom: '20px',
  marginLeft: '10px',
  marginRight: '10px',
  border: '2px solid black',
  textAlign: 'center',
  paddingBottom: '30px',
  cursor: 'pointer',
};

export default ProductCard;