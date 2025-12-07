import { useEffect, useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function PopularProductsCarousel() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12") 
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  if (!products.length) return <p>Loading popular products...</p>;
  const chunkSize = 3;
  const slides = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    slides.push(products.slice(i, i + chunkSize));
  }

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4 fw-bold">Popular Products</h3>
      <Carousel variant="dark" indicators={false}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div
              className="d-flex justify-content-center gap-3 flex-wrap p-4"
              style={{ background: "linear-gradient(90deg, #f0f0f0, #e0e0e0)", borderRadius: "10px" }}
            >
              {slide.map((product) => (
                <div
                  key={product.id}
                  className="card text-center shadow-sm"
                  style={{ width: "18rem", flex: "1 0 auto", borderRadius: "10px" }}
                >
                  <img
                    src={product.thumbnail}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: "180px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="fw-bold mt-auto">Rs. {product.price}</p>

                    <div className="d-flex gap-2 mt-2">
                      <Button
                        as={Link}
                        to={`/product/${product.id}`}
                        variant="warning"
                        style={{ color: "#131921" }}
                        className="flex-grow-1"
                      >
                        View
                      </Button>

                      <Button
                        variant="primary"
                        className="flex-grow-1"
                        onClick={() => addToCart(product)}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default PopularProductsCarousel;
