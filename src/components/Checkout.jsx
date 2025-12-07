import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (!cartItems.length) return;

    clearCart(); 
    navigate("/checkout-success", { replace: true });
  };

  if (!cartItems.length)
    return (
      <div className="container text-center my-5">
        <h3>Your cart is empty.</h3>
      </div>
    );

  return (
    <div className="container my-5">
      <h2 className="mb-4">Checkout</h2>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle bg-white">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.brand}</td>
                <td>Rs. {item.price}</td>
                <td>{item.quantity}</td>
                <td>Rs. {item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-end mt-4 flex-column flex-md-row align-items-md-center gap-3">
        <div>
          <h4>Total: Rs. {getTotalPrice()}</h4>
        </div>
        <button
          className="btn btn-success btn-lg"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
