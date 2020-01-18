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
      console.log(res.data);
      localStorage.setItem("FBIdToken", `Bearer ${res.data.token}`);
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${res.data.token}`;
      console.log(res.data);
      dispatch(userSignUpSuccess(res.data.token));
      dispatch(getUserData());
      history.push("/");
    })
    .catch(err => {
      console.log(err.response.data);
      dispatch(userSignUpFailed(err.response.data));
    });
};
