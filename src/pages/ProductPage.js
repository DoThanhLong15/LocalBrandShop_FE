import React, { useEffect, useState } from "react";
import ProductImageCarousel from "../components/ProductImageCarousel";
import ProductInfo from "../components/ProductInfo";
import SizeSelector from "../components/SizeSelector";
import QuantitySelector from "../components/QuantitySelector";
import AddToCartButton from "../components/AddToCartButton";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import APIs, { endpoints } from "../config/APIs";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);

  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const loadProduct = async () => {
    try {
      let url = `${endpoints["products"]}/${productId}/`;

      console.log(url);

      let res = await APIs.get(url);

      console.info(res.data.data);

      setProduct(res.data.data);
    } catch (ex) {
      console.error(ex);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const handleAddToCart = () => {
    alert(`Added ${quantity} of size ${selectedSize} to the cart!`);
  };

  return (
    <div className="product-page-container">
      {product && (
        <>
          <div className="product-image-container">
            <ProductImageCarousel images={product.productImage} />
          </div>
          <div className="product-info-container">
            <ProductInfo product={product} />
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
