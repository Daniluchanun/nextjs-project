import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PostsLayout',
};

type Props = { children: React.ReactNode };

const PostsLayout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  );
};

export default PostsLayout;
