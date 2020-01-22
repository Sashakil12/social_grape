import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
//MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Notification from "./Notification";
//icons
import HomeIcon from "@material-ui/icons/Home";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import LoginIcon from "@material-ui/icons/VpnKey";
import SignUpIcon from "@material-ui/icons/EmojiPeople";
import PostAScream from "./postScreamForm";
import MyButton from "./MyButton";
export class Navbar extends Component {
  render() {
    const { auth, logOut, history, notifications } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            <Fragment>
              <MyButton tip="Home">
                <Link to="/">
                  <HomeIcon color="secondary" />
                </Link>
              </MyButton>
            </Fragment>
            {auth ? (
              <Fragment>
                <MyButton
                  tip="Logout"
                  onClick={() => {
                    logOut();
                    history.push("/");
                  }}
                >
                  <LogoutIcon color="secondary" />
                </MyButton>
                <PostAScream />
                <MyButton tip="notifications">
                  <Notification notifications={notifications} />
                </MyButton>
              </Fragment>
            ) : (
              <div>
                <MyButton tip="login">
                  <Link to="/login">
                    <LoginIcon color="secondary" />
                  </Link>
                </MyButton>
                <MyButton tip="signOut" />
                <Link to="/signup">
                  <SignUpIcon color="secondary" />
                </Link>
                <MyButton />
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  notifications: state.user.notifications
});

export default connect(mapStateToProps)(withRouter(Navbar));
