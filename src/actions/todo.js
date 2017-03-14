export function todoAdd(todo) {
  return {
    type: 'TODO_ADD',
    payload: todo,
  };
}

export function todoEdit(todoIndex) {
  return {
    type: 'TODO_EDIT',
    payload: todoIndex,
  };
}

export function todoEditDone(todo) {
  return {
    type: 'TODO_EDIT_DONE',
    payload: todo,
  };
}

export function todoCompleted(todoIndex) {
  return {
    type: 'TODO_COMPLETED',
    payload: todoIndex,
  };
}

export function todoRemove(todoIndex) {
  return {
    type: 'TODO_REMOVE',
    payload: todoIndex,
  };
}
