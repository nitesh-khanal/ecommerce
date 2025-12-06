import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title}</h5>
          <p className="text-muted mb-1">Brand: {product.brand}</p>
          <p className="text-warning mb-2">⭐ {product.rating} / 5</p>
          <p className="fw-bold mt-auto">Rs. {product.price}</p>

          <div className="d-flex gap-2 mt-2">
            <Link
              to={`/product/${product.id}`}
              className="btn btn-warning flex-grow-1"
              style={{ color: "#131921" }}
            >
              View
            </Link>
            <button
              className="btn btn-primary flex-grow-1"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
