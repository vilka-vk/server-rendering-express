import React, { Component } from 'react';
import Catalog from '../components/Catalog';

class CatalogPage extends Component {
  render() {
    const { products } = this.props;
    return (
      <Catalog products = { products } />
    );
  }
}

export default CatalogPage;