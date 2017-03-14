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
      index,
      title
    } = this.props;
    return (
      <li className="todoItem">
        <input
          className={completed ? 'completed' : ''}
          onClick={!edit ? () => onComplete(index) : () => {}}
          value={this.state.value}
          readOnly={!edit}
          onChange={this.handleChange}
        />
        <button
          onClick={() => onEdit({
            title: this.state.value,
            todoIndex: index,
          })}
        >Edit</button>
        <button onClick={() => onRemove(index)}>Remove</button>
      </li>
    );
  }
}

export default TodoItem;
