import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../_actions";
import styles from './HeaderComponent.module.css';

function HeaderComponent() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const loggedIn = false;

  return (
       
    <div className={styles.navbar}>
        
       {user ? ( 
         <div ><div class={styles.middle}> <p>Welcome {user.firstName }</p> </div>  <a href="/login" className={styles.right}>Logout</a> </div>
         ) : ( <div class={styles.middle}> <p>Welcome to Co-operative Timesheet</p></div> )}
       
        
        
    </div>

);
}

export { HeaderComponent };
