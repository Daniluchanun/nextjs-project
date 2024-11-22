'use client';

import React, { FC } from 'react';
import styles from './GenreBadge.module.css';

type GenreBadgeProps = {
    genre: { id: number; name: string };
    onClick: (genreId: number) => void;
};

const GenreBadge: FC<GenreBadgeProps> = ({ genre, onClick }) => {
    return (
        <div className={styles.genreBadge} onClick={() => onClick(genre.id)}>
            {genre.name}
        </div>
    );
};

export default GenreBadge;