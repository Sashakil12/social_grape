import { profileFetch } from "../types";

export const profileFetchStarted = () => ({
  type: profileFetch.PROFILE_FETCH_STARTED
});

export const userProfileFetchSucceed = userData => ({
  type: profileFetch.USER_PROFILE_FETCH_SUCCEED,
  payload: userData
});
export const userScreamsFetchSucceed = scream => ({
  type: profileFetch.USER_SCREAM_FETCH_SUCCEED,
  payload: scream
});

export const userProfileFetchFailed = er => ({
  type: profileFetch.PROFILE_FETCH_FAILED,
  payload: er
});
