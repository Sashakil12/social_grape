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
      console.log(err);
      dispatch(userImageUploadFailed(err));
    });
};
