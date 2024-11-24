import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SearchLayout',
};

type Props = { children: React.ReactNode };

const SearchLayout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  );
};

export default SearchLayout;
