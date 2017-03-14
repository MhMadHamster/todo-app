import { v4 } from 'node-uuid';

export function todoAdd(todo) {
  return {
    type: 'TODO_ADD',
    payload: {
      ...todo,
      todoId: v4(),
    },
  };
}

export function todoEdit(todo) {
  return {
    type: 'TODO_EDIT',
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
