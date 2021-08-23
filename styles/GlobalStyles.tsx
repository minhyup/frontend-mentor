import React from 'react';
import { Global, css } from '@emotion/react';

const resetCss = css`
  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    src: url('/Inter/static/Inter-Regular.ttf');
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 700;
    src: url('/Inter/static/Inter-Bold.ttf');
  }

  @font-face {
    font-family: 'Lexend Deca';
    font-weight: 400;
    src: url('https://fonts.google.com/specimen/Lexend+Deca');
  }

  // reset
  body {
    font-size: 15px;
    font-family: Inter, -apple-system, system-ui, HelveticaNeue, AppleSDGothicNeo, sans-serif;
  }
  body,
  h1,
  h2,
  h3,
  ul,
  li,
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
`;

export const GlobalStyles: React.FC = () => {
  return <Global styles={resetCss} />;
};
