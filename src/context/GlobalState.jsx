import { createContext, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
import appReducer from "./AppReducer";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    tasks: [],
    comment: [],
    isLoggedIn: false,
  });
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getOfert");
        const jsonData = await response.json();
        console.log("paso por aqui ");

        dispatch({
          type: "SET_INITIAL_TASKS",
          payload: jsonData,
        });
      } catch (error) {
        console.error("Error fetching data from API:", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchCometFromAPI = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getComment");
        const jsonData = await response.json();
        console.log("paso por aqui ");

        dispatch({
          type: "SET_INITIAL_COMMENT",
          payload: jsonData,
        });
      } catch (error) {
        console.error("Error fetching data from API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDataFromAPI();
    fetchCometFromAPI();
  }, []);

  const logger = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const login = () => {
    dispatch({
      type: "LOGIN",
    });
  };

  const addOfert = async (task) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/addOfert",
        task,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Error al agregar la tarea a la base de datos");
      }
      const newTask = response.data;
      navigate("/ofert");
      dispatch({
        type: "ADD_TASK",
        payload: newTask,
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        swal(
          "Error",
          "Por favor, inicia sesión para realizar esta acción",
          "error"
        );
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("Error updating task:", error);
      }
    }
  };

  const updateOfert = async (updatedTask) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/updateOfert/${updatedTask.id}`,
        updatedTask,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      const updatedTaskFromAPI = response.data;

      swal("Genial!", "Mensaje enviado correctamente", "success");
      navigate("/ofert");
      dispatch({
        type: "UPDATE_TASK",
        payload: updatedTaskFromAPI,
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        swal(
          "Error",
          "Por favor, inicia sesión para realizar esta acción",
          "error"
        );
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("Error updating task:", error);
      }
    }
  };

  const deleteOfert = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/deleteOfert/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      dispatch({
        type: "DELETE_TASK",
        payload: id,
      });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        swal(
          "Error",
          "Por favor, inicia sesión para realizar esta acción",
          "error"
        );
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("Error updating task:", error);
      }
    }
  };

  const addComment = async (task) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/addComment",
        task,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status !== 200) {
        throw new Error("Error al agregar la tarea a la base de datos");
      }
      const newComment = response.data;
      swal(
        "Genial!",
        "Mensaje enviado correctamente, nos porndremos en contacto contigo lo mas pronto posible!",
        "success"
      );
      dispatch({
        type: "ADD_COMMENT",
        payload: newComment,
      });
    } catch (error) {
      alert("error");
      console.error("Error al agregar tarea:", error);
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        comment: state.comment,
        statelogin: state.isLoggedIn,
        addOfert,
        updateOfert,
        deleteOfert,
        addComment,
        logger,
        login,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
