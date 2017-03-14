import { v4 } from 'node-uuid';

export const todoAdd = todo => ({
  type: 'TODO_ADD',
  payload: {
    ...todo,
    todoId: v4(),
  },
});

export const todoEdit = todo => ({
  type: 'TODO_EDIT',
  payload: todo,
});

export const todoCompleted = todoIndex => ({
  type: 'TODO_COMPLETED',
  payload: todoIndex,
});

export const todoRemove = todoIndex => ({
  type: 'TODO_REMOVE',
  payload: todoIndex,
});
