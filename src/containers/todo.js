import { connect } from 'react-redux';
import Todo from '../components/todo';
import { todoAdd, todoRemove, todoEdit, todoCompleted } from '../actions/todo';

const mapStateToProps = state => ({
  data: {
    ...state,
    todoList: state.todoList.slice().sort((a, b) => a.title < b.title),
  },
});

const mapDispatchToProps = dispatch => ({
  todoAdd: (todo) => {
    dispatch(todoAdd(todo))
  },
  todoEdit: (todo) => {
    dispatch(todoEdit(todo))
  },
  todoRemove: (todoIndex) => {
    dispatch(todoRemove(todoIndex))
  },
  todoCompleted: (todoIndex) => {
    dispatch(todoCompleted(todoIndex))
  },
});

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todo);

export default TodoContainer;
