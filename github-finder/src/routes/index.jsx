const routes = {
  home: {
    path: '/'
  },
  about: {
    path: '/about'
  },
  notfound: {
    path: '*'
  },
  users: {
    path: '/users',
    user: {
      path: '/users/:login'
    }
  }
};

export default routes;
