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
      todo = state.todoList[action.payload.todoIndex];
      todo = {
        ...todo,
        edit: !todo.edit,
        title: action.payload.title,
      };
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.payload.todoIndex),
          todo,
          ...state.todoList.slice(action.payload.todoIndex + 1),
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
