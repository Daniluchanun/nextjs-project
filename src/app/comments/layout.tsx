import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CommentsLayout',
};

type Props = { children: React.ReactNode };

const CommentsLayout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  );
};

export default CommentsLayout;
