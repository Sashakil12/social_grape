import React from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

//muiStyles
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

dayjs.extend(relativeTime);
const styles = {
  card: {
    display: "flex",
    marginBoton: 20
  },
  image: {
    minWidth: 200
  },
  content: {
    padding: 25,
    objectFit: "cover"
  }
};
const Screams = ({ classes, screams }) => {
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
              </CardContent>
            </Card>
          );
        })
      )}
    </div>
  );
};

export default withStyles(styles)(Screams);
