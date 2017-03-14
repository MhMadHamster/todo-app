import React from 'react';
import '../../styles/todoItem.scss';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.title,
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
      onComplete,
      onEdit,
      onRemove,
      edit,
      completed,
      todoId,
    } = this.props;

    const className = edit ? 'edit' : '';

    return (
      <li className={`${className} todoItem`}>
        <input
          className={completed ? 'completed' : ''}
          onClick={!edit ? () => onComplete(todoId) : () => {}}
          value={this.state.value}
          readOnly={!edit}
          onChange={this.handleChange}
        />
        <button
          className="edit-btn"
          onClick={() => onEdit({
            title: this.state.value,
            todoId,
          })}
        >Edit</button>
        <button
          className="remove-btn"
          onClick={() => onRemove(todoId)}
        >Remove</button>
      </li>
    );
  }
}

TodoItem.propTypes = {
  onComplete: React.PropTypes.func.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
  title: React.PropTypes.string,
  todoId: React.PropTypes.number.isRequired,
  completed: React.PropTypes.bool,
  edit: React.PropTypes.bool,
};

TodoItem.defaultProps = {
  title: '',
  completed: false,
  edit: false,
};

export default TodoItem;
