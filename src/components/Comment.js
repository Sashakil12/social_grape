import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

//comment list
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

//Dialog
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";
import CommentIcon from "@material-ui/icons/Comment";
import CircularProgress from "@material-ui/core/CircularProgress";
import CloseIcon from "@material-ui/icons/Close";
//Thunk
import { fetchCurrentScream } from "../redux/thunks/commentFetchThunk";
import { postComment } from "../redux/thunks/postCommentThunk";
//dayjs
dayjs.extend(LocalizedFormat);

dayjs().format("L LT");
class Comment extends Component {
  state = {
    open: false,
    comment: ""
  };

  viewComments = () => {
    this.props.fetchScream(this.props.screamId);
    this.setState({
      open: true
    });
  };
  hideComments = () => {
    this.setState({
      open: false
    });
  };
  handleSubmit = () => {
    this.props.postComment({ body: this.state.comment }, this.props.screamId);
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { currentScream, loading } = this.props;
    return (
      <Fragment>
        <Fragment>
          <IconButton onClick={this.viewComments}>
            <CommentIcon />
            {this.props.commentCount}
          </IconButton>
        </Fragment>
        <Dialog
          open={this.state.open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {loading ? (
            <CircularProgress />
          ) : (
            <Fragment>
              <DialogContent>
                <CloseIcon onClick={this.hideComments} />
                <List>
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="profile" src={currentScream.userImage} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={"@" + currentScream.userHandle}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {currentScream.body}
                          </Typography>

                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            {" got " +
                              currentScream.likeCount +
                              " likes and " +
                              currentScream.commentCount +
                              " comments!"}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
                {currentScream.comments.map(comment => (
                  <List key={comment.createdAt}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="profile" src={comment.userImage} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={"@" + comment.userHandle}
                        secondary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              color="textPrimary"
                            >
                              {comment.body}
                            </Typography>

                            <Typography
                              component="span"
                              variant="body2"
                              color="textPrimary"
                            >
                              {dayjs(comment.createdAt).format("L LT")}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </List>
                ))}
              </DialogContent>

              <DialogActions>
                <TextField
                  name="comment"
                  id="comment"
                  type="text"
                  placeholder="type to comment..."
                  onChange={this.handleChange}
                />
                <IconButton onClick={this.handleSubmit}>
                  <SendIcon />
                </IconButton>
              </DialogActions>
            </Fragment>
          )}
        </Dialog>
      </Fragment>
    );
  }
}
Comment.propTypes = {
  currentScream: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  fetchScream: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  currentScream: state.data.currentScream.scream,
  loading: state.data.currentScream.loading,
  error: state.data.currentScream.error
});
const mapDispatchToProps = dispatch => ({
  fetchScream: id => dispatch(fetchCurrentScream(id)),
  postComment: (comment, screamId) => dispatch(postComment(comment, screamId))
});
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
