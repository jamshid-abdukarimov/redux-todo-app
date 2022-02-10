import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/action";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const TodosBody = () => {
  const value = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();
  return (
    <div className="card-body">
      <form className="d-flex justify-content-between">
        <input
          value={value}
          onChange={(e) =>
            dispatch({ type: "CHANGE_INPUT_VALUE", payload: e.target.value })
          }
          type="text"
          placeholder="Topshiriq kirting..."
          className="form-control me-2"
          onKeyPress={(e) => {
            if (e.which === 13) {
              e.preventDefault();
              addTodo(e, value, dispatch);
            }
          }}
        />
        <BsFillPlusSquareFill
          className="addButton"
          onClick={(e) => addTodo(e, value, dispatch)}
        />
      </form>
    </div>
  );
};

export default TodosBody;
