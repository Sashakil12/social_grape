import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../assets/grape--v2.png";
import { Link } from "react-router-dom";
import { signUserUp } from "../redux/thunks/signUpThunk";
import { connect } from "react-redux";
// /Mui staff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
const styles = {
  form: {
    textAlign: "center"
  },
  image: {
    maxWidth: 100
  },
  header: {
    margin: "10px auto 20px auto",
    fontSize: 35
  },
  button: {
    margin: "15px",
    position: "relative"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  customError: {
    marginTop: "1.5rem",
    color: "red",
    fontSize: "0.8rem"
  },
  progress: {
    position: "absolute",
    color: "#fff"
  }
};

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const userData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle
    };
    this.props.signUserUp(userData, this.props.history);
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { classes } = this.props;
    const { errors, loading } = this.props.user;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt="App icon" className={classes.image} />
          <Typography variant="h1" className={classes.header}>
            Sign Up
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              name="email"
              type="email"
              id="email"
              label="email"
              placeholder="Enter email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
              error={errors.email ? true : false}
              helperText={errors.email}
            />
            <TextField
              name="password"
              type="password"
              id="password"
              label="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
              error={errors.password ? true : false}
              helperText={errors.password}
            />
            <TextField
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              label="confirm password"
              placeholder="confirm password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
              error={errors.password ? true : false}
              helperText={errors.password}
            />
            <TextField
              name="handle"
              type="text"
              id="handle"
              label="handle"
              placeholder="user handle"
              value={this.state.handle}
              onChange={this.handleChange}
              fullWidth
              error={errors.handle ? true : false}
              helperText={errors.handle}
            />
            {errors.error ? (
              <Typography variant="body2" className={classes.customError}>
                {errors.error}
              </Typography>
            ) : (
              ""
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading ? true : false}
            >
              Sign Up
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
              Already have an account? Log In <Link to="/login">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = {
  signUserUp: signUserUp
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SignUp));
