import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background-color: ${(props) => props.theme.color.primary.mainBack};
  padding: 40px 20px 40px 20px;
  height: 100vh;

  /* PC */
  @media (min-width: 700px) {
    display: flex;
    align-items: center;
  }
`;

const CardInner = styled.div`
  color: ${({ theme }) => theme.color.neutral.head};
  background-color: ${({ theme }) => theme.color.primary.cardBack};
  text-align: center;
  border-radius: 8px;
  overflow: hidden;
  max-width: 1200px;

  .header {
    position: relative;
    min-height: 400px;
  }
  .header:after {
    content: ' ';
    position: absolute;
    background-color: ${({ theme }) => theme.color.primary.soft};
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0.5;
  }
  .header img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    vertical-align: top;
  }
  .contents {
    padding: 40px 20px;
  }

  /* PC */
  @media (min-width: 700px) {
    display: flex;
    flex-direction: row-reverse;
    text-align: left;
    margin: 0 auto;

    .header {
      flex-shrink: 0;
      flex-basis: 50%;
    }

    .contents {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 60px 20px;
    }
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
    padding: 20px;
  }
  em {
    color: ${({ theme }) => theme.color.primary.soft};
  }

  /* PC */
  @media (min-width: 700px) {
    p {
      padding: 20px 0;
      line-height: 2;
    }
  }
`;
//
const SubArea = styled.div`
  h2 {
    font-size: 24px;
  }
  p {
    color: ${({ theme }) => theme.color.neutral.stat};
    font-size: 12px;
  }

  div + div {
    margin-top: 20px;
  }

  /* PC */
  @media (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    div + div {
      margin-top: 0;
    }
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
            <div>
              <h2>10K+</h2>
              <p>COMPANIES</p>
            </div>
            <div>
              <h2>314</h2>
              <p>TEMPLATES</p>
            </div>
            <div>
              <h2>12M+</h2>
              <p>QUERIES</p>
            </div>
          </SubArea>
        </div>
      </CardInner>
    </Container>
  );
}
