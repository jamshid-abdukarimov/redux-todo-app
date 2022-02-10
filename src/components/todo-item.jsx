import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markTodo, removeTodo, showModal } from "../actions/action";
import { BsFillArchiveFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";

const TodoItem = ({ index, id, text }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  return (
    <li className="list-group-item d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <input
          onChange={(e) => markTodo(e, index, todos, dispatch)}
          type="checkbox"
          className="form-check-input me-2 mt-0"
          id={id}
          checked={todos[index].isDone}
        />
        <label
          htmlFor={id}
          className="form-check-label"
          style={
            todos[index].isDone
              ? {
                  textDecoration: "line-through",
                  textDecorationColor: "#AF7EEB",
                  color: "#AF7EEB",
                }
              : { textDecoration: "none" }
          }
        >
          <b>{index + 1}.</b> {text}
        </label>
      </div>
      <div className="d-flex">
        <button
          onClick={() => showModal(index, todos)}
          className="btn btn-outline-warning d-flex align-items-center change-btn"
          style={{ border: "none" }}
        >
          <BsPencilSquare />
        </button>
        <button
          onClick={(e) => removeTodo(e, id, dispatch)}
          className="btn btn-outline-danger d-flex align-items-center"
          style={{ border: "none" }}
        >
          <BsFillArchiveFill />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
