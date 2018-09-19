import { connect } from 'react-redux'
import TodoList from '../TodoList'
import { toggleTodo, modifyTodo } from '../../actions/index'

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
  onTodoClick: id => dispatch(toggleTodo(id)),
  submitNewText: data => dispatch(modifyTodo({ id: data.id, newText: data.text }))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
