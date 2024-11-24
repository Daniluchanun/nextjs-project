import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'MoviesLayout',
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
