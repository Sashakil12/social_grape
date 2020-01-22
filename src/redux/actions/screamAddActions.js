import { screamTypes } from "../types";
export const addScreamStarted = () => ({
  type: screamTypes.SCREAM_ADD_STARTED
});
export const addScreamSuccess = scream => ({
  type: screamTypes.SCREAM_ADD_SUCCESS,
  payload: scream
});
export const addScreamFailed = err => ({
  type: screamTypes.SCREAM_ADD_FAILED,
  payload: err
});
