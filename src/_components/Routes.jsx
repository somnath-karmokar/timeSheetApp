import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from ".";
import { ProfilePage } from "../ProfilePage";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";

function Routes() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />{" "}
      <PrivateRoute  path="/profile" component={ProfilePage} />{" "}
      <Route path="/login" component={LoginPage} />{" "}
      {/* <Route path="/" component={LoginPage} />{" "} */}
      <Route path="/register" component={RegisterPage} />{" "}
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export { Routes };
