import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
//MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
export class Navbar extends Component {
  render() {
    const { auth, logOut, history } = this.props;
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            <Button color="inherit">
              <Link to="/">Home</Link>
            </Button>
            {auth ? (
              <Button
                color="inherit"
                onClick={() => {
                  logOut();
                  history.push("/");
                }}
              >
                logout
              </Button>
            ) : (
              <div>
                <Button color="inherit" />
                <Link to="/login">login</Link>
                <Button />
                <Button color="inherit" />
                <Link to="/signup">sign up</Link>
                <Button />
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(Navbar);
