import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";
import PopularProductsCarousel from "./PopularProductsCarousel";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [displayCount, setDisplayCount] = useState(20);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=80")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setFiltered(data.products);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get("search")?.toLowerCase() || "";
    setFiltered(
      !q
        ? products
        : products.filter(p => p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
    );
    setDisplayCount(20);
  }, [location.search, products]);

  if (loading) return <p className="text-center mt-5">Loading products...</p>;
  if (!filtered.length) return <p className="text-center mt-5">No products found</p>;

  return (
    <div className="container my-4">
      <PopularProductsCarousel />
      <h2 className="mb-4">All Products</h2>
      <div className="row">
        {filtered.slice(0, displayCount).map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {displayCount < filtered.length && (
        <div className="text-center mt-4">
          <button className="btn btn-secondary px-4" onClick={() => setDisplayCount(displayCount + 20)}>
            View More
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductList;
