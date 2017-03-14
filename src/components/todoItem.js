import React from 'react';
import '../../styles/todoItem.scss';

const TodoItem = props => (
  <li className="todoItem">
    <a 
      href="#"
      className={props.completed ? 'completed' : ''}
      onClick={props.onComplete}
    >
      {props.title}
    </a>
    <button onClick={props.onEdit}>Edit</button>
    <button onClick={props.onRemove}>Remove</button>
  </li>
);

export default TodoItem;
