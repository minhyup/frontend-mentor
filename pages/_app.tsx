import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';

const theme = {
  color: {
    primary: 'red'
  }
};

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
