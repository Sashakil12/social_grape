import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { connect } from "react-redux";
//components
import LikeButton from "./likeScream";
import DeleteButton from "./deleteButton";
import PropType from "prop-types";
import Comment from "./Comment";
//muiStyles
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
//Thunk
import { loadScreams } from "../redux/thunks/appInitThunk";

dayjs.extend(relativeTime);
const styles = {
  card: {
    display: "flex",
    marginBottom: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};
class Screams extends React.Component {
  componentDidMount() {
    this.props.loadScreams();
    console.log("mounted");
  }

  render() {
    const {
      data: { screams },
      classes,
      currentUserHandle,
      userAuth
    } = this.props;
    return (
      <div>
        {!screams ? (
          <p>Loading...</p>
        ) : (
          screams.map(scr => {
            return (
              <Card className={classes.card} key={scr.screamId}>
                <CardMedia
                  image={scr.userImage}
                  title="profile image"
                  className={classes.image}
                />
                <CardContent className={classes.content}>
                  <Link to={`/users/${scr.userHandle}`}>
                    <Typography variant="h5" color="primary">
                      {scr.userHandle}
                    </Typography>
                  </Link>
                  <Typography variant="body2" color="textSecondary">
                    {dayjs(scr.createdAt).fromNow()}
                  </Typography>
                  <Typography variant="body1">{scr.body}</Typography>
                  {!userAuth ? (
                    <Typography>Please log in to see more...</Typography>
                  ) : (
                    <Fragment id="interaction">
                      <LikeButton screamId={scr.screamId} />
                      <Comment
                        commentCount={scr.commentCount}
                        screamId={scr.screamId}
                      />
                      {currentUserHandle === scr.userHandle ? (
                        <DeleteButton screamId={scr.screamId} />
                      ) : (
                        ""
                      )}
                    </Fragment>
                  )}
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    );
  }
}
Screams.propTypes = {
  data: PropType.array.isRequired
};
const mapStateToProps = state => ({
  userAuth: state.user.authenticated,
  data: state.data,
  likes: state.user.likes,
  currentUserHandle: state.user.credentials.handle
});
const mapDispatchToProps = dispatch => ({
  loadScreams: screams => dispatch(loadScreams(screams))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Screams));
