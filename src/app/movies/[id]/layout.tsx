import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MovieInfo',
};

type Props = { children: React.ReactNode };

const MovieInfo = ({ children }: Props): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  );
};

export default MovieInfo;
