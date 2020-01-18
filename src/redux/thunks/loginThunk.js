import axios from "../../utils/axios";
import {
  logInFailed,
  logInUser,
  setUserData,
  userDataFetchStarted,
  userdataFetchSuccess,
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
      history.push("/");
      dispatch(getUserData());
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch(logInFailed(err.response.data));
    });
};

const getUserData = () => dispatch => {
  dispatch(userDataFetchStarted());
  axios
    .get("/user")
    .then(res => {
      dispatch(userdataFetchSuccess(res.data));
    })
    .catch(err => {
      console.log(err);
    });
};
