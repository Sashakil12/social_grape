import axios from "../../utils/axios";
import {
  userBioUpdateSuccess,
  userBioUpdateStarted,
  userBioUpdateFailed
} from "../actions/useractions";
import { getUserData } from "./loginThunk";

export const updateUserBio = userData => dispatch => {
  dispatch(userBioUpdateStarted());
  axios
    .post("/user", userData)
    .then(() => {
      dispatch(getUserData());
      dispatch(userBioUpdateSuccess());
    })
    .catch(err => {
      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            console.log(err.response.data);
            dispatch(userBioUpdateFailed(err.response.data));
          }
        }
        console.log(err.response);
      }
      console.log(err);
    });
};
