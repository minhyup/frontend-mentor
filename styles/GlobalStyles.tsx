import React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        // reset
        body {
          margin: 0;
          padding: 0;
        }

        // root
        @font-face {
          font-family: 'Inter';
          font-weight: 400, 700;
          src: url('https://fonts.google.com/specimen/Inter');
        }
        @font-face {
          font-family: 'Lexend Deca';
          font-weight: 400;
          src: url('https://fonts.google.com/specimen/Lexend+Deca');
        }

        body {
          font-size: 15px;
          font-family: -apple-system, system-ui, HelveticaNeue, AppleSDGothicNeo, sans-serif;
        }

        h1,
        h2,
        h3,
        p {
          margin: 0;
          padding: 0;
        }
        em {
          font-style: normal;
        }

        ol,
        ul,
        li {
          list-style: none;
        }

        fieldset,
        img {
          border: 0;
        }
        img {
          max-width: 100%;
        }
      `}
    />
  );
};
