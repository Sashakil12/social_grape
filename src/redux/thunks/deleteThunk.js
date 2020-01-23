import {
  screamDeleteFailed,
  screamDeleteSuccess,
  screamdeleteStarted
} from "../actions/deleteActions";
import axios from "../../utils/axios";
export const deleteScream = screamId => dispatch => {
  dispatch(screamdeleteStarted());
  axios
    .delete(`/scream/${screamId}`)
    .then(() => {
      dispatch(screamDeleteSuccess(screamId));
    })
    .catch(err => {
      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            dispatch(screamDeleteFailed());
          }
        }
        dispatch(screamDeleteFailed());
      }
      dispatch(screamDeleteFailed());
    });
};
