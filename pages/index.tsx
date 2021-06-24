import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: ${(props) => props.theme.color.primary.mainBack};
  padding: 20px;
`;

const CardInner = styled.div`
  background-color: ${(props) => props.theme.color.primary.cardBack}; ;
`;

export default function MainPage(): React.ReactElement {
  return (
    <Container>
      <CardInner>
        <div>이미지</div>
        <div>
          설명
          <h1>제목</h1>
          <p>솰라솰라~~~</p>
          <h2>10K</h2>
          <p>텍스트</p>
          <h2>10K</h2>
          <p>텍스트</p>
          <h2>10K</h2>
          <p>텍스트</p>
        </div>
      </CardInner>
    </Container>
  );
}
