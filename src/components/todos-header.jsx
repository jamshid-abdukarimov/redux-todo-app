import React from "react";
import { useSelector } from "react-redux";

const TodosHeader = () => {
  const todos = useSelector((state) => state.todos.todos);
  const todosCount = todos.length;
  return (
    <div className="card-header">
      <h3>Topshiriqlar: {todosCount}</h3>
    </div>
  );
};

export default TodosHeader;
