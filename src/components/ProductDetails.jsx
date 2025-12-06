import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center my-5">Loading...</p>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.thumbnail} alt={product.title} className="img-fluid mb-3 rounded" />
          <div className="d-flex flex-wrap gap-2">
            {product.images.map((img, idx) => (
              <img key={idx} src={img} alt={product.title} style={{ width: "80px", height: "80px", objectFit: "cover" }} className="img-thumbnail" />
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <p><strong>Price:</strong> Rs. {product.price}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Rating:</strong> ⭐ {product.rating}</p>
          <button className="btn btn-primary btn-lg mt-3" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
