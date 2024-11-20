'use client'
import {getGenres} from "@/app/services/api.services";
import {useEffect, useState} from "react";
import {IGenres} from "@/app/models/IGenres";


export default function Home() {

    const [genres, setGenres] = useState<IGenres[]>([])
    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const genres = await getGenres();
                setGenres(genres);
            } catch (e) {
                console.error('Error fetching genres:', e);
            }
        }
        fetchGenres();

    }, [])


    return (
        <div>
            Main Page
            <hr/>
            <div>{genres.map(res => (<div key={res.id}>{res.name} - {res.id}</div>))}</div>
        </div>
    );
}
