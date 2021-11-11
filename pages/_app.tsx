import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';

const theme = {
  colors: {
    primary1: 'hsl(31, 77%, 52%)',
    primary2: 'hsl(184, 100%, 22%)',
    primary3: 'hsl(179, 100%, 13%)',
    neutral1: 'hsla(0, 0%, 100%, 0.75)',
    neutral2: 'hsl(0, 0%, 95%)'
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
