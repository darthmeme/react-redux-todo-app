import React from 'react'

export default ({ todo, onClick }) => (
  <div
    className={todo.completed ? 'todo completed' : 'todo'}
    onClick={onClick}>
    <div className="checkbox">
      <div className="inner"></div>
    </div>
    <div className="item">{ todo.todo }</div>
  </div>
)
