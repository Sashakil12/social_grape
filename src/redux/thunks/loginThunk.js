import axios from "../../utils/axios";
import {
  logInFailed,
  logInUser,
  setUserData,
  userDataFetchStarted,
  userdataFetchSuccess,
  userDataFetchFailed,
  userSignUpStarted,
  userSignUpSuccess,
  userSignUpFailed
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
      console.log(err.response.data);
      dispatch(logInFailed(err.response.data));
    });
};

export const getUserData = () => dispatch => {
  dispatch(userDataFetchStarted());
  axios
    .get("/user")
    .then(res => {
      console.log(res.data);
      if (res.data.hasOwnProperty("likes")) {
        return;
      } else {
        res.data.likes = [];
      }
      dispatch(userdataFetchSuccess(res.data));
    })
    .catch(err => {
      console.log(err);
      userDataFetchFailed(err);
    });
};
