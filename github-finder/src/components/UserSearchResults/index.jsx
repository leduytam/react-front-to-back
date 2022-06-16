import { useContext } from 'react';
import { GithubContext } from '../../contexts';
import Spinner from '../Spinner';
import UserItem from '../UserItem';

function UserSearchResults() {
  const { users, isSearchingUsers } = useContext(GithubContext);

  if (isSearchingUsers) {
    return <Spinner />;
  }

  return (
    <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserSearchResults;
