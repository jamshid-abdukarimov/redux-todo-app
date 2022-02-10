import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./todo-item";

const TodoItems = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <ul className="list-group list-group-flush">
      {todos.length ? (
        todos.map((todo, index) => (
          <TodoItem key={todo.id} index={index} id={todo.id} text={todo.text} />
        ))
      ) : (
        <h3 className="my-4 text-center">Topshiriqlar hali mavjud emas!</h3>
      )}
    </ul>
  );
};

export default TodoItems;
