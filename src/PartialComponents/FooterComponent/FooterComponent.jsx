import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../../_actions';
import styles from './FooterComponent.module.css';

function FooterComponent() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();

       

    return (
       
        <div className={styles.navbar}>
            
            <div class={styles.middle}><p><small>&copy; Copyright 2021, The Co-operative Group </small></p> </div>
            <a href="/login" className={styles.right}></a>
    
        </div>
    
    );
}

export { FooterComponent };