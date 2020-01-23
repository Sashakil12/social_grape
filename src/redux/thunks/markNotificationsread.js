import {
  markNotificationsReadStarted,
  markNotificationsReadSuccess,
  markNotificationsReadFailed
} from "../actions/markNotread";
import axios from "../../utils/axios";

export const markNotificationsRead = notIdArray => dispatch => {
  dispatch(markNotificationsReadStarted());
  axios
    .post("notifications", notIdArray)
    .then(res => {
      dispatch(markNotificationsReadSuccess());
    })
    .catch(err => {

      dispatch(markNotificationsReadFailed());
    });
};
