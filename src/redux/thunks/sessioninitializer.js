import { setUserData, userLogout } from "../../redux/actions/useractions";
import { getUserData } from "../../redux/thunks/loginThunk";
import jwtDecode from "jwt-decode";
import axios from "../../utils/axios";
export const sessionInit = () => dispatch => {
  const token = localStorage.FBIdToken;
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      dispatch(userLogout());
    } else {
      dispatch(setUserData(token));
      axios.defaults.headers.common["Authorization"] = token;
      dispatch(getUserData());
    }
  }
};
