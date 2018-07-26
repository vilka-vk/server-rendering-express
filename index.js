import React from 'react';
import ReactDOM from 'react-dom';
import Catalog from './src/components/Catalog';
import products from './src/constants/Products';

ReactDOM.render(
  <Catalog products={products}/>,
  document.getElementById('app')
)