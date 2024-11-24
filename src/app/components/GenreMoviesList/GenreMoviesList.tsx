'use client'
import React, {useEffect, useState} from 'react';
import {useParams} from "next/navigation";
import {IResult} from "@/app/models/IResult";
import {getGenres, getMoviesByGenre} from "@/app/services/api.services";
import styles from '../../components/GenreMoviesList/GenreMoviesList.module.css';
import MoviesListCard from "@/app/components/MoviesListCard/MoviesListCard";
import PaginationComponent from "@/app/components/PaginationComponent/PaginationComponent";
import {IGenres} from "@/app/models/IGenres";

const GenreMoviesPage = () => {
    const {genreId} = useParams()
    const [movies, setMovies] = useState<IResult[]>([])

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const [genreName, setGenreName] = useState<string>('')

    useEffect(() => {
        const fetchMovies = async () => {

            if (genreId){
                const data = await getMoviesByGenre(genreId, currentPage)
                setTotalPages(data.total_pages)
                setMovies(data.results);
            }
        }
        const fetchGenreName = async () => {
            const genres: IGenres[] = await getGenres(); // Отримуємо список жанрів
            if (typeof genreId === 'string') {
                const genre = genres.find((g) => g.id === parseInt(genreId)); // Знаходимо жанр за ID
                setGenreName(genre ? genre.name : 'Unknown Genre'); // Встановлюємо назву жанру
            } else {
                setGenreName('Unknown Genre'); // Якщо genreId не валідний
            }
        };

        fetchMovies()
        fetchGenreName()
    }, [genreId, currentPage]);
    return (
        <div className={styles.container}>
            <h1 className={styles.mainTitle}>Movies for Genre: <span className={styles.spanText}>{genreName}</span></h1>
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