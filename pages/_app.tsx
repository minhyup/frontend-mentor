import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';

const theme = {
  colors: {
    primary1: 'hsl(225, 100%, 94%)',
    primary2: 'hsl(245, 75%, 52%)',
    neutral1: 'hsl(225, 100%, 98%)',
    neutral2: 'hsl(224, 23%, 55%)',
    neutral3: 'hsl(223, 47%, 23%)'
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
