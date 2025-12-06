import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <Container>
        <Row className="align-items-start">
          <Col md={4} className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <img src={logo} alt="Hamro Pasal" height="50" className="me-2" />
              <h5 className="mb-0">Hamro Pasal</h5>
            </div>
            <p>Your one-stop shop for all your needs. Quality products, great prices!</p>
          </Col>

          <Col md={4} className="mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link
                  to="/"
                  className="text-light text-decoration-none"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="/cart"
                  className="text-light text-decoration-none"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Cart
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-light text-decoration-none"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  className="text-light text-decoration-none"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <div className="d-flex gap-3 fs-4">
              <a  className="text-light" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a  className="text-light" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a className="text-light" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a className="text-light" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="bg-secondary" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2025 Hamro Pasal. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
