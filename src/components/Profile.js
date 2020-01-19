import React, { Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
///MUI stuff
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ToolTip from "@material-ui/core/Tooltip";
import "./profile.scss";
//Redux thunk
import { UploadImage } from "../redux/thunks/imageUploadThunk";
const styles = {
  profile: {},
  profileImage: {
    width: "15vw",
    height: "15vw",
    "&image": {
      backgroundSize: "fit"
    }
  }
};
class Profile extends React.Component {
  constructor() {
    super();
    this.state = "";
  }
  handleUpload = event => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);

    //dispath redux action
    this.props.UploadImage(formData);
  };
  handleAttempt = event => {
    const button = document.getElementById("imageInput");
    button.click();
  };
  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated
      }
    } = this.props;
    let profileMarkup = !loading ? (
      authenticated ? (
        <Paper className={classes.paper}>
          <div className="profile">
            <div className={classes.profileImage}>
              <img src={imageUrl} alt="profile" class="image" />
              <input
                type="file"
                id="imageInput"
                onChange={this.handleUpload}
                hidden="hidden"
              />
              <ToolTip placement="top" title="Change Image">
                <IconButton classNmae="button" onClick={this.handleAttempt}>
                  <EditIcon color="primary" />
                </IconButton>
              </ToolTip>
            </div>
            <hr />
            <div className={classes.profileDetails}>
              <MuiLink component={Link} to={`/users/${handle}`} variant="h5">
                @{handle}
              </MuiLink>
              <hr />
              {bio && <Typography variant="body2">{bio}</Typography>}
              <hr />
              {location && (
                <Fragment>
                  <LocationOn color="primary" /> <span>{location}</span>
                  <hr />
                </Fragment>
              )}
              {website && (
                <Fragment>
                  <LinkIcon color="primary" />
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    {"  "}
                    {website}
                  </a>
                  <hr />
                </Fragment>
              )}
              <CalendarToday color="primary" />
              <span>Joined {dayjs(createdAt).format("MMM YY")}</span>
            </div>
          </div>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <Typography>No profile found please login</Typography>

          <div>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={"/login"}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={"/signup"}
            >
              SignUp
            </Button>
          </div>
        </Paper>
      )
    ) : (
      <p>loading</p>
    );

    return profileMarkup;
  }
}
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  UploadImage: data => dispatch(UploadImage(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Profile));
