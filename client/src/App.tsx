import React from 'react';
import { ThemeProvider } from '@mui/material';
import { Helmet } from 'react-helmet';

import { theme } from './theme/theme';
import { Main } from './app/main/Main';

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Shopping List</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </>
  );
};
