export const addTodo = (e, value, dispatch) => {
  e.preventDefault();
  if (!value) {
    return;
  }
  const obj = {
    id: Date.now(),
    text: value,
    isDone: false,
  };
  dispatch({ type: "SET_TODO", payload: obj });
  dispatch({ type: "CHANGE_INPUT_VALUE", payload: "" });
};

export const removeTodo = (e, id, dispatch) => {
  e.preventDefault();
  dispatch({ type: "REMOVE_TODO", payload: id });
};

export const markTodo = (e, index, todos, dispatch) => {
  todos[index].isDone = e.target.checked;
  dispatch({ type: "MARK_TODO" });
};

const hideModal = () => {
  const modalWrapper = document.querySelector(".modal-wrapper");
  modalWrapper.style.top = "-100%";
};

let newIndex = null;
export const showModal = (index, todos) => {
  const modalWrapper = document.querySelector(".modal-wrapper"),
    modalInput = modalWrapper.querySelector("input");
  modalWrapper.style.top = "3%";
  modalInput.placeholder = todos[index].text;
  newIndex = index;
};

export const changeTodo = (value, todos, dispatch) => {
  if (value === "") {
    hideModal();
    return;
  }
  todos[newIndex].text = value;
  dispatch({ type: "CHANGE_TODO", payload: todos });
  dispatch({ type: "CHANGE_MODAL_VALUE", payload: "" });
  hideModal();
};

export const notChangeTodo = () => {
  hideModal();
  return;
};

export const keyPressHandler = (e, value, todos, dispatch) => {
  if (e.which === 13 || e.keyCode === 13) {
    if (value === "") {
      hideModal();
      return;
    }
    todos[newIndex].text = value;
    dispatch({ type: "CHANGE_TODO", payload: todos });
    dispatch({ type: "CHANGE_MODAL_VALUE", payload: "" });
    hideModal();
  }
};
