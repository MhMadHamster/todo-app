import React, { Component } from 'react';
import TodoItem from './todoItem';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const { 
      data, 
      todoList, 
      todoAdd, 
      todoCompleted, 
      todoRemove, 
      todoEdit,
    } = this.props;
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button 
            onClick={() => todoAdd({
              title: this.state.value,
              edit: false,
              completed: false,
            })}
          >Add</button>
        </div>
        <ul>
          {data.todoList.map((todo, index) => (
            <TodoItem
              {...todo}
              key={index}
              onComplete={() => todoCompleted(index)}
              onRemove={() => todoRemove(index)}
              onEdit={() => todoEdit(index)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Todo;
