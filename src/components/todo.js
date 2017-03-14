import React, { Component } from 'react';
import TodoItem from './todoItem';
import '../../styles/todo.scss';

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
      <div className="todo-wrapper">
        <h1>ToDo App</h1>
        <div className="todo-input">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button onClick={this.handleAddTodo}>Add</button>
        </div>
        <ul className="todo-list">
          {data.todoList.map(todo => (
            <TodoItem
              {...todo}
              onComplete={todoCompleted}
              onEdit={todoEdit}
              onRemove={todoRemove}
              key={todo.todoId}
            />
          ))}
        </ul>
      </div>
    );
  }
}

Todo.propTypes = {
  data: React.PropTypes.shape({
    todoList: React.PropTypes.array,
  }).isRequired,
  todoCompleted: React.PropTypes.func.isRequired,
  todoRemove: React.PropTypes.func.isRequired,
  todoEdit: React.PropTypes.func.isRequired,
  todoAdd: React.PropTypes.func.isRequired,
};

export default Todo;
