import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "../css/style.css";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://buscamet-api.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.json();
        if (response.status === 401) {
          swal("Error", errorMessage.message, "warning");
        } else {
          swal("Oh no!", "Ha ocurrido un error!", "warning");
        }
        throw new Error("Error al iniciar sesión");
      }

      const { token } = await response.json();

      if (token) {
        navigate("/ofert");
        window.location.reload();
      }
      localStorage.setItem("token", token);
    } catch (error) {
      swal(
        "Oh no!",
        "Ha ocurrido un error interno dentro del servidor, favor de contactar con el administrador!",
        "warning"
      );
    }
  };

  return (
    <div className="container mt-5">
      <div
        className="row justify-content-center"
        style={{
          paddingTop: "100px",
          paddingBottom: "100px",
          marginBottom: "50px",
        }}
      >
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Iniciar Sesión</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Correo Electrónico:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Ingrese su correo"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    placeholder="Ingrese su contraseña"
                    required
                  />
                </div>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary my-3">
                    Iniciar Sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
