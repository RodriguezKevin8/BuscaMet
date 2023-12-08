import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import swal from "sweetalert";

function OfertForm() {
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
  const { addOfert, updateOfert, tasks } = useContext(GlobalContext);

  const { id } = useParams();

  const handleChange = (e) =>
    setOferta({ ...oferta, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!id) {
      addOfert(oferta);
      swal("Genial!", "Oferta agregada con exito!", "success");
    } else {
      swal({
        title: "¿Estas seguro que deseas editar este registro?",
        text: "Puedes editar despues la informacion!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          updateOfert(oferta);
          swal("El registro ha sido modificado", {
            icon: "success",
          });
          setTimeout(() => {
            useEffect;
          }, 1000);
        } else {
          swal("Se ha cancelado la edicion del registro!");
        }
      });
    }
  };
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

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="vacante" className="form-label">
            Vacante:
          </label>
          <input
            type="text"
            className="form-control"
            id="vacante"
            name="vacante"
            value={oferta.vacante}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción:
          </label>
          <textarea
            className="form-control"
            id="descripcion"
            name="descripcion"
            value={oferta.descripcion}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Conocimiento:
          </label>
          <textarea
            className="form-control"
            id="conocimiento"
            name="conocimiento"
            value={oferta.conocimiento}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Experiencia:
          </label>
          <textarea
            className="form-control"
            id="experiencia"
            name="experiencia"
            value={oferta.experiencia}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Nivel academico:
          </label>
          <textarea
            className="form-control"
            id="nivelAcademico"
            name="nivelAcademico"
            value={oferta.nivelAcademico}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Edad y genero:
          </label>
          <textarea
            className="form-control"
            id="edadGenero"
            name="edadGenero"
            value={oferta.edadGenero}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Lugar:
          </label>
          <textarea
            className="form-control"
            id="lugar"
            name="lugar"
            value={oferta.lugar}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Telefono:
          </label>
          <textarea
            className="form-control"
            id="telefono"
            name="telefono"
            value={oferta.telefono}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Correo:
          </label>
          <textarea
            className="form-control"
            id="correo"
            name="correo"
            value={oferta.correo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Horarios:
          </label>
          <textarea
            className="form-control"
            id="horarios"
            name="horarios"
            value={oferta.horarios}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Categoria:
          </label>
          <textarea
            className="form-control"
            id="categoria"
            name="categoria"
            value={oferta.categoria}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Actualizar datos" : "Crear oferta"}
        </button>
      </form>
    </div>
  );
}

export default OfertForm;
