// src/components/ProductCard.js
import React from "react";
import "./ProductCard.css";

import { Button, Card, Col } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Col className="p-1" md={3} xs={12}>
        <Card>
          <Card.Img variant="top" src={product.image} className="product-image"/>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.price.toLocaleString("en")} VNĐ</Card.Text>
            <Button variant="primary" className="m-1">
              Xem chi tiết
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ProductCard;
