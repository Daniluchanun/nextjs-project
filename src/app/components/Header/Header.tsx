import React from 'react';
import Link from "next/link";
import styles from './styleHeader.module.css'

const Header = () => {
    return (
        <div>
            <ul className={styles.listMenu}>
                <li><Link href={'/'}>Main</Link></li>
                <li><Link href={'/movies'}>Movies</Link></li>
                <li><Link href={'/'}>Genres</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Header;