import axios from "../../utils/axios";
import {
  logInFailed,
  logInUser,
  setUserData,
  userDataFetchStarted,
  userDataFetchSuccess,
  userDataFetchFailed
} from "../actions/useractions";

export const logUserIn = (userData, history) => dispatch => {
  dispatch(logInUser());
  axios
    .post("/login", userData)
    .then(res => {
      localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;

      dispatch(setUserData(res.data.token));
      dispatch(getUserData());
      history.push("/");
    })
    .catch(err => {
      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            dispatch(logInFailed(err.response.data));
          }
        }
      }
    });
};

export const getUserData = () => dispatch => {
  dispatch(userDataFetchStarted());
  axios
    .get("/user")
    .then(res => {
      dispatch(userDataFetchSuccess(res.data));
    })
    .catch(err => {

      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            return dispatch(userDataFetchFailed(err.response.data));
          }
        }
      }
    });
};
