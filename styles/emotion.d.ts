import '@emotion/react';
declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: {
        mainBack: string;
        cardBack: string;
        soft: string;
      };
      neutral: {
        head: string;
        paragraph: string;
        stat: string;
      };
    };
  }
}
