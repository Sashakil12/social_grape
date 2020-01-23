import React, { Fragment } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import NotificationIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

//Thunk
import { markNotificationsRead } from "../redux/thunks/markNotificationsread";
class Notification extends React.Component {
  state = { open: false };
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };
  markRead = () => {
    const notificationIds = this.props.notifications
      .filter(not => !not.read)
      .map(not => not.id);
    this.props.markNotificationsRead({ idArray: [...notificationIds] });
    this.handleToggle();
  };
  render() {
    const { notifications } = this.props;
    return (
      <Fragment>
        <Button variant="text" color="secondary" onClick={this.handleToggle}>
          <Badge
            badgeContent={
              notifications && notifications.filter(n => !n.read).length
            }
            color="primary"
          >
            <NotificationIcon />
          </Badge>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleToggle}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <List>
              {notifications && notifications.length > 0 ? (
                notifications.map(not => (
                  <ListItem key={not.id}>
                    <ListItemText
                      key={not.create}
                      primary="One of your Screams "
                      secondary={`${
                        not.type === "like"
                          ? "got liked by"
                          : "got commented by"
                      } ${not.sender}`}
                    />
                  </ListItem>
                ))
              ) : (
                <ListItem>
                  <ListItemText
                    primary="Sorry!"
                    secondary="No new notifications"
                  />
                </ListItem>
              )}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.markRead} color="primary" autoFocus>
              Mark Read
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  notifications: state.user.notifications
});
const mapDispatchToProps = dispatch => ({
  markNotificationsRead: idArr => dispatch(markNotificationsRead(idArr))
});
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
