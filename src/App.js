import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import jwtDecode from "jwt-decode";

//pages
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signup";
//redux

//components
import Navbar from "./components/Navbar";
import AuthRoute from "./components/AuthRoute";
let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    authenticated = false;
  } else {
    authenticated = true;
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute
              exact
              path="/login"
              component={Login}
              auth={authenticated}
            />
            <AuthRoute
              exact
              path="/signup"
              component={SignUp}
              auth={authenticated}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
