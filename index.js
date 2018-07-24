import React from 'react';
import ReactDOM from 'react-dom';
import Image from './src/components/Image';

ReactDOM.render(
  <Image
    src = 'http://vkuso.ru/img/jogurtovyj-tort-zhele-s-klubnikoj.jpg'
    alt = 'Торт клубничный йогуртовый'
    width = '200'
    height = 'auto'
  />,
  document.getElementById('app')
)