import React from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Movies by Genre',
    description: 'View movies categorized under the selected genre.',
};

type Props = { children: React.ReactNode };

const GenreConcreteLayout = ({children}: Props): JSX.Element => {
    return (
        <div>
            {children}
        </div>
    );
};

export default GenreConcreteLayout;
