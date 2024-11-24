import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GenresLayout',
};

type Props = { children: React.ReactNode };

const GenresLayout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  );
};

export default GenresLayout;
