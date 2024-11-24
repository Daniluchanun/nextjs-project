import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'All Movies',
    description: 'Browse all movies available on our platform',
};

type Props = { children: React.ReactNode };

const MoviesLayout = ({children}: Props): JSX.Element => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MoviesLayout;
