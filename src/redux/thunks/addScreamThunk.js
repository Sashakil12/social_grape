import {
  addScreamFailed,
  addScreamSuccess,
  addScreamStarted
} from "../actions/screamAddActions";
import axios from "../../utils/axios";

export const addScream = body => dispatch => {
  dispatch(addScreamStarted());
  axios
    .post(`/addScream`, body)
    .then(res => {
      console.log(res.data);
      dispatch(addScreamSuccess(res.data));
    })
    .catch(err => {
      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            console.log(err.response.data);
            dispatch(addScreamFailed(err.response.data));
          }
        }
        console.log(err.response);
      }
      console.log(err);
    });
};
