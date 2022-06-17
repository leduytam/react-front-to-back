const URL_Requests = {
  users: {
    url: 'users',
    search: function (username) {
      const params = new URLSearchParams({
        q: username
      });

      return `search/users?${params}`;
    },
    get: function (username) {
      return `users/${username}`;
    },
    repos: function (username, params) {
      if (params) {
        return `users/${username}/repos?${new URLSearchParams(params)}`;
      }

      return `users/${username}/repos`;
    }
  }
};

export default URL_Requests;
