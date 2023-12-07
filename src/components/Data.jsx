import "../css/style.css";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
const OfertaLaboral = () => {
  const [oferta, setOferta] = useState({
    vacante: "",
    descripcion: "",
    conocimiento: "",
    experiencia: "",
    nivelAcademico: "",
    edadGenero: "",
    lugar: "",
    telefono: "",
    correo: "",
    horarios: "",
    categoria: "",
  });
  const { tasks } = useContext(GlobalContext);

  const { id } = useParams();

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id === parseInt(id));
    if (taskFound) {
      setOferta({
        id: taskFound.id,
        vacante: taskFound.vacante,
        descripcion: taskFound.descripcion,
        conocimiento: taskFound.conocimiento,
        experiencia: taskFound.experiencia,
        nivelAcademico: taskFound.nivelAcademico,
        edadGenero: taskFound.edadGenero,
        lugar: taskFound.lugar,
        telefono: taskFound.telefono,
        correo: taskFound.correo,
        horarios: taskFound.horarios,
        categoria: taskFound.categoria,
      });
    }
  }, [id, tasks]);

  const toggleButton = () => {
    const checkbox = document.getElementById("terminosCheckbox");
    const button = document.getElementById("solicitarBtn");
    button.disabled = !checkbox.checked;
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="d-block justify-content-center text-center">
                <h1 className="ofert-2 text-center my-4">{oferta.vacante}</h1>
                <p className="just2">{oferta.descripcion}</p>

                <div className="just3">
                  <p>
                    <strong>1. Conocimientos en: </strong>
                    {oferta.conocimiento}
                  </p>
                  <p>
                    <strong>2. Experiencia: </strong>
                    {oferta.experiencia}
                  </p>
                  <p>
                    <strong>3. Nivel Académico: </strong>
                    {oferta.nivelAcademico}
                  </p>
                  <p>
                    <strong>4. Edad y Género: </strong>
                    {oferta.edadGenero}
                  </p>
                </div>
                <div className="form-check d-block">
                  <p className="just4">
                    Antes de proceder, por favor toma un momento para revisar y
                    aceptar nuestros términos y condiciones. Al continuar con el
                    uso de nuestros servicios, reconoces que has leído,
                    comprendido y aceptado los términos establecidos en nuestro
                    acuerdo.
                    <br />
                    Para continuar, por favor selecciona la casilla que indica
                    tu aceptación de los términos y condiciones antes de
                    proceder con el uso de nuestros servicios. Si tienes alguna
                    pregunta o inquietud, no dudes en contactarnos.s
                  </p>
                  <label
                    className="form-check-label checkbox-container"
                    htmlFor="terminosCheckbox"
                  >
                    <input
                      className="form-check-input mx-2 bor"
                      type="checkbox"
                      id="terminosCheckbox"
                      style={{ border: "1px solid black" }}
                      onChange={toggleButton}
                    />
                    <a href="./terminos.html">
                      Acepto los términos y condiciones
                    </a>
                  </label>
                </div>
                <div className="d-flex justify-content-center my-3">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    style={{ borderWidth: "1px", margin: "10px" }}
                    id="solicitarBtn"
                    disabled
                    data-bs-toggle="modal"
                    data-bs-target="#solicitarModal"
                  >
                    Solicitar información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="solicitarModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="fon2 text-center" id="exampleModalLabel">
                Información de contacto
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="just4" style={{ color: "black" }}>
                Gracias por tu interés en nuestra oportunidad laboral. Estamos
                emocionados por la posibilidad de conocerte mejor. Para avanzar
                en el proceso y discutir más a fondo tu aplicación, te animamos
                a ponerte en contacto través de:
              </p>
              <p>
                <strong>1. Lugar: </strong> {oferta.lugar}
              </p>
              <p>
                <strong>2. Teléfono: </strong> {oferta.telefono}
              </p>
              <p>
                <strong>3. Correo electrónico: </strong>
                {oferta.correo}
              </p>
              <p>
                <strong>4. Horario: </strong>
                {oferta.horarios}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfertaLaboral;
