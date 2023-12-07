import { useContext } from "react";
import "../css/style.css";
//import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
function Message() {
  const { comment } = useContext(GlobalContext);

  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 my-2">
          {comment && comment.length > 0 ? (
            comment.map((task) => (
              <div
                className="my-3"
                style={{ border: "1px solid black" }}
                key={task.id}
              >
                <h3 className="text-center fon">{task.nombre}</h3>
              </div>
            ))
          ) : (
            <div className="d-flex justify-content-center">
              <p>No hay ofertas disponibles.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Message;
