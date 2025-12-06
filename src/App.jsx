import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import CheckoutSuccess from './components/CheckoutSuccess';
import Login from './components/Login';

function App() {
  const { user } = useAuth();

  // ProtectedRoute ensures user is logged in for certain pages
  const ProtectedRoute = ({ children }) => {
    return user ? children : <Navigate to="/login" replace />;
  };

  return (
    <CartProvider>
      <Router>
        <Header />
        <div className="container my-5">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />

            {/* Redirect unknown paths to home to prevent blank pages */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
