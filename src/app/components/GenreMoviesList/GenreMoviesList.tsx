'use client'
import React, {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import {IResult} from "@/app/models/IResult";
import {getMoviesByGenre} from "@/app/services/api.services";
import styles from '../../components/GenreMoviesList/GenreMoviesList.module.css';
import MoviesListCard from "@/app/components/MoviesListCard/MoviesListCard";
import PaginationComponent from "@/app/components/PaginationComponent/PaginationComponent";

const GenreMoviesPage = () => {
    const {genreId} = useParams()
    const [movies, setMovies] = useState<IResult[]>([])

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    useEffect(() => {
        const fetchMovies = async () => {

            if (genreId){
                const data = await getMoviesByGenre(genreId, currentPage)
                setTotalPages(data.total_pages)
                setMovies(data.results);
            }
        }
        fetchMovies()
    }, [genreId, currentPage]);
    return (
        <div className={styles.container}>
            <h1>Movies for Genre ID: {genreId}</h1>
            <div className={styles.moviesList}>
                {movies.map((movie) => (
                    <MoviesListCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
        </div>
    );
};

export default GenreMoviesPage;