import React, { Fragment } from "react";
import { connect } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import LikeIcon from "@material-ui/icons/ThumbUpAltOutlined";
import UnLikeIcon from "@material-ui/icons/ThumbDownAltOutlined";
import {
  likeThisScream,
  unLikeThisScream
} from "../redux/thunks/likeUnlikeThunk";
class LikeButton extends React.Component {
  likedScream = screamId => {
    if (
      this.props.likes &&
      this.props.likes.find(like => like.screamId === screamId)
    ) {
      console.log("true");
      return true;
    }
    console.log("false");
    return false;
  };

  render() {
    const { screamId } = this.props;
    const liked = this.likedScream(screamId);
    return (
      <Fragment>
        {!liked ? (
          <IconButton onClick={() => this.props.like(screamId)}>
            <LikeIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => this.props.unLike(screamId)}>
            <UnLikeIcon />
          </IconButton>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  likes: state.user.likes
});
const mapDispatchToProps = dispatch => ({
  like: screamId => dispatch(likeThisScream(screamId)),
  unLike: screamId => dispatch(unLikeThisScream(screamId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
