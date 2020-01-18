import { userTypes } from "../types";

export const logInUser = () => ({
  type: userTypes.USER_LOGIN_STARTED
});

export const setUserData = token => ({
  type: userTypes.USER_LOGIN_SUCCESS,
  payload: token
});
export const logInFailed = error => ({
  type: userTypes.USER_LOGIN_FAILURE,
  payload: error
});

export const userDataFetchStarted = () => ({
  type: userTypes.USER_DATA_FETCH_STARTED
});
export const userdataFetchSuccess = userData => ({
  type: userTypes.USER_DATA_FETCH_SUCCESS,
  payload: userData
});
export const userDataFetchFailed = error => ({
  type: userTypes.USER_DATA_FETCH_FAILED,
  payload: error
});

export const userSignUpStarted = () => ({
  type: userTypes.USER_SIGNUP_STARTED
});

export const userSignUpSuccess = token => ({
  type: userTypes.USER_SIGNUP_SUCCESS,
  payload: token
});

export const userSignUpFailed = error => ({
  type: userTypes.USER_SIGNUP_FAILED,
  payload: error
});
