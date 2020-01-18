import React, { Component } from "react";
import { Link } from "react-router-dom";

//MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            <Button color="inherit">
              <Link to="/">Home</Link>
            </Button>
            <Button color="inherit" />
            <Link to="/login">login</Link>
            <Button />
            <Button color="inherit" />
            <Link to="/signup">sign up</Link>
            <Button />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
