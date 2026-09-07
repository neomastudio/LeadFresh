import "../navbar/Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <div className="container-fluid navbar">
      <div className="navbar-bg">
        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="row">
          <div className="col-3">
            <img src="/LeadFresh/images/icon.png" className="icon-img" />
          </div>

          <div className="col-6">
            <div className="menu-list">
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">How It Works</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
              <a href="#">FAQ</a>
            </div>
          </div>

          <div className="col-3">
            <div className="navbar-btn">
              <a href="#">
                <span>Sign In</span>
              </a>

              <a href="#" className="start-free">
                <span>Start Free Trial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`menu-overlay ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(false)}
        ></div>
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Features
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Pricing
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            How It Works
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            FAQ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
