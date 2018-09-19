import { connect } from 'react-redux'
import TodoList from '../TodoList'
import { toggleTodo } from '../../actions/index'

const filteredTodods = (todos, filter) => {
  if (filter === 'TODO') {
    return todos.filter(todo => !todo.completed)
  }

  if (filter === 'COMPLETED') {
    return todos.filter(todo => todo.completed)
  }

  return todos
}

const mapStateToProps = state => ({
  todos: filteredTodods(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
