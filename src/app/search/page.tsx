'use client';

import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {getMoviesBySearch} from '@/app/services/api.services';
import MoviesListCard from '@/app/components/MoviesListCard/MoviesListCard';
import styles from './SearchPage.module.css';
import {IResult} from "@/app/models/IResult";
import PaginationComponent from "@/app/components/PaginationComponent/PaginationComponent";

const SearchPage = () => {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');
    const [movies, setMovies] = useState<IResult[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchMovies = async () => {
            if (query) {
                setLoading(true);
                const data = await getMoviesBySearch(query, currentPage); // Запит на API
                setMovies(data.results);
                setTotalPages(data.total_pages);
                setLoading(false);
            }
        };

        fetchMovies();
    }, [query, currentPage]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <h1 className={styles.mainText}>Search results for: <span className={styles.spanText}>{query}</span></h1>
                {movies.length === 0 ? (
                    <p className={styles.secondText}>Nothing found for {query}.</p>
                ) : (
                    <div className={styles.moviesList}>
                        {movies.map((movie) => (
                            <MoviesListCard key={movie.id} movie={movie}/>
                        ))}
                    </div>
                )}
            </div>
            <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
        </div>
    );
};

export default SearchPage;
