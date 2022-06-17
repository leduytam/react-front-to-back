import { methods, URL_Requests } from '../../APIs';

async function searchUsers(username) {
  const response = await methods.get(URL_Requests.users.search(username));

  if (!response.ok) {
    throw new Error('Search users failed');
  }

  const { items: users } = await response.json();

  return users;
}

async function getUser(username) {
  const response = await methods.get(URL_Requests.users.get(username));

  if (!response.ok) {
    throw new Error('Get user failed');
  }

  const user = await response.json();

  return user;
}

async function getUserRepos(username) {
  const response = await methods.get(
    URL_Requests.users.repos(username, {
      sort: 'stars',
      per_page: 10
    })
  );

  if (!response.ok) {
    throw new Error('Get user repos failed');
  }

  const repos = await response.json();

  return repos;
}

export { searchUsers, getUser, getUserRepos };
