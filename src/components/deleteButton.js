import React, { Fragment } from "react";

//mui staff
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteForever";
//for dialog
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
//Thunk
import { deleteScream } from "../redux/thunks/deleteThunk";
import { connect } from "react-redux";
class DeleteButton extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  openWarning = () => {
    this.setState({
      open: true
    });
  };
  closeWarning = () => {
    this.setState({
      open: false
    });
  };
  handleDelete = () => {
    this.props.delete(this.props.screamId);
    this.closeWarning();
  };
  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <IconButton onClick={this.openWarning}>
          <DeleteIcon />
        </IconButton>

        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirm delete scream?"}
          </DialogTitle>

          <DialogActions>
            <Button onClick={this.closeWarning} color="primary" autoFocus>
              No
            </Button>
            <Button onClick={this.handleDelete} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  delete: id => dispatch(deleteScream(id))
});
export default connect(null, mapDispatchToProps)(DeleteButton);
