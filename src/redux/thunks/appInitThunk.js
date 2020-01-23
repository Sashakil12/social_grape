import {
  appInitDataFetchFailed,
  appInitDataFetchStarted,
  appInitDataFetchSuccess
} from "../actions/dataactions";
import axios from "../../utils/axios";

export const loadScreams = () => dispatch => {
  dispatch(appInitDataFetchStarted());
  axios
    .get("/screams")
    .then(data => {
      dispatch(appInitDataFetchSuccess(data.data));
    })
    .catch(err => {
      if (typeof err === "object") {
        if (err.hasOwnProperty("response")) {
          if (err.response.hasOwnProperty("data")) {
            dispatch(appInitDataFetchFailed(err.response.data));
          }
        }
      }
    });
};
