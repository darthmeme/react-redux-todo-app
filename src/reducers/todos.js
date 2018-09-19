const initialState = [
  {
    id: 100,
    todo: 'Finish this app',
    completed: false
  },
  {
    id: 101,
    todo: 'Lunch with Sofia',
    completed: false
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.payload)
    case 'TOGGLE_TODO':
      return state.map(todo => 
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'MODIFY_TODO':
      return state.map(todo => 
        todo.id === action.payload.id
          ? { ...todo, todo: action.payload.newText }
          : todo
      )
    default:
      return state
  }
}
