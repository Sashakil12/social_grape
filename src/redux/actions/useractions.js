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
export const userDataFetchSuccess = userData => ({
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

export const userLogout = () => ({
  type: userTypes.USER_LOGOUT_SUCCESS
});
export const userImageUploadStarted = image => ({
  type: userTypes.USER_IMAGE_UPLOAD_STARTED,
  payload: image
});
export const userImageUploadSucceed = () => ({
  type: userTypes.USER_IMAGE_UPLOAD_SUCCESS
});
export const userImageUploadFailed = err => ({
  type: userTypes.USER_IMAGE_UPLOAD_FAILED,
  payload: err
});
export const userBioUpdateStarted = () => ({
  type: userTypes.USER_BIO_UPDATE_STARTED
});
export const userBioUpdateSuccess = () => ({
  type: userTypes.USER_BIO_UPDATE_SUCCESS
});
export const userBioUpdateFailed = err => ({
  type: userTypes.USER_BIO_UPDATE_FAILED,
  payload: err
});
