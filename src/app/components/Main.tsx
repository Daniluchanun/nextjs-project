import React from 'react';
import Link from "next/link";
import styles from './main.module.css'

export const Main = () => {
    return (
        <div>
            <ul className={styles.main}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/users">Users</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
                <li>
                    <Link href="/comments">Comments</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};

export default Main;