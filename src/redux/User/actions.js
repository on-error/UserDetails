export const addUser = (user) => {
  return {
    type: 'add',
    payload: user,
  }
}

export const deleteUser = (id) => {
  return {
    type: 'delete',
    payload: id
  }
}