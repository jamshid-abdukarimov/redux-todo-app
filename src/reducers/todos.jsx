const initialState = {
  todos: [],
  value: "",
  modalValue: "",
};
const SET_TODO = "SET_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const MARK_TODO = "MARK_TODO";
const INITIALIZE_TODOS = "INITIALIZE_TODOS";
const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
const CHANGE_MODAL_VALUE = "CHANGE_MODAL_VALUE";
const CHANGE_TODO = "CHANGE_TODO";

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case MARK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => todo),
      };
    case INITIALIZE_TODOS:
      return { ...state, todos: action.payload };
    case CHANGE_INPUT_VALUE:
      return { ...state, value: action.payload };
    case CHANGE_MODAL_VALUE:
      return { ...state, modalValue: action.payload };
    case CHANGE_TODO:
      return {
        ...state,
        todos: [...action.payload],
      };
    default:
      return state;
  }
};
