'use client'
import React, {FC} from 'react';
import {IResult} from "@/app/models/IResult";
import PosterPreview from "@/app/components/PosterPreview/PosterPreview";
import StarsRating from "@/app/components/StarsRating/StarsRating";
import styles from './style.module.css'
import Link from "next/link";

type IProps = {
    movie: IResult
}

export const MoviesListCard: FC<IProps> = ({movie}) => {

    return (
        <div key={movie.id} className={styles.movieCard}>
            <Link href={`/movies/${movie.id}`} className={styles.classForLinkTag}>
                <PosterPreview image={movie.backdrop_path} description={movie.title}/>
                <div className={styles.underImageContainer}>
                    <h3 className={styles.title}>{movie.title}</h3>
                    <p>Release Date: {movie.release_date}</p>
                    <StarsRating rating={movie.vote_average}/>
                </div>
            </Link>
        </div>
    );
};

export default MoviesListCard;