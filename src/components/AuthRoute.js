import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (auth === true ? <Redirect to="/" /> : <Component {...props} />)}
    />
  );
};

export default AuthRoute;
