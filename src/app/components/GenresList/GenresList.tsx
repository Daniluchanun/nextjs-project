'use client'
import React, {useEffect, useState} from 'react';
import {IGenres} from "@/app/models/IGenres";
import {getGenres} from "@/app/services/api.services";
import styles from "@/app/components/GenresList/GenresList.module.css";
import Link from "next/link";

const GenresList = () => {
    const [genres, setGenres] = useState<IGenres[]>([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const genresData = await getGenres();
            setGenres(genresData);
        };

        fetchGenres();
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.genreList}>
                {genres.map((genre) => (
                    <Link key={genre.id} href={`/genres/${genre.id}`}>
                        <div className={styles.genreBadge}>{genre.name}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default GenresList;