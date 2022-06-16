import { useContext, useState } from 'react';
import { GithubContext } from '../../contexts';

function UserSearchBar() {
  const [text, setText] = useState('');
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (text === '') {
      alert('Please enter a username');
      return;
    }

    searchUsers(text);
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
