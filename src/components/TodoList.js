import React from 'react'
import Todo from './Todo'

export default ({ todos }) => (
  <ul>
    {
      todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo} />
      ))
    }
  </ul>
)
