import img1 from "../img/error.avif";
import "../css/style.css";
function Nofund() {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 d-flex error">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Nofund;
