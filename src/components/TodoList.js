import React from 'react'
import Todo from './Todo'

export default ({ todos, onTodoClick, submitNewText }) => (
  <div className="todo-container">
    {
      todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          onClick={() => onTodoClick(todo.id)}
          submitNewText={submitNewText} />
      ))
    }
  </div>
)
