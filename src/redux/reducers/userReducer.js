import { userTypes, likeTypes, notificationsType } from "../types";
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
    confirmPassword: null,
    handle: null,
    error: null
  }
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_LOGIN_STARTED:
    case userTypes.USER_SIGNUP_STARTED:
      return {
        ...state,
        loading: true,
        errors: initialState.errors,
        authenticated: false
      };
    case userTypes.USER_LOGIN_FAILURE:
    case userTypes.USER_SIGNUP_FAILED:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.payload
        },

        authenticated: false,
        loading: false
      };
    case userTypes.USER_LOGIN_SUCCESS:
    case userTypes.USER_SIGNUP_SUCCESS:
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
        notifications: [...action.payload.notifications],
        errors: initialState.errors
      };
    case userTypes.USER_DATA_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        errors: {
          ...state.errors,
          ...action.payload
        }
      };
    case userTypes.USER_IMAGE_UPLOAD_STARTED:
    case userTypes.USER_BIO_UPDATE_STARTED:
      return {
        ...state,
        loading: true,
        errors: initialState.errors
      };
    case userTypes.USER_IMAGE_UPLOAD_SUCCESS:
    case userTypes.USER_BIO_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: initialState.errors
      };
    case userTypes.USER_IMAGE_UPLOAD_FAILED:
    case userTypes.USER_BIO_UPDATE_FAILED:
      return {
        ...state,
        loading: false,
        errors: {
          ...state.errors,
          ...action.payload
        }
      };
    case userTypes.USER_LOGOUT_SUCCESS:
      return initialState;
    case likeTypes.LIKE_SCREAM:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            screamId: action.payload.screamId
          }
        ]
      };
    case likeTypes.UNLIKE_SCREAM:
      return {
        ...state,
        likes: state.likes.filter(l => l.screamId !== action.payload.screamId)
      };
    case notificationsType.MARK_NOTIFICATIONS_READ_STARTED:
      return {
        ...state
      };
    case notificationsType.MARK_NOTIFICATIONS_READ_SUCCESS:
      return {
        ...state,
        notifications: []
      };
    case notificationsType.MARK_NOTIFICATIONS_READ_FAILED:
      return {
        ...state
      };
    default:
      return state;
  }
};
export default userReducer;
