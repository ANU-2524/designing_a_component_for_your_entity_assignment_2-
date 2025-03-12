import React from "react";
import ViewProductButton from "../components/Button";
import "./ProductCard.css"; 

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">{product.price}</p>
      <ViewProductButton />
    </div>
  );
};

export default ProductCard;
