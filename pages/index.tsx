import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 100vh;
  background-image: url(/images/pattern-background-desktop.svg);
`;

export default function MainPage(): React.ReactElement {
  return <Container>hello</Container>;
}
