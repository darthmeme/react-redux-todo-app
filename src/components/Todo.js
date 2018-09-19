import React from 'react'

export default ({ todo, onClick, submitNewText }) => {
  let input

  return (
      <div
        className={todo.completed ? 'todo completed' : 'todo'}>
        <div className="checkbox" onClick={onClick}>
          <div className="inner"></div>
        </div>
        <input
          ref={node => input = node}
          className="item"
          value={todo.todo}
          onChange={() => submitNewText({ id: todo.id, text: input.value })} />
      </div>
    )
  }
