'use client';

import React from 'react';
import styles from './styleRating.module.css';

interface StarsRatingProps {
    rating: number;
}

const StarsRating: React.FC<StarsRatingProps> = ({ rating }) => {
    return (
        <div>
            <p className={styles.ratingText}>
               <span className={styles.ratingRed}>{rating.toFixed(1)}</span> / 10
            </p>
        </div>
    );
};

export default StarsRating;
