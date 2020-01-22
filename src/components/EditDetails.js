import React, { Component, Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ToolTip from "@material-ui/core/Tooltip";
import KeyboardCapslockIcon from "@material-ui/icons/KeyboardCapslock";
import { connect } from "react-redux";
// MUI dialogue
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
//Thunk
import { updateUserBio } from "../redux/thunks/updateBioThunk";
class EditDetails extends Component {
  state = {
    open: false,
    location: "",
    website: "",
    bio: ""
  };
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = () => {
    const userData = {
      location: this.state.location,
      website: this.state.website,
      bio: this.state.bio
    };
    this.props.updateUserBio(userData);
  };
  componentDidMount() {
    const { location, website, bio } = this.props.credentials;
    this.setState({
      bio: bio,
      location: location,
      website: website
    });
  }
  render() {
    const { open, location, bio, website } = this.state;
    return (
      <Fragment>
        {!open ? (
          <ToolTip title="edit bio" placement="bottom-end">
            <IconButton onClick={this.handleToggle}>
              <KeyboardCapslockIcon />
            </IconButton>
          </ToolTip>
        ) : (
          <Dialog open={open}>
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Edit or add to your bio your bio or
              </DialogContentText>
              <TextField
                onChange={this.handleChange}
                name="location"
                autoFocus
                id="name"
                label="location"
                type="text"
                value={location}
                fullWidth
              />
              <TextField
                id="bio"
                name="bio"
                label="bio"
                value={bio}
                type="text"
                fullWidth
                onChange={this.handleChange}
              />
              <TextField
                id="website"
                name="website"
                value={website}
                label="website"
                type="text"
                fullWidth
                onChange={this.handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleToggle}>Cancel</Button>
              <Button onClick={this.handleSubmit}>
                {bio && location && website ? "Update" : "Add"}
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  credentials: state.user.credentials
});
const mapDispatchToProps = dispatch => ({
  updateUserBio: userdata => dispatch(updateUserBio(userdata))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditDetails);
