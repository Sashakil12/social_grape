import { userLogout } from "../actions/useractions";
import axios from "../../utils/axios";
import { structureError } from "../../utils/structureError";

export const LogUserOut = () => dispatch => {
  localStorage.removeItem("FBIdToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch(userLogout());
};
