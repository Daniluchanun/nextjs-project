import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PostLayout',
};

type Props = { children: React.ReactNode };

const PostLayout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  );
};

export default PostLayout;
