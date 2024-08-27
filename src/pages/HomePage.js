import React from 'react';
import ProductCard from '../components/ProductCard';
import './HomePage.css'; 


const HomePage = () => {
  const bestSellingProducts = [
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    // ...add more products
  ];

  const newProducts = [
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    { image: 'image-url-1', name: 'Áo Khoác PARKA', price: '799.000' },
    // ...add more products
  ];

  return (
    <div className="homepage">
      <section className="section">
        <h2>SẢN PHẨM BÁN CHẠY</h2>
        <div className="product-grid">
          {bestSellingProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>TIÊU ĐIỂM</h2>
        <div className="featured-section">
          <div className="featured-image">
            <img src="featured-image-url-1" />
          </div>
          <div className="featured-image">
            <img src="featured-image-url-2" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2>SẢN PHẨM MỚI</h2>
        <div className="product-grid">
          {newProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <button className="load-more-button">XEM THÊM SẢN PHẨM</button>
      </section>
    </div>
  );
};

export default HomePage;
