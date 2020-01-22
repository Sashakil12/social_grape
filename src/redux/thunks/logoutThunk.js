import { userLogout } from "../actions/useractions";
import axios from "../../utils/axios";

export const LogUserOut = () => dispatch => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch(userLogout());
};
