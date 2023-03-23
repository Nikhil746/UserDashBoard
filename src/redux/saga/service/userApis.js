import axios from "axios";

export const fetchData = async () => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users"
  return await axios.get(apiUrl)
}

export const tokenApi = async (credentials) => {
  const data  = await axios.post("https://userdashboard.onrender.com/user/login", credentials)
  return data;
}

export const setUserApi = async (credentials) => {
  const data = await axios.post("https://userdashboard.onrender.com/user/register", credentials)
  return data;
}