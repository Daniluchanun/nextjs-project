'use client';

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import styles from './SearchComponent.module.css';
import {getMoviesByQuery} from "@/app/services/api.services";
import {IResult} from "@/app/models/IResult";

const Search = () => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<IResult[]>([]);
    const [showResults, setShowResults] = useState<boolean>(false);

    useEffect(() => {
        const fetchResults = async () => {
            if (query.trim() !== '') {
                const data = await getMoviesByQuery(query);
                setResults(data.slice(0, 5));
            } else {
                setResults([]);
            }
        };

        fetchResults();
    }, [query]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleBlur = () => {
        setTimeout(() => setShowResults(false), 200);
    };

    const handleFocus = () => {
        setShowResults(true);
    };

    return (
        <div className={styles.searchContainer}>
            <input type="text" className={styles.searchInput} placeholder="Search movies..."
                   value={query} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}/>
            {showResults && results.length > 0 && (
                <div className={styles.resultsContainer}>
                    {results.map((movie) => (
                        <Link key={movie.id} href={`/movies/${movie.id}`} className={styles.resLink}>
                            <div className={styles.resultItem}>
                                <strong>{movie.title}</strong> ({movie.release_date.split('-')[0]})
                            </div>
                        </Link>
                    ))}
                    <Link href={`/search?query=${query}`} className={styles.showAll}>
                        Show all results
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Search;
