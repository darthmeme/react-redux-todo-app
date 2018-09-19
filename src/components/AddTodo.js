import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/index'

let input

let AddTodo = ({ dispatch }) => (
  <div>
    <input ref={node => input = node} />
    <button onClick={() => {
      if (input.value) {
        dispatch(addTodo(input.value))
      }

      input.value = ''
    }}>Add</button>
  </div>
)

AddTodo = connect()(AddTodo)

export default AddTodo
