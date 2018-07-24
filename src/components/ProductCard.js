import React, { Component } from 'react';
import Image from './Image';
import TextBox from './TextBox';
import Price from './Price';

class ProductCard extends Component {
  render() {
    return (
      <div style = { productCardWrapperStyle }>
        <div style = { productCardStyle }>
          <Image
            src = 'http://s017.radikal.ru/i438/1302/f9/da6af048d722.jpg'
            alt = 'Торт зефирный'
            width = '100%'
            height = '209px'
          />
          <TextBox text = 'Торт зефирный' />
          <Price price = '245' />
        </div>
        <div style = { productCardStyle }>
          <Image
            src = 'https://avatars.mds.yandex.net/get-pdb/966350/a88f5840-8aef-423b-9c62-681254003b59/orig'
            alt = 'Торт муссовый'
            width = '100%'
            height = '209px'
          />
          <TextBox text = 'Торт муссовый' />
          <Price price = '560' />
        </div>
        <div style = { productCardStyle }>
          <Image
            src = 'http://vkuso.ru/img/jogurtovyj-tort-zhele-s-klubnikoj.jpg'
            alt = 'Торт клубничный йогуртовый'
            width = '100%'
            height = '209px'
          />
          <TextBox text = 'Торт клубничный йогуртовый' />
          <Price price = '430' />
        </div>
      </div>
    );
  }
}

const productCardStyle = {
  width: '250px',
  border: '2px solid black',
  textAlign: 'center',
  paddingBottom: '30px',
};

const productCardWrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
};

export default ProductCard;