let fixedID = 0

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: {
    todo,
    id: fixedID++
  }
})
