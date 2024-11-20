'use client';

import React from 'react';
import styles from './styleRating.module.css'

interface StarsRatingProps {
    rating: number;
}

const StarsRating: React.FC<StarsRatingProps> = ({rating}) => {
    const ratingPercentage = (rating / 10) * 100;
    return (
        <div className={styles.containerForRatingLine}>
            <div className={styles.ratingLine}>
                <div style={{
                        width: `${ratingPercentage}%`,
                        height: '100%',
                        backgroundColor: rating >= 7 ? 'green' : rating >= 4 ? 'gray' : 'red',
                }}>
                </div>
            </div>
            <span>{rating.toFixed(1)}</span>
        </div>
    );
};

export default StarsRating;
