const initialState = {
  todoList: [],
};

function todoReducer(state = initialState, action) {
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
      return {
        ...state,
        todoList: state.todoList.map((todoItem) => {
          if (todoItem.todoId === action.payload.todoId) {
            return {
              ...todoItem,
              edit: !todoItem.edit,
              title: action.payload.title,
            };
          }
          return todoItem;
        }),
      };
    case 'TODO_COMPLETED':
      return {
        ...state,
        todoList: state.todoList.map((todoItem) => {
          if (todoItem.todoId === action.payload) {
            return {
              ...todoItem,
              completed: !todoItem.completed,
            };
          }
          return todoItem;
        }),
      };
    case 'TODO_REMOVE':
      return {
        ...state,
        todoList: state.todoList.filter(todoItem => todoItem.todoId !== action.payload),
      };
    default:
      return state;
  }
}

export default todoReducer;
