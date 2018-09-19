import React from 'react'
import FilterContainer from './containers/FilterContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => (
  <div className="header">
    <div className="title">Tasks</div>
    <FontAwesomeIcon className="add" icon="plus-circle" />
    <div className="filters">
      <FilterContainer filter='ALL'>All</FilterContainer>
      <FilterContainer filter='TODO'>Todo</FilterContainer>
      <FilterContainer filter='COMPLETED'>Completed</FilterContainer>
    </div>
  </div>
)
