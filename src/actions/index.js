let fixedID = 0

export const addTodo = todo => ({
  type: 'ADD_TODO',
  payload: {
    todo,
    id: fixedID++,
    completed: false
  }
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  payload: id
})

export const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  payload: filter
})
