import React, { Component } from 'react'
import TodoListContainer from './components/containers/TodoListContainer'
import FilterContainer from './components/containers/FilterContainer'
import HeaderContainer from './components/containers/HeaderContainer';

export default class App extends Component {
  render () {
    return (
      <div className="app">
        <div className="card">
          <HeaderContainer />
          <TodoListContainer />
        </div>
      </div>
    )
  }
}
