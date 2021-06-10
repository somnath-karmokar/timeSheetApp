import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../_actions";
import styles from './HeaderComponent.module.css';

function HeaderComponent() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  return <h1 className={styles.title}>Header</h1>;
}

export { HeaderComponent };
