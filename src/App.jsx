import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoItems from "./components/todo-items";
import TodosBody from "./components/todos-body";
import TodosFooter from "./components/todos-footer";
import TodosHeader from "./components/todos-header";
import "./App.css";
import TodoModal from "./components/todo-modal";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("saved"))) {
      dispatch({
        type: "INITIALIZE_TODOS",
        payload: [...JSON.parse(localStorage.getItem("saved"))],
      });
    } else {
      dispatch({
        type: "INITIALIZE_TODOS",
        payload: [],
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <div className="card">
            <TodosHeader />
            <TodosBody />
            <TodoItems />
            <TodosFooter />
            <TodoModal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
