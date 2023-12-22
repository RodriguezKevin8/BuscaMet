import { Link } from "react-router-dom"; // Asegúrate de tener React Router si estás utilizando rutas

import "../css/style.css";
import img1 from "../img/1.avif";
import referen from "../img/references.avif";
import ico1 from "../img/ico1.png";
import ico2 from "../img/ico2.png";
import ico3 from "../img/ico3.png";

function Home() {
  return (
    <>
      <section>
        <img
          src={img1}
          className="d-block w-100"
          alt="..."
          width="1600"
          height="auto"
        />
      </section>

      <section>
        <div className="container my-3">
          <h2 className="text-center title my-4">Información importante</h2>
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <img
                src={referen}
                alt="Descripción de la imagen"
                className="img-fluid justify-content-center border-bottom my-2 "
                width="1024"
                height="auto"
              />
            </div>
            <div className="col-lg-7 col-md-12 py-4" id="data">
              <h2 className="text-center">
                La forma más fácil de encontrar tus sueños.
              </h2>
              <p className="text-center">
                Busca las oportunidades que están cerca de ti.
              </p>

              <ul className="my-5" style={{ listStyle: "none" }}>
                <li className="my-3">
                  <i
                    className="bi bi-check2-all"
                    style={{ color: "green", fontSize: "25px" }}
                  ></i>
                  Encuentra oportunidades mucho más cerca de ti, fácil y rápido.
                </li>
                <li className="my-3">
                  <i
                    className="bi bi-check2-all"
                    style={{ color: "green", fontSize: "25px" }}
                  ></i>
                  Empleos cerca de tu zona.
                </li>
                <li className="my-3">
                  <i
                    className="bi bi-check2-all"
                    style={{ color: "green", fontSize: "25px" }}
                  ></i>
                  Sin registros, sin complicaciones, la mejor página de empleos
                  para nuestra gente metapaneca.
                </li>
              </ul>
              <div className="d-flex justify-content-center">
                <Link to={"/ofert"}>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    style={{ borderWidth: "1px" }}
                  >
                    Ver Ofertas
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="text-center title my-5">Conócenos</h2>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <img
                className="mx-auto my-auto d-block"
                src={ico1}
                alt="Icono 1"
              />
              <p className="just">
                Buscar un empleo sin tener que iniciar sesión y sin salir de tu
                ciudad nunca ha sido tan sencillo. Nuestra plataforma te ofrece
                la comodidad de explorar oportunidades laborales locales de
                manera fácil y rápida.
              </p>
            </div>
            <div className="col-lg-4 col-md-12">
              <img
                className="mx-auto my-auto d-block"
                src={ico2}
                alt="Icono 2"
              />
              <p className="just">
                Examinamos detenidamente cada oferta laboral para garantizar que
                solo presentamos oportunidades de empleo que sean específicas y
                relevantes para la zona de Metapán. Nos esforzamos por
                proporcionar información precisa y valiosa,
              </p>
            </div>
            <div className="col-lg-4 col-md-12">
              <img
                className="mx-auto my-auto d-block"
                src={ico3}
                alt="Icono 3"
              />
              <p className="just">
                Todos somos 100% metapanecos, y compartimos un compromiso
                profundo con el desarrollo de nuestra comunidad. Nos enorgullece
                contribuir al progreso local, trabajar juntos para fortalecer la
                identidad de Metapán y fomentar un ambiente de crecimiento
                sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
