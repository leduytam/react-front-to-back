import { createContext, useReducer } from 'react';
import { methods, URL_Requests } from '../../APIs';
import githubReducer from '../GithubReducer';

export const GithubContext = createContext();

export default function GithubProvider({ children }) {
  const initialState = {
    users: [],
    isSearchingUsers: false
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  async function searchUsers(username) {
    setIsSearchingUsers(true);

    const response = await methods.get(URL_Requests.users.search(username));

    if (!response.ok) {
      setIsSearchingUsers(false);

      alert(
        `An error occurred while searching for users.`
      );

      return;
    }

    const { items: users } = await response.json();

    setUsers(users);
  }

  function setUsers(users) {
    dispatch({
      type: 'SET_USERS',
      payload: users
    });
  }

  function setIsSearchingUsers(isSearchingUsers) {
    dispatch({
      type: 'SET_IS_SEARCHING_USERS',
      isSearchingUsers
    });
  }

  function clearUsers() {
    dispatch({
      type: 'CLEAR_USERS'
    });
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isSearchingUsers: state.isSearchingUsers,
        searchUsers,
        clearUsers
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}
