import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../_actions";
// import styles from './LeftComponent.module.css';

function LeftComponent() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  return <h1>Left Panel</h1>;
}

export { LeftComponent };
