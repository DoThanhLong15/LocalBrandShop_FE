
import React from 'react';
import ProductCard from '../components/ProductCard'; 
import './ProductsPage.css';

import aothun from '../assets/images/aothun.png';

const products = [
  {
    id: 1,
    name: 'Áo khoác Parka chống tia UV',
    price: '784.000',
    image: 'aothun', // Replace with your image URL or import
  },
  {
    id: 2,
    name: 'Áo thun Local Brand',
    price: '500.000',
    image: 'image2-url',
  },
  {
    id: 3,
    name: 'Quần Jeans Local Brand',
    price: '600.000',
    image: 'image3-url',
  },
  // Add more products as needed
];

const ProductsPage = () => {
  return (
    <div className="products-page-container">
      <h1>Sản phẩm của chúng tôi</h1>
      <div className="products-grid">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            name={product.name} 
            price={product.price} 
            image={product.image} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
