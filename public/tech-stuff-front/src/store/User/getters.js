const getters = {
  user: state => state.user,
  users: state => state.users,
  pagination: state => state.pagination,
  errorUsers: state => state.errorUsers,
  errorRegister: state => state.errorRegister,
  errorLogin: state => state.errorLogin
};

export default getters;
