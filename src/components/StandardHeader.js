import React from 'react'
import FilterContainer from './containers/FilterContainer'

export default () => (
  <div className="header">
    <div className="title">Tasks</div>
    <div className="filters">
      <FilterContainer filter='ALL'>All</FilterContainer>
      <FilterContainer filter='TODO'>Todo</FilterContainer>
      <FilterContainer filter='COMPLETED'>Completed</FilterContainer>
    </div>
  </div>
)
