import React from 'react'

export default ({ active, onFilterClick, children }) => (
  <div
    className={active ? 'filter active' : 'filter'}
    onClick={onFilterClick}>
    { children }
  </div>
)
