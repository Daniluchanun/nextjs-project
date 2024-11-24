'use client'
import React from 'react';
import Link from "next/link";
import styles from './MainPageInfo.module.css'
import SubscribeForm from "@/app/components/SubscribeForm/SubscribeForm";

const MainPageInfo = () => {
    return (
        <div className={styles.flexContainer}>
            <h2 className={styles.mainTitle}>Film <span className={styles.spanText}>of</span> the week</h2>
            <div className={styles.mainContainer}>
                <div className={styles.descriptionContainer}>
                    <h3 className={styles.mainTitle}>Dune</h3>
                    <p className={styles.descriptionText}>Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his
                        understanding, must travel to the most dangerous planet in the universe to ensure the future of
                        his family and his people. As malevolent forces explode into conflict over the planet's
                        exclusive supply of the most precious resource in existence-a commodity capable of unlocking
                        humanity's greatest potential-only those who can conquer their fear will survive.</p>
                    <p><span className={styles.spanText}>8</span>/10</p>
                    <Link className={styles.watchButton} href={'/movies/438631'}>Watch</Link>
                </div>
                <img className={styles.poster} src="/posters/dunePoster.jpg" alt="Dune Poster"/>
            </div>
            <SubscribeForm/>
        </div>
    );
};

export default MainPageInfo;