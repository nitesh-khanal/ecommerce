import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

function Header() {
  const { user, logout } = useAuth();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault(); 
    // Search exists visually but does nothing
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Hamro Pasal</Link>

        <form className="d-flex flex-grow-1 mx-3" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-warning" type="submit">Search</button>
        </form>

        <div className="d-flex align-items-center">
          <Link className="btn btn-warning me-2" to="/cart">Cart</Link>
          {user ? (
            <>
              <span className="navbar-text me-2">Welcome, {user.email}</span>
              <button className="btn btn-danger" onClick={logout}>Logout</button>
            </>
          ) : (
            <Link className="btn btn-primary" to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
