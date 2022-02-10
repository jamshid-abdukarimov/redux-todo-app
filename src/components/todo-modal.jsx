import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeTodo, keyPressHandler, notChangeTodo } from "../actions/action";

const TodoModal = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const value = useSelector((state) => state.todos.modalValue);

  return (
    <div className="modal-wrapper">
      <div className="todo-modal d-flex flex-column justify-content-between">
        <h3 className="todo-modal_title">O'zgartirish kiriting!</h3>
        <input
          value={value}
          type="text"
          className="form-control"
          placeholder=""
          autoFocus={true}
          onChange={(e) =>
            dispatch({ type: "CHANGE_MODAL_VALUE", payload: e.target.value })
          }
          onKeyPress={(e) => keyPressHandler(e, value, todos, dispatch)}
        />
        <div className="todo-modal_btns d-flex justify-content-end">
          <button
            onClick={() => changeTodo(value, todos, dispatch)}
            className="ok-btn"
          >
            OK
          </button>
          <button
            onClick={() => notChangeTodo(value, todos, dispatch)}
            className="no-btn"
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
