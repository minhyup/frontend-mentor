import React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        // reset

        // 1. 공백 제거
        body,
        h1,
        h2,
        button,
        p {
          margin: 0;
          padding: 0;
        }

        // 2.기본 폰트
        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        p {
          font-family: Lexend Deca, sans-serif;
          font-weight: 400;
          font-size: 15px;
          /* line-height: 20px; */
        }

        // 3. 기본 바디 설정
        body {
          /* position: relative;
          background-color: #fff;
          font-size: 13px;
          word-break: break-all; */
        }

        // 4. 기본 스타일 초기화
        ol,
        ul {
          list-style: none;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        img {
          vertical-align: top;
        }

        // root
        @font-face {
          font-family: 'Lexend Deca';
          font-weight: 400;
          src: url('https://fonts.google.com/specimen/Lexend+Deca');
        }
        @font-face {
          font-family: 'Big Shoulders Display';
          font-weight: 700;
          src: url('https://fonts.google.com/specimen/Big+Shoulders+Display');
        }
      `}
    />
  );
};
