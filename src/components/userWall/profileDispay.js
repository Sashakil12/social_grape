import React, { Fragment } from "react";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

//MUI
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import MuiLink from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";
import "../profile.scss";
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
const WallProfile = ({ classes, profile }) => {
  return (
    <Paper className={classes.paper}>
      <div className="profile">
        <div className={classes.profileImage}>
          <img src={profile.imageUrl} alt="profile" class="image" />
        </div>
        <hr />
        <div className={classes.profileDetails}>
          
          {profile.bio && (
            <Typography variant="body2">{profile.bio}</Typography>
          )}
          <hr />
          {profile.location && (
            <Fragment>
              <LocationOn color="primary" /> <span>{profile.location}</span>
              <hr />
            </Fragment>
          )}
          {profile.website && (
            <Fragment>
              <LinkIcon color="primary" />
              <a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {"  "}
                {profile.website}
              </a>
              <hr />
            </Fragment>
          )}
          <CalendarToday color="primary" />
          <span>Joined {dayjs(profile.createdAt).format("MMM YY")}</span>
        </div>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(WallProfile);
