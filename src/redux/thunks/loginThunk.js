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
      console.log(res.data);
      localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;

      dispatch(setUserData(res.data.token));
      dispatch(getUserData());
      history.push("/");
    })
    .catch(err => {
      console.log(err);
      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            console.log(err.response.data);
            dispatch(logInFailed(err.response.data));
          }
        }
        console.log(err.response);
      }
      console.log(err);
    });
};

export const getUserData = () => dispatch => {
  dispatch(userDataFetchStarted());
  axios
    .get("/user")
    .then(res => {
      if (res.data.hasOwnProperty("likes")) {
        dispatch(userDataFetchSuccess(res.data));
      } else {
        res.data.likes = [];
        dispatch(userDataFetchSuccess(res.data));
      }
    })
    .catch(err => {
      console.log(err);

      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            console.log(err.response.data);
            return dispatch(userDataFetchFailed(err.response.data));
          }
        }
        console.log(err.response);
      }
      console.log(err);
    });
};
