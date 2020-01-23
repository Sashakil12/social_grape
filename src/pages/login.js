import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import AppIcon from "../assets/grape--v2.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// /Mui staff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { logUserIn } from "../redux/thunks/loginThunk";
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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.logUserIn(userData, this.props.history);
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
            Login
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
              Login
              {loading && (
                <CircularProgress size={30} className={classes.progress} />
              )}
            </Button>
            <br />
            <small>
              Don't have an account? Sign up <Link to="/signup">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  logUserIn: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  user: state.user,
});
const mapDispatchToProps = {
  logUserIn
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
