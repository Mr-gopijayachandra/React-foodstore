import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nonveg from "./Nonveg";
import Order from "./Order";
import About from "./About";
import Veg from "./Veg";
import Cart from "./Cart";
import Contactus from "./Contactus";
import Login from "./Login";
import Notfound from "./Not";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  let isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  let user = useSelector(state => state.auth.user);

  return (
    <BrowserRouter>
      {/* Full-page layout */}
      <div className="d-flex flex-column min-vh-100">
        
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg sticky-top" 
          style={{ background: "linear-gradient(to right, rgb(12, 12, 12), rgb(106, 245, 96))" }}>
          <div className="container-fluid">
            <Link className="navbar-brand text-white fw-bold" to="/Home">
              Food Store <i className="bi bi-shop text-warning"></i>
            </Link>
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><Link className="nav-link text-white" to="/Home">🏠 Home</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/Veg">🥦 Veg</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/Nonveg">🍗 Non-Veg</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/Order">🛒 Order</Link></li>
                <li className="nav-item"><Link className="nav-link text-white" to="/Contactus">📞 Contact</Link></li>
                <li className="nav-item">
                  <Link className="nav-link text-white position-relative" to="/Cart">
                    🛍️ Cart <span className="badge bg-dark ms-1">{totalItems}</span>
                  </Link>
                </li>
                <li className="nav-item"><Link className="nav-link text-white" to="/About">ℹ️ About</Link></li>
                {isAuthenticated ? (
                  <div className="auth-section d-flex align-items-center">
                    <span className="text-white me-2">Welcome, {user}</span>
                    <button onClick={() => dispatch(logout())} className="btn btn-danger btn-sm">Logout</button>
                  </div>
                ) : (
                  <Link to="/login" className="btn btn-sm" style={{ backgroundColor: "blue", color: "white" }}>
                    Sign In
                  </Link>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="flex-grow-1 overflow-auto mt-4">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/Veg" element={<Veg />} />
            <Route path="/Nonveg" element={<Nonveg />} />
            <Route path="/Order" element={<Order />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/About" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
