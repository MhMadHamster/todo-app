import React from 'react';

const TodoItem = props => (
  <li className={props.complete ? 'completed' : ''}>
    {props.title}
  </li>
);

export default TodoItem;
