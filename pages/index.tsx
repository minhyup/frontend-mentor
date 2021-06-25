import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: ${(props) => props.theme.color.primary.mainBack};
  padding: 20px;
`;

const CardInner = styled.div`
  color: ${({ theme }) => theme.color.neutral.head};
  background-color: ${({ theme }) => theme.color.primary.cardBack};
  text-align: center;
  border-radius: 8px;
  overflow: hidden;

  .header img {
    height: 400px;
  }
  .contents {
    padding: 20px;
  }
`;

const MainArea = styled.div`
  margin-bottom: 24px;
  h1 {
    font-size: 32px;
  }
  p {
    color: ${({ theme }) => theme.color.neutral.paragraph};
    font-size: 16px;
  }
  em {
    color: ${({ theme }) => theme.color.primary.soft};
  }
`;

const SubArea = styled.div`
  h2 {
    font-size: 24px;
  }
  p {
    color: ${({ theme }) => theme.color.neutral.stat};
    font-size: 12px;
  }

  p + h2 {
    margin-top: 20px;
  }
`;

export default function MainPage(): React.ReactElement {
  return (
    <Container>
      <CardInner>
        <div className="header">
          <img src="/images/image-header-mobile.jpg" alt="Stat Preview" />
        </div>
        <div className="contents">
          <MainArea>
            <h1>
              Get <em>insights</em> that help your business grow.
            </h1>
            <p>
              Discover the benefits of data analytics and make decisions regarding revenue, customer experience, and
              overall efficiency.
            </p>
          </MainArea>
          <SubArea>
            <h2>10K+</h2>
            <p>COMPANIES</p>
            <h2>314</h2>
            <p>TEMPLATES</p>
            <h2>12M+</h2>
            <p>QUERIES</p>
          </SubArea>
        </div>
      </CardInner>
    </Container>
  );
}
