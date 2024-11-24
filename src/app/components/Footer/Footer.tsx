import React from 'react';
import Link from "next/link";
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logoSection}>
                    <h2 className={styles.logo}>FilmFreeway</h2>
                    <p className={styles.description}>
                        Discover the world of cinema with us! Watch, discuss and vote for your favorite movies.
                    </p>
                </div>
                <div className={styles.links}>
                    <h3>Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/movies">Movies</Link></li>
                        <li><Link href="/genres">Genres</Link></li>
                        <li><Link href="/">Contacts</Link></li>
                    </ul>
                </div>
                <div className={styles.social}>
                    <h3>Our social</h3>
                    <div className={styles.icons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>© 2024 FilmFreeway. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;