import "../css/style.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const navbarStyle = {
    backgroundColor: "#254a59",
  };
  const { comment } = useContext(GlobalContext);
  const unreadNotifications = comment.filter(
    (notification) => !notification.read
  ).length;

  const token = localStorage.getItem("token");

  const cerrarSesion = () => {
    swal({
      title: "¿Estas seguro que deseas cerrar sesion?",
      text: "Puedes iniciar sesion cuando quieras",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    });
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
            {token && (
              <>
                <li className="nav-item mx-4 ul1 custom-li">
                  <Link to="/mensajes" className="nav-link">
                    <i className="bi bi-bell"></i> Notificaciones
                    {unreadNotifications > 0 && (
                      <span className="badge bg-danger mx-1">
                        {unreadNotifications}
                      </span>
                    )}
                  </Link>
                </li>
                <li className="nav-item mx-4 ul1 custom-li">
                  <button onClick={cerrarSesion} className="nav-link">
                    Cerrar Sesión
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
