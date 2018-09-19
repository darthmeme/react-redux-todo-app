import { connect } from 'react-redux'
import { addTodo } from '../../actions'
import StandardHeader from '../StandardHeader'

const mapDispatchToProps = dispatch => ({
  addNewTodo: todo => dispatch(addTodo(todo))
})

export default connect(null, mapDispatchToProps)(StandardHeader)
