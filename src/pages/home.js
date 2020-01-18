import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import Screams from "../components/Screams";
export class Home extends Component {
  state = {
    screams: null
  };
  componentDidMount() {
    axios.get("/screams").then(data => {
      this.setState({
        screams: data.data
      });
    });
  }
  render() {
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          <Screams screams={this.state.screams} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>sidebar</p>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
