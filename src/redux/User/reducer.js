const INITIAL_STATE = {
  allUsers : []
}

const users = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case 'add':
      console.log(state);
      return {
        ...state, allUsers: [...state.allUsers, payload]
      };
    case 'delete':
      console.log(state);
      return {
        ...state, allUsers: state.allUsers.filter((item) => item.id !== payload)
      };
    default:
      return state;
  }
}

export default users;