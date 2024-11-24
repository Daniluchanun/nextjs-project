import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Movie Details',
    description: 'Detailed information about the selected movie',
};

type Props = { children: React.ReactNode };

const MovieInfo = ({children}: Props): JSX.Element => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MovieInfo;
