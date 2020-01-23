import {
  commentFetchFailed,
  commentFetchStarted,
  commentFetchSuccess
} from "../actions/commentActions";
import axios from "../../utils/axios";

export const fetchCurrentScream = screamId => dispatch => {
  dispatch(commentFetchStarted());
  axios
    .get(`/scream/${screamId}`)
    .then(res => {
      dispatch(commentFetchSuccess(res.data));
    })
    .catch(err => {
      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            dispatch(
              commentFetchFailed(
                "Could not show scream right now. Please try again"
              )
            );
          }
        }
      }
    });
};
