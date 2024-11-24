import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GenreConcreteLayout',
};

type Props = { children: React.ReactNode };

const GenreConcreteLayout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  );
};

export default GenreConcreteLayout;
