import { connect } from 'react-redux';
import Todo from '../components/todo';
import { todoAdd, todoRemove, todoEdit, todoEditDone, todoCompleted } from '../actions/todo';

const mapStateToProps = state => ({
  data: state,
});

const mapDispatchToProps = dispatch => ({
  todoAdd: (todo) => {
    dispatch(todoAdd(todo))
  },
  todoEdit: (todoIndex) => {
    dispatch(todoEdit(todoIndex))
  },
  todoRemove: (todoIndex) => {
    dispatch(todoRemove(todoIndex))
  },
  todoEditDone: (todo) => {
    dispatch(todoEditDone(todo))
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
