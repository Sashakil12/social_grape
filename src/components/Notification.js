import React, { Fragment } from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NotificationIcon from "@material-ui/icons/Notifications";

class Notification extends React.Component {
  state = { open: false };
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };
  state = { open: false };
  render() {
    return (
      <Fragment>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleToggle}
        >
          <NotificationIcon />
        </Button>
        <Menu
          id="simple-menu"
          keepMounted
          onClose={() => {
            this.handleToggle();
          }}
          open={this.state.open}
        >
          {this.props.notifications &&
            this.props.notifications.map(not => (
              <MenuItem>
                {not.sender} {not.type === "like" ? "liked" : "commented"} on
                your Scream
              </MenuItem>
            ))}
        </Menu>
      </Fragment>
    );
  }
}

export default Notification;
