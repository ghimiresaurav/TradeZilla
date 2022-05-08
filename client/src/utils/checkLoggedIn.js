const isLoggedIn = () =>
  localStorage.getItem("name") &&
  localStorage.getItem("userId") &&
  localStorage.getItem("token") &&
  localStorage.getItem("email");

export default isLoggedIn;
