import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  color: ${(props) => props.theme.color.primary};
`;
export default function MainPage(): React.ReactElement {
  return <Container>test</Container>;
}
