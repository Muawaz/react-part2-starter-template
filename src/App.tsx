import { useReducer } from "react";
import "./App.css";
import HomePage from "./state-management/HomePage";
import taskReducer from "./state-management/reducers/taskReducer";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";
import authReducer from "./state-management/reducers/authReducer";
import AuthContext from "./state-management/contexts/authContext";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch: authDispatch }}>
      <TasksContext.Provider value={{ tasks, tasksDispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
