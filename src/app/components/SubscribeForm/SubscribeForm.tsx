'use client';

import React from 'react';
import styles from './SubscribeForm.module.css';

const SubscribeForm = () => {
    return (
        <div className={styles.subscribeContainer}>
            <p className={styles.subscribeText}>
                Fill out the form to receive the latest news from our site!
            </p>
            <div className={styles.subscribeForm}>
                <input type="email" placeholder="E-mail" className={styles.subscribeInput}/>
                <button type="button" className={styles.subscribeButton}>
                    Send <span>➤</span>
                </button>
            </div>
        </div>
    );
};

export default SubscribeForm;