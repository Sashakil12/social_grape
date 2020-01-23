import {
  userSignUpStarted,
  userSignUpSuccess,
  userSignUpFailed
} from "../actions/useractions";
import { getUserData } from "../thunks/loginThunk";
import axios from "../../utils/axios";

export const signUserUp = (userData, history) => dispatch => {
  dispatch(userSignUpStarted());
  axios
    .post("/signup", userData)
    .then(res => {
      localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;
      dispatch(userSignUpSuccess(res.data.token));
      dispatch(getUserData());
      history.push("/");
    })
    .catch(err => {

      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            dispatch(userSignUpFailed(err.response.data));
          }
        }
      }
    });
};
