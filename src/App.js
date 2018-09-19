import React, { Component } from 'react'
import TodoListContainer from './components/containers/TodoListContainer'
import FilterContainer from './components/containers/FilterContainer'
// import AddTodo from './components/AddTodo'
import StandardHeader from './components/StandardHeader';

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <div className="card">
          <StandardHeader />
          {/* <AddTodo /> */}
          <TodoListContainer />
        </div>
      </div>
    )
  }
}
