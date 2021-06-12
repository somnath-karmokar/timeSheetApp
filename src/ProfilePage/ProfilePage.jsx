import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";
import { LeftComponent } from "../PartialComponents/LeftComponent";
import { HeaderComponent } from "../PartialComponents/HeaderComponent";
import { CalendarComponent } from "../PartialComponents/CalendarComponent";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  return (
    <div className={styles.container}>
      <LeftComponent />
      <CalendarComponent />
      <div className={styles.projectList}>
        <table>
          <tr>
            <td>DateCode</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>Backery</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>News & Mags</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>Total</td>
            <td><input type="text" /></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export { ProfilePage };
