import { likeScream, unlikeScream } from "../actions/dataactions";
import axios from "../../utils/axios";

export const likeThisScream = screamId => dispatch => {
  axios
    .get(`/scream/${screamId}/like`)
    .then(res => {
      dispatch(likeScream(res.data));
    })
    .catch(err => {
      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {

            dispatch({ type: "LIKE_FAILED" });
          }
        }
      }
    });
};

export const unLikeThisScream = screamId => dispatch => {
  axios
    .get(`/scream/${screamId}/unlike`)
    .then(res => dispatch(unlikeScream(res.data)))
    .catch(err => {
      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
           dispatch({ type: "UNLIKE_FAILED" });
          }
        }
      }
    });
};
