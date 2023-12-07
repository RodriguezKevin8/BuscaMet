import "../css/style.css";
import { Link } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    backgroundColor: "#254a59",
  };
  return (
    <nav className="navbar navbar-expand-lg" style={navbarStyle}>
      <div className="container-fluid h-25">
        <a className="navbar-brand" href="#">
          <span className="name">Busca</span>
          <span className="name2">Met</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item mx-4 ul1 custom-li">
              <Link to="/" className="nav-link active">
                <i className="bi bi-house"></i> Inicio
              </Link>
            </li>
            <li className="nav-item mx-4 ul1 custom-li">
              <Link to="/ofert" className="nav-link">
                <i className="bi bi-bank"></i> Ofertas
              </Link>
            </li>
            <li className="nav-item mx-4 ul1 custom-li">
              <Link to="/contact" className="nav-link">
                <i className="bi bi-person-badge"></i> Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
