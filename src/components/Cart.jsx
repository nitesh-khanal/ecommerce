import { useCart } from "../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    removeEntireItem,
    totalItems,
    getTotalPrice,
  } = useCart();
  const navigate = useNavigate();

  if (!cartItems.length)
    return (
      <div className="container text-center my-5">
        <h3 className="mb-3">Your cart is empty.</h3>
        <Link to="/" className="btn btn-primary">
          Go Shopping
        </Link>
      </div>
    );

  return (
    <div className="container my-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle bg-white">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="d-flex align-items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      marginRight: "15px",
                      borderRadius: "5px",
                    }}
                  />
                  <div>
                    <div className="fw-bold">{item.title}</div>
                    <small className="text-muted">{item.brand}</small>
                  </div>
                </td>
                <td>{item.brand}</td>
                <td>Rs. {item.price}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-sm btn-outline-secondary me-2"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-secondary ms-2"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>Rs. {item.price * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeEntireItem(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-end mt-4 flex-column flex-md-row align-items-md-center gap-3">
        <div>
          <h5>Total Items: {totalItems}</h5>
          <h4>Total Price: Rs. {getTotalPrice()}</h4>
        </div>
        <button
          className="btn btn-success btn-lg"
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
