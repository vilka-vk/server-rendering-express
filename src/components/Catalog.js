import React, { Component } from 'react';

class Catalog extends Component {
  render() {
    const { products } = this.props;

    const product =  products.map(function(item, index) {
      return (
        <div key={ index }>
          <img src={ item.imageUrl }/>
          <span>{ item.title }</span>
        </div>
      )
    })

    return (
      <div>
        {product}
      </div>
    );
  }
}

export default Catalog;