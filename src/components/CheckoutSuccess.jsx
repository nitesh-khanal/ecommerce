import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow-lg p-4 card-success text-center"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h1 className="text-success mb-3">✓ Order Successful!</h1>
        <p className="lead mb-4">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <Link to="/" className="btn btn-primary btn-lg">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
