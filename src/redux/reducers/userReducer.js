import { userTypes } from "../types";
const initialState = {
  token: undefined,
  authenticated: false,
  credentials: {},
  likes: [],
  notifications: [],
  loading: false,
  errors: {
    email: null,
    password: null,
    error: null
  }
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_LOGIN_STARTED:
      return {
        ...state,
        loading: true,
        errors: initialState.errors,
        authenticated: false
      };
    case userTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        errors: {
          ...action.payload
        },

        authenticated: false,
        loading: false
      };
    case userTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        authenticated: true,
        loading: false,
        errors: initialState.errors
      };
    case userTypes.USER_DATA_FETCH_STARTED:
      return {
        ...state,
        loading: true
      };
    case userTypes.USER_DATA_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        credentials: { ...action.payload.credentials },
        likes: [...action.payload.likes],
        errors: initialState.errors
      };
    case userTypes.USER_DATA_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        errors: {
          ...action.payload
        }
      };
    default:
      return state;
  }
};
export default userReducer;
