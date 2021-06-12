import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../_actions";
import { PrivateRoute, Routes } from "../_components";
import { HeaderComponent } from "../PartialComponents/HeaderComponent";
import { FooterComponent } from "../PartialComponents/FooterComponent";
import { Router } from "react-router-dom";
import { history } from "../_helpers";
import styles from "./App.module.css";

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Router history={history}>
        <HeaderComponent />
        <Routes />
        <FooterComponent />
      </Router>
    </div>
  );
}

export { App };
