import axios from "../../utils/axios";
import {
  profileFetchStarted,
  userProfileFetchSucceed,
  userScreamsFetchSucceed,
  userProfileFetchFailed
} from "../actions/profilefetchactions";

export const getScreamsByHandle = handle => dispatch => {
  dispatch(profileFetchStarted());
  axios
    .get(`/user/${handle}`)
    .then(res => {
      console.log(res.data);
      dispatch(userProfileFetchSucceed(res.data.user));
      dispatch(userScreamsFetchSucceed(res.data.screams));
    })
    .catch(err => {
      console.log(err);
      console.log(err.response);
      dispatch(userProfileFetchFailed("Could not fetch profile"));
    });
};
