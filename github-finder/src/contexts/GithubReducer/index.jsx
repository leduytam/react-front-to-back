function githubReducer(state, action) {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };

    case 'SET_USER_REPOS':
      return {
        ...state,
        repos: action.payload,
        isLoading: false
      };

    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: true
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
