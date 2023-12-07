import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../css/style.css";
import calendar from "../img/calendary.png";
import swal from "sweetalert";

function Ofert() {
  const { tasks, deleteOfert } = useContext(GlobalContext);
  const token = localStorage.getItem("token");
  const delet = (id) => {
    swal({
      title: "¿Estas seguro que deseas eliminar este registro?",
      text: "La informacion se perdera para siempre!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteOfert(id);
        swal("El registro ha sido modificado", {
          icon: "success",
        });
      } else {
        swal("Se ha cancelado la edicion del registro!");
      }
    });
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <h1 className="ofert-2 text-center my-4">
              Conoce nuestras ofertas para tu futuro
            </h1>
            <div className="col-lg-12 mx-auto">
              <div className="d-flex justify-content-center">
                <img src={calendar} alt="" />
              </div>
              <div className="d-flex justify-content-center">
                <div className="container-2">
                  <p className="just">
                    Descubre las oportunidades laborales de la manera más
                    sencilla. En nosotros, encuentras la fuente confiable que te
                    proporciona la información que necesitas para acceder a las
                    mejores ofertas de empleo. Simplificamos tu búsqueda y te
                    brindamos detalles precisos para que puedas dar el siguiente
                    paso en tu carrera de manera informada. ¡Conoce las ofertas
                    de empleo de manera fácil con nuestra ayuda!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 my-2">
              {tasks && tasks.length > 0 ? (
                tasks.map((task) => (
                  <div
                    className="my-3"
                    style={{ border: "1px solid black" }}
                    key={task.id}
                  >
                    <h3 className="text-center fon">{task.vacante}</h3>
                    {task.descripcion && (
                      <p className="px-2 fon2" style={{ textAlign: "justify" }}>
                        {task.descripcion}
                      </p>
                    )}
                    <div className="d-flex justify-content-center">
                      <Link to={{ pathname: `/data/${task.id}` }}>
                        <button
                          type="button"
                          className="btn btn-outline-dark"
                          style={{ border: "1px solid black", margin: "10px" }}
                        >
                          Conoce mas
                        </button>
                      </Link>
                      {/* falta un boton para denunciar publicaciones */}
                      {token && (
                        <>
                          <Link to={`/form`}>
                            <button
                              type="button"
                              className="btn btn-outline-success"
                              style={{
                                border: "1px solid black",
                                margin: "10px",
                              }}
                            >
                              Agregar
                            </button>
                          </Link>
                          <Link to={`/edit/${task.id}`}>
                            <button
                              type="button"
                              className="btn btn-outline-info"
                              style={{
                                border: "1px solid black",
                                margin: "10px",
                              }}
                            >
                              Editar
                            </button>
                          </Link>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            style={{
                              border: "1px solid black",
                              margin: "10px",
                            }}
                            onClick={() => delet(task.id)}
                          >
                            Eliminar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="d-flex justify-content-center">
                  <p>No hay ofertas disponibles.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ofert;
