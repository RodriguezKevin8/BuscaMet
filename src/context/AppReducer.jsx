export default function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "UPDATE_TASK": {
      const updatedTask = action.payload;
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === updatedTask.id) {
          updatedTask.done = task.done;
          return updatedTask;
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "SET_INITIAL_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "SET_INITIAL_COMMENT":
      return {
        ...state,
        comment: action.payload,
      };
    case "ADD_COMMENT":
      return {
        ...state,
        comment: [...state.comment, action.payload],
      };
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
