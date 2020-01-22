import { fetchScreamTypes } from "../types";

export const commentFetchStarted = () => ({
  type: fetchScreamTypes.SINGLE_SCREAM_FETCH_STARTED
});
export const commentFetchSuccess = scream => ({
  type: fetchScreamTypes.SINGLE_SCREAM_FETCH_SUCCEED,
  payload: scream
});
export const commentFetchFailed = err => ({
  type: fetchScreamTypes.SINGLE_SCREAM_FETCH_FAILED,
  payload: err
});
