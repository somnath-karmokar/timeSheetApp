import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../_actions";
import styles from "./LeftComponent.module.css";

function LeftComponent() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  return (
    <div class={styles.sidenav}>
      <Link to="/profile">
        {" "}
        <img
          src={"/Public/Images/img1.jpeg"}
          alt="img1"
          border="0"
          height="100px"
        />
        <span>
          <img
            src={"/Public/Images/arrow.png"}
            alt="img1"
            border="0"
            height="100px"
          />
        </span>
      </Link>
      <Link to="/admin">
        {" "}
        <img
          src={"/Public/Images/img2.jpeg"}
          alt="img2"
          border="0"
          height="100px"
        />{" "}
      </Link>
      <div className={styles.dot}></div>
    </div>
  );
}

export { LeftComponent };
