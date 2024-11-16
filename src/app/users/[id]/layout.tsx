import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'UserLayout',
};

type Props = { children: React.ReactNode };

const UserLayout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  );
};

export default UserLayout;
