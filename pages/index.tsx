import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 100vh;
  background-image: url(/images/pattern-background-desktop.svg);
  padding-top: 71px;
`;

const SummaryCard = styled.div`
  overflow: hidden;
  background-color: orange;
  width: 327px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0px 40px 40px -20px rgba(13, 48, 189, 0.151826);
  border-radius: 20px;
`;
const CardImage = styled.img`
  display: inline-block;
  width: 100%;
  height: 160px;
  object-fit: cover;
  /* margin-bottom: 32px; */
`;

const CardDescription = styled.div`
  /* padding-top: 32px; */
  padding: 32px 24px 32px;
`;
const CardTitle = styled.h1`
  text-align: center;
  font-weight: 900;
  font-size: 22px;
  line-height: 29px;
  color: #1f2e55;
  margin-bottom: 16px;
`;
const CardComment = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #717fa6;
  margin-bottom: 24px;
`;

const DetailPannelWrapper = styled.div`
  padding: 16px;
  background: #f7f9ff;
  border-radius: 11px;
  margin-bottom: 32px;
`;
const DetailPannel = styled.div`
  display: flex;
  justify-content: space-between;
  .pannel {
    display: flex;
    img {
      margin-right: 20px;
    }
  }
  .pannel__title-info {
    font-size: 16px;
    line-height: 21px;
    h2 {
      font-weight: 900;
      color: #1f2e55;
      margin-bottom: 6px;
    }
    p {
      font-weight: 500;
      color: #717fa6;
    }
  }
  .link {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    text-decoration: underline;
    color: #382ae1;
  }
`;

const PrimaryButton = styled.button`
  cursor: pointer;
  display: block;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  color: #fff;
  width: 100%;
  background-color: #382ae1;
  padding: 15px 0 15px;
  border: none;
  box-shadow: 0px 20px 20px rgba(56, 42, 225, 0.190291);
  border-radius: 11px;
  margin-bottom: 24px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;
const NegativeButton = styled.button`
  cursor: pointer;
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  color: #717fa6;
  background-color: transparent;
  border: none;
  text-align: center;
`;

export default function MainPage(): React.ReactElement {
  return (
    <Container>
      <SummaryCard>
        <CardImage src="/images/illustration-hero.svg" alt="이미지" />
        <CardDescription>
          <CardTitle>Order Summary</CardTitle>
          <CardComment>
            You can now listen to millions of songs,
            <br />
            audiobooks, and padcasts on any device
            <br />
            anywhere you like!
          </CardComment>
          <DetailPannelWrapper>
            <DetailPannel>
              <div className="pannel">
                <img src="/images/icon-music.svg" alt="" />
                <div className="pannel__title-info">
                  <h2>AnnualPan</h2>
                  <p>$59.99/year</p>
                </div>
              </div>
              <a href="#" className="link">
                Change
              </a>
            </DetailPannel>
          </DetailPannelWrapper>
          <PrimaryButton>Proceed to Payment</PrimaryButton>
          <ButtonWrapper>
            <NegativeButton>Cancel Order</NegativeButton>
          </ButtonWrapper>
        </CardDescription>
      </SummaryCard>
    </Container>
  );
}
