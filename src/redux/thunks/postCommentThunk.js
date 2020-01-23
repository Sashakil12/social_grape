import {
  postCommentStarted,
  postCommentSucceed,
  postCommentFailed
} from "../actions/postCommentActions";
import axios from "../../utils/axios";

export const postComment = (commentBody, screamId) => dispatch => {
  dispatch(postCommentStarted());
  axios
    .post(`/scream/${screamId}/comment`, commentBody)
    .then(res => {
      dispatch(postCommentSucceed(res.data));
    })
    .catch(err => {
      dispatch(postCommentFailed("Could not submit!"));
    });
};
