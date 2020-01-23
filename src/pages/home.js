import React from "react";
import Grid from "@material-ui/core/Grid";
import Screams from "../components/Screams";
import Profile from "../components/Profile";
const Home = () => (
  <Grid container spacing={10}>
    <Grid item sm={8} xs={12}>
      <Screams />
    </Grid>
    <Grid item sm={4} xs={12}>
      <Profile />
    </Grid>
  </Grid>
);

export default Home;
