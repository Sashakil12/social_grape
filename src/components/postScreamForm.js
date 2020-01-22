import React, { Fragment } from "react";
import MyButton from "./MyButton";
import Button from "@material-ui/core/Button";
//icons
import AddIcon from "@material-ui/icons/Add";

//Dialog
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { addScream } from "../redux/thunks/addScreamThunk";
import {connect} from 'react-redux'
class PostAScream extends React.Component {
  state = {
    open: false
  };
  openForm = () => {
    this.setState({
      open: true,
      scream: ""
    });
  };
  closeForm = () => {
    this.setState({
      open: false
    });
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    const ScreamData = { body: this.state.scream };
    this.props.addScream(ScreamData);
    this.closeForm();
  };
  render() {
    const { loading, error } = this.props;
    const { open } = this.state;
    return (
      <Fragment>
        <MyButton tip="post a scream" onClick={this.openForm}>
          <AddIcon color="secondary" />
        </MyButton>
        <Fragment>
          <Dialog open={open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Post A Scream</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Posts are tweets. Keep it short to keep it engaging!
              </DialogContentText>
              <TextField
                onChange={this.handleChange}
                name="scream"
                autoFocus
                margin="dense"
                id="screamfield"
                label="yell or scream"
                type="text"
                value={this.state.scream}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.closeForm} color="primary">
                Cancel
              </Button>
              <Button onClick={this.handleSubmit} color="primary">
                Post
              </Button>
            </DialogActions>
          </Dialog>
        </Fragment>
      </Fragment>
    );
  }
}
const mapStateToProp = state => ({
  loading: state.data.loading,
  error: state.data.error
});
const mapDispatchToProp = dispatch => ({
  addScream: scream => dispatch(addScream(scream))
});
export default connect(mapStateToProp, mapDispatchToProp)(PostAScream);
