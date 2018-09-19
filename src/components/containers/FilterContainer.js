import { connect } from 'react-redux'
import { changeFilter } from '../../actions/index'
import FilterButton from '../FilterButton'

const mapStateToProps = (state, ownProps) => ({
  active: state.filter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onFilterClick: () => dispatch(changeFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton)
