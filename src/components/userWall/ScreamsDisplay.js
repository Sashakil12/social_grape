import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
//muiStyles
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
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
const WallScream = ({ classes, screams }) => {
  const cardMarkup = screams.map(scr => (
    <div>
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
        </CardContent>
      </Card>
    </div>
  ));

  return <div>{cardMarkup}</div>;
};

export default withStyles(styles)(WallScream);
