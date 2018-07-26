import React, { Component } from 'react';
import ProductCard from './ProductCard';

class Catalog extends Component {
  render() {
    const { products } = this.props;

    const product =  products.map(function(item) {
      return (
        <ProductCard
          key={ item.id }
          imageUrl={ item.imageUrl }
          title={ item.title }
          price={ item.price }
        />
      )
    })

    return (
      <div style = { productCardWrapperStyle }>
        { product }
      </div>
    );
  }
}

const productCardWrapperStyle = {
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-around',
};

export default Catalog;