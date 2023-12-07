import "../css/style.css";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Contactus() {
  const { addComment } = useContext(GlobalContext);
  const [Comment, setComment] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    mensaje: "",
  });
  const handleclear = () => {
    setComment({
      nombre: "",
      telefono: "",
      correo: "",
      mensaje: "",
    });
  };
  const handleChange = (e) =>
    setComment({ ...Comment, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(Comment);
    handleclear();
  };

  return (
    <>
      <section>
        <div className="container">
          <h2 className="text-center mt-5 mb-4">
            ¿Quieres Publicar tus Ofertas de Empleo?
          </h2>
          <div className="d-flex justify-content-center">
            <div className="container-2">
              <p className="just2">
                ¡Estamos encantados de saber que estás interesado en compartir
                oportunidades laborales con nuestra comunidad! En BuscaMet,
                creemos en conectar a empleadores con talento local.
              </p>
              <p className="just2">
                Si deseas subir tus ofertas de empleo a nuestra plataforma, no
                dudes en ponerte en contacto con nosotros. Estamos aquí para
                ayudarte en cada paso del proceso. Envíanos un mensaje con los
                detalles de las posiciones que deseas publicar, y nos pondremos
                en contacto contigo para coordinar la información necesaria.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    value={Comment.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="my-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="telefono"
                    placeholder="Teléfono"
                    name="telefono"
                    value={Comment.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="my-3">
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    name="correo"
                    placeholder="Correo Electrónico"
                    value={Comment.correo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="my-3">
                  <textarea
                    className="form-control"
                    id="mensaje"
                    name="mensaje"
                    rows="4"
                    placeholder="Mensaje"
                    value={Comment.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btn-outline-dark"
                    style={{ borderWidth: "1px", margin: "10px" }}
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
