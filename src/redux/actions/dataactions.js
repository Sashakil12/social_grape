import { initTypes, likeTypes } from "../types";

export const appInitDataFetchStarted = () => ({
  type: initTypes.APP_INIT_DATA_FETCH_STARTED
});

export const appInitDataFetchSuccess = data => ({
  type: initTypes.APP_INIT_DATA_FETCH_SUCCESS,
  payload: data
});
export const appInitDataFetchFailed = error => ({
  type: initTypes.APP_INIT_DATA_FETCH_FAILED,
  payload: error
});
export const likeScream = scream => ({
  type: likeTypes.LIKE_SCREAM,
  payload: scream
});

export const unlikeScream = scream => ({
  type: likeTypes.UNLIKE_SCREAM,
  payload: scream
});
