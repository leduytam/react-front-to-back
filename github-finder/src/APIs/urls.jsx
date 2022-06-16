const URL_Requests = {
  users: {
    url: 'users',
    search: function (username) {
      const params = new URLSearchParams({
        q: username
      });

      return `search/users?${params}`;
    }
  }
};

export default URL_Requests;
