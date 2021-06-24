import React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
        }
      `}
    />
  );
};
