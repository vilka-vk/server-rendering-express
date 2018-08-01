import React, { Component } from 'react';
import CatalogPage from './src/containers/CatalogPage';
import products from './src/constants/Products';

class App extends Component {
  render() {
    return (
      <CatalogPage products = { products }/>
    );
  }
}

export default App;