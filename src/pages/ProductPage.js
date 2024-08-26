// src/pages/ProductPage.js
import React, { useState } from 'react';
import ProductImageCarousel from '../components/ProductImageCarousel';
import ProductInfo from '../components/ProductInfo';
import SizeSelector from '../components/SizeSelector';
import QuantitySelector from '../components/QuantitySelector';
import AddToCartButton from '../components/AddToCartButton';
import './ProductPage.css';

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: 'Áo khoác Parka chống tia UV',
    price: '784.000',
    reviews: '4.5',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      'image1-url',
      'image2-url',
      'image3-url',
      'image4-url',
    ],
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} of size ${selectedSize} to the cart!`);
  };

  return (
    <div className="product-page-container">
      <div className="product-image-container">
        <ProductImageCarousel images={product.images} />
      </div>
      <div className="product-info-container">
        <ProductInfo product={product} />
        <SizeSelector
          sizes={product.sizes}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
        />
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <AddToCartButton onAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductPage;
