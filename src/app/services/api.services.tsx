import {IResponse} from "@/app/models/IResponse";
import {IGenres} from "@/app/models/IGenres";
import {IResult} from "@/app/models/IResult";

// const API_KEY = 'f17b6eb55c0155c2b0d4cbd272180706';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTdiNmViNTVjMDE1NWMyYjBkNGNiZDI3MjE4MDcwNiIsIm5iZiI6MTczMTg1MjM1OS41ODYyNjcsInN1YiI6IjY3MzhhN2NlNmEwMmEyNGQ3YjIxNTY4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qGlrGMeM03kTO-_mbTr1rze2M9Pd9cEPpQscK-A9s7U'; // Замініть на свій токен

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`
    }

};

export const getMovies = async (page: number): Promise<IResponse> => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
};

export const getMovieById = async (id: string | string[]): Promise<IResult> => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};

export const getGenres = async (): Promise<IGenres[]> => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en-US`, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.genres;
};

export const getMoviesByGenre = async (genreId: string | string [], page: number): Promise<IResponse> => {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&page=${page}`, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data:IResponse = await response.json();
    return data;
};