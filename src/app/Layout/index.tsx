import React from 'react';
import { Container } from '@mui/material';

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return <Container maxWidth="sm" sx={{ marginBottom: '60px' }}>{children}</Container>;
};

export default Layout;
