'use client'
import React, {FC, useEffect, useState} from 'react';
import {getMovieById} from "@/app/services/api.services";
import {IResult} from "@/app/models/IResult";
import styles from './MovieInfo.module.css'
import StarsRating from "@/app/components/StarsRating/StarsRating";

type IProps = {
    id: string | string[] | undefined;
}
const MovieInfo: FC<IProps> = ({id}) => {
    const [movie, setMovie] = useState<IResult | null>(null)

    useEffect(() => {
        const fetchMovie = async () => {
            if (id) {
                const movieData = await getMovieById(id)
                setMovie(movieData);
            }
        }
        fetchMovie()
    }, [id]);
    if (!movie) return <div>Loading...</div>;
    return (
        <div className={styles.mainContainer}>
            <div className={styles.helpContainer}>
                <img className={styles.imageProps} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      alt={movie.title}/>
                <div className={styles.descriptionContainer}>
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                    <p className={styles.descriptionText}>{movie.overview}</p>
                    <StarsRating rating={movie.vote_average}/>
                    <div className={styles.buttonContainer}>
                        <button className={`${styles.button} ${styles.watchButton}`}>Watch</button>
                        <button className={`${styles.button} ${styles.trailerButton}`}>Trailer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;