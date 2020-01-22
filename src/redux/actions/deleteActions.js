import { deleteTypes } from "../types";
export const screamdeleteStarted = screamId => ({
  type: deleteTypes.SCREAM_DELETE_STARTED,
  payload: screamId
});

export const screamDeleteSuccess = id => ({
  type: deleteTypes.SCREAM_DELETE_SUCCESS,
  payload: id
});
export const screamDeleteFailed = () => ({
  type: deleteTypes.SCREAM_DELETE_FAILED
});
