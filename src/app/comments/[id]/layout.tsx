import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CommentLayout',
};

type Props = { children: React.ReactNode };

const CommentLayout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  );
};

export default CommentLayout;
