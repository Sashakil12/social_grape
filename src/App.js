import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import jwtDecode from "jwt-decode";
import { connect } from "react-redux";
//pages
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import UserWall from "./pages/UserWall";
//redux
import { LogUserOut } from "./redux/thunks/logoutThunk";
import { sessionInit } from "./redux/thunks/sessioninitializer";
//components
import Navbar from "./components/Navbar";

class App extends React.Component {
  componentDidMount() {
    this.props.sessionInit();
  }
  render() {
    const { authenticated } = this.props.user;
    return (
      <div className="App">
        <Navbar
          auth={authenticated ? true : false}
          logOut={this.props.logUserOut}
        />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/users/:handle" component={UserWall} />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = dispatch => ({
  logUserOut: () => dispatch(LogUserOut()),
  sessionInit: () => dispatch(sessionInit())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
