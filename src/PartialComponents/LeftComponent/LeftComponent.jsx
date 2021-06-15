import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../_actions";
import styles from "./LeftComponent.module.css";

function LeftComponent() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const [selectedMenu, setSelectedMenu] = useState("Profile");
  const [menuList, setMenuList] = useState(null);
  const menuListData = [
    { title: "Profile", image: "/Public/Images/img1.jpeg", link: "/profile" },
    { title: "Admin", image: "/Public/Images/img2.jpeg", link: "/admin" },
  ];
  function menuClick(menu) {
    setSelectedMenu(menu);
  }

  function createMenu() {
    let menuListObj = menuListData.map((menu) => (
      <Link onClick={(e) => menuClick(menu.title)} to={menu.link}>
        <span key={menu.title} className={styles.icon}>
          <img src={menu.image} alt={menu.title} border="0" height="100px" />
        </span>
        {menu.title === selectedMenu && (
          <span className={styles.arrow}>
            <img
              src={"/Public/Images/arrow.png"}
              alt="img1"
              border="0"
              height="100px"
            />
          </span>
        )}
      </Link>
    ));
    setMenuList(menuListObj);
  }

  useEffect(() => {
    createMenu();
  }, []);

  useEffect(() => {
    createMenu();
  }, [selectedMenu]);

  return <div class={styles.sidenav}>{menuList}</div>;
}

export { LeftComponent };
