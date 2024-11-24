'use client'
import React from 'react';
import Link from "next/link";
import styles from './styleHeader.module.css'
import Search from "@/app/components/SearchComponent/Search";
import UserInfo from "@/app/components/UserInfo/UserInfo";


const Header = () => {

    return (
        <div className={styles.mainContainer}>
            <div className={styles.contentContainer}>
                <Link href={'/'}><img className={styles.logo} src="/images/logo.png" alt="Logo"/></Link>
                <ul className={styles.listMenu}>
                    <li><Link href={'/'}>Main</Link></li>
                    <li><Link href={'/movies'}>Movies</Link></li>
                    <li><Link href={'/genres'}>Genres</Link></li>
                </ul>
                <Search/>
                <UserInfo/>
            </div>
            <hr className={styles.line}/>
        </div>
    );
};

export default Header;