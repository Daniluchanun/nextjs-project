import React from 'react';
import styles from './UserInfo.module.css'

const UserInfo = () => {
    return (
        <div className={styles.mainContainer}>
            {/*<img className={styles.userLogo} src="/images/userIcon.png" alt="User Icon"/>*/}
            <a className={`${styles.signBtn} ${styles.btn}`} href="#"><p>Sign up</p></a>
            <a className={`${styles.loginBtn} ${styles.btn}`} href="#"><p>log in</p></a>
        </div>
    );
};

export default UserInfo;