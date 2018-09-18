import React, { Component } from 'react'
import TodoListContainer from './components/containers/TodoListContainer';
import AddTodo from './components/AddTodo';

export default class App extends Component {
  render () {
    return (
      <div>
        <TodoListContainer />
        <AddTodo />
      </div>
    )
  }
}
