import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';

const theme = {
  color: {
    primary: {
      mainBack: 'hsl(233, 47%, 7%)',
      cardBack: 'hsl(244, 38%, 16%)',
      soft: 'hsl(277, 64%, 61%)'
    },
    neutral: {
      head: 'hsl(0, 0%, 100%)',
      paragraph: 'hsla(0, 0%, 100%, 0.75)',
      stat: 'hsla(0, 0%, 100%, 0.6)'
    }
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
