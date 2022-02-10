import React from "react";
import { useSelector } from "react-redux";

const TodosFooter = () => {
  const todos = useSelector((state) => state.todos.todos);
  function saveHandler() {
    localStorage.setItem("saved", JSON.stringify(todos));
  }
  return (
    <div className="card-footer">
      <button className="btn save-btn" onClick={saveHandler}>
        Saqlash
      </button>
    </div>
  );
};

export default TodosFooter;
