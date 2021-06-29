import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { GlobalStyles } from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';

const theme = {
  color: {
    color1: '#4D96A9',
    color2: '#855Fb1',
    color3: '#28283D',
    color4: '#87879D',
    color5: '#8FE3F9',
    color6: '#D9B8FF',
    color7: '#FAFAFA'
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
