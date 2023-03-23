const isAuthenticated = () => {
  const tokenData = localStorage.getItem("token");
  return tokenData ? true : false;
}

export default isAuthenticated;
