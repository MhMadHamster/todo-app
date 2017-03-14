import React, { Component } from 'react';
import TodoItem from './todoItem';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleAddTodo() {
    if (!this.state.value) return;

    const { todoAdd } = this.props;

    todoAdd({
      title: this.state.value,
      edit: false,
      completed: false,
    });

    this.setState({
      value: '',
    });
  }

  render() {
    const { 
      data, 
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
          <button onClick={this.handleAddTodo}>Add</button>
        </div>
        <ul>
          {data.todoList.map((todo, index) => (
            <TodoItem
              {...todo}
              onComplete={todoCompleted}
              onEdit={todoEdit}
              onRemove={todoRemove}
              key={index}
              index={index}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Todo;
