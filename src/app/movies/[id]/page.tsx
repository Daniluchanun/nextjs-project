'use client'
import React from 'react';
import MovieInfo from "@/app/components/MovieInfo/MovieInfo";
import {useParams} from "next/navigation";

const MoviePage = () => {
    const {id} = useParams()
    return (
        <div>
            <MovieInfo id={id}/>
        </div>
    );
};

export default MoviePage;