import { useContext, useState } from 'react';
import { AlertContext, githubActions, GithubContext } from '../../contexts';

function UserSearchBar() {
  const [text, setText] = useState('');
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  function handleTextChange(e) {
    setText(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter a username');
      return;
    }

    dispatch({
      type: 'SET_IS_LOADING',
      payload: true
    });

    const users = await githubActions.searchUsers(text);

    dispatch({
      type: 'SET_USERS',
      payload: users
    });
  }

  function clearUsers() {
    dispatch({
      type: 'CLEAR_USERS'
    });
  }

  return (
    <div className='grid grid-cols-1 grid-rows-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search for a username'
                value={text}
                onChange={handleTextChange}
              />
              <button className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'>
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div className='mx-auto'>
          <button className='btn btn-primary btn-lg' onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearchBar;
