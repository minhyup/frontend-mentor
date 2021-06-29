import React from 'react';
import { Global, css } from '@emotion/react';

const resetCss = css`
  // reset
  body {
    font-size: 15px;
    font-family: -apple-system, system-ui, HelveticaNeue, AppleSDGothicNeo, sans-serif;
  }
  body,
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
`;

export const GlobalStyles: React.FC = () => {
  return <Global styles={resetCss} />;
};
