const initialState = {
  todoList: [],
};

function todoReducer(state = initialState, action) {
  let todo;

  switch (action.type) {
    case 'TODO_ADD':
      return {
        ...state,
        todoList: [
          ...state.todoList,
          action.payload,
        ],
      };
    case 'TODO_EDIT':
      todo = state.todoList.slice(action.payload, action.payload + 1);
      todo.edit = true;
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.payload),
          ...todo,
          ...state.todoList.slice(action.payload + 1),
        ],
      };
    case 'TODO_EDIT_DONE':
      todo = state.todoList.slice(action.payload, action.payload + 1);
      todo.edit = false;
      todo.title = action.payload.todoTitle;
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.payload),
          ...todo,
          ...state.todoList.slice(action.payload + 1),
        ],
      };
    case 'TODO_COMPLETED':
      todo = state.todoList[action.payload];
      todo = {
        ...todo,
        completed: !todo.completed,
      };
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.payload),
          todo,
          ...state.todoList.slice(action.payload + 1),
        ],
      };
    case 'TODO_REMOVE':
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.payload),
          ...state.todoList.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
}

export default todoReducer;
