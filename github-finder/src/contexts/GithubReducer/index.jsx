function githubReducer(state, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
        isSearchingUsers: false
      };

    case 'SET_IS_SEARCHING_USERS':
      return {
        ...state,
        isSearchingUsers: true
      };

    case 'CLEAR_USERS':
      return {
        ...state,
        users: []
      };

    default:
      return state;
  }
}

export default githubReducer;
