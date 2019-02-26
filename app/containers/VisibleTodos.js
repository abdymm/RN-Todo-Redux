import { connect } from "react-redux";
import TodoList from "../components/TodoList";

import { toggleTodo } from "../actions";

import Label from "../constants/Label";

const mapStateToProps = state => {
  let todos = state.todos;

  todos = todos.filter(function(todo) {
    switch (state.visibilityFilter) {
      case Label.FILTER_SHOW_COMPLETE:
        return todo.completed;
      case Label.FILTER_SHOW_INCOMPLETE:
        return !todo.completed;
      default:
        return todo;
    }
  });
  let props = { todos: todos, filterStatus: state.visibilityFilter };
  return props;
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
