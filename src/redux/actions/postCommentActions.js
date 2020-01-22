import { postCommentTypes } from "../types";
export const postCommentStarted = () => ({
  type: postCommentTypes.POST_COMMENT_STARTED
});
export const postCommentSucceed = (scream) => ({
    type: postCommentTypes.POST_COMMENT_SUCCESS,
    payload: scream
});
export const postCommentFailed = err => ({
  type: postCommentTypes.POST_COMMENT_FAILED,
  payload: err
});
