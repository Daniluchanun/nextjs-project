import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Browse Genres',
    description: 'Explore all available movie genres and find your favorite!',
};

type Props = { children: React.ReactNode };

const GenresLayout = ({children}: Props): JSX.Element => {
    return (
        <div>
            {children}
        </div>
    );
};

export default GenresLayout;
