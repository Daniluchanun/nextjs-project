
import React, {useEffect, useState} from 'react';
import MoviesListCard from "@/app/components/MoviesListCard/MoviesListCard";
import {IResult} from "@/app/models/IResult";
import {getMovies} from "@/app/services/api.services";
import styles from './styleMoviesList.module.css'
import PaginationComponent from "@/app/components/PaginationComponent/PaginationComponent";

const MoviesList = () => {
    const [movies, setMovies] = useState<IResult[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 500;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await getMovies(currentPage);
                setMovies(movies.results)
            } catch (err) {
                console.error('Error fetching movies:', err);
            }
        };
        fetchMovies();
    }, [currentPage]);

    return (
        <div className={styles.mainContainer}>
            {movies.map(movie => (<MoviesListCard movie={movie} key={movie.id}/>))}
            <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
        </div>
    );
};

export default MoviesList;