import React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        // reset
        body {
          font-family: Red Hat Display, sans-serif;
          margin: 0;
          padding: 0;
        }

        // root
        @font-face {
          font-family: 'Red Hat Display';
          font-weight: 500, 700, 900;
          src: url('https://fonts.google.com/specimen/Red+Hat+Display');
        }
      `}
    />
  );
};
