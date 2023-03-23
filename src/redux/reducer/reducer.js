import {
  SHOW_LIST,
  SHOW_ERROR,
  SET_LOADING,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_GENERATE,
  SET_USER_LOGGED_OUT,
  SET_SNAKBAR
} from "../constants/type";

const intialState = {
  isLoading: false,
  data: [],
  error: "",
  accessToken: "",
  message: ""
}

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        data: [],
        accessToken: "",
        error: "error",
        message: action.payload,
        isLoading: false
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      };
    case SHOW_LIST:
      return {
        ...state,
        isLoading: false,
        error: "",
        accessToken: action.payload,
        data: action.payload,
      };
    case FETCH_TOKEN_GENERATE:
      return {
        ...state,
        isLoading: false,
      }
    case FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: "",
        accessToken: action.payload.token,
      }
    case SET_USER_LOGGED_OUT:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: "",
        accessToken: null,
        message: ""
      }
    case SET_SNAKBAR:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: "",
        accessToken: null,
        message: action.payload
      }
    default:
      return state;
  }
}
export default reducer;

