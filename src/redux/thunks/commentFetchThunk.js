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
      console.log(res.data);
      dispatch(commentFetchSuccess(res.data));
    })
    .catch(err => {
      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            console.log(err.response.data);
            dispatch(
              commentFetchFailed(
                "Could not show scream right now. Please try again"
              )
            );
          }
        }
        console.log(err.response);
      }
      console.log(err);
    });
};
