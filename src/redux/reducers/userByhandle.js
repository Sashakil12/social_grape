import { profileFetch } from "../types";
const INITIAL_STATE = {
  loading: true,
  profile: null,
  screams: [],
  error: null
};
const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case profileFetch.PROFILE_FETCH_STARTED:
      return {
        ...INITIAL_STATE,
        loading: true
      };
    case profileFetch.USER_PROFILE_FETCH_SUCCEED:
      return {
        ...state,
        profile: action.payload
      };
    case profileFetch.USER_SCREAM_FETCH_SUCCEED:
      return {
        ...state,
        loading: false,
        screams: [...action.payload]
      };
    case profileFetch.PROFILE_FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default profileReducer;
