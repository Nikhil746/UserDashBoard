import {
  SHOW_LIST,
  SHOW_ERROR,
  SET_LOADING,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_GENERATE,
  SET_USER_DATA,
  SET_USER_LOGGED_OUT,
  SET_SNAKBAR
} from "../constants/type"

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading
});

export const setUserData = (data) => ({
  type: SET_USER_DATA,
  payload: data
});

export const showError = (error) => ({
  type: SHOW_ERROR,
  payload: error
});

export const showList = (data) => ({
  type: SHOW_LIST,
  payload: data
});

export const fetchTokenSuccess = (payload) => {
  return {
    type: FETCH_TOKEN_SUCCESS,
    payload: payload
  }
}
export const fetchTokenGeneration = (payload) => {
  return {
    type: FETCH_TOKEN_GENERATE,
    payload: payload
  }
}

export const userLoggedOut = () => {
  return {
    type: SET_USER_LOGGED_OUT
  }
}

export const setSnakbar = (payload) => {
  return {
    type: SET_SNAKBAR,
    payload: payload
  }
}

