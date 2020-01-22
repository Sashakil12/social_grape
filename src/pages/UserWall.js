import React, { Fragment } from "react";
import { connect } from "react-redux";

import { getScreamsByHandle } from "../redux/thunks/getScreamsByHandleThunk";
import Grid from "@material-ui/core/Grid";
import WallProfile from "../components/userWall/profileDispay";
import ScreamWall from "../components/userWall/ScreamsDisplay";

class UserWall extends React.Component {
  state = { loading: "" };
  componentDidMount() {
    console.log(this.props.match.params);
    const handle = this.props.match.params.handle;
    this.props.getScreamsByHandle(handle);
  }
  render() {
    const { user, screams, loading } = this.props;
    console.log(this.props);
    return (
      <Grid container spacing={10}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Fragment>
            <Grid item sm={8} xs={12}>
              <ScreamWall screams={screams} />
            </Grid>
            <Grid item sm={4} xs={12}>
              <WallProfile profile={user} />
            </Grid>
          </Fragment>
        )}
      </Grid>
    );
  }
}
const mapStateToProps = state => ({
  user: state.profile.profile,
  screams: state.profile.screams,
  loading: state.profile.loading
});
const mapDispatchToProps = dispatch => ({
  getScreamsByHandle: handle => dispatch(getScreamsByHandle(handle))
});
export default connect(mapStateToProps, mapDispatchToProps)(UserWall);
