import {
  userImageUploadStarted,
  userImageUploadSucceed,
  userImageUploadFailed
} from "../actions/useractions";
import axios from "../../utils/axios";
import { getUserData } from "./loginThunk";

export const UploadImage = FormData => dispatch => {
  dispatch(userImageUploadStarted);
  axios
    .post("/user/image", FormData)
    .then(() => {
      dispatch(getUserData());
      dispatch(userImageUploadSucceed());
    })
    .catch(err => {
      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            dispatch(userImageUploadFailed(err.response.data));
          }
        }
      }
    });
};
