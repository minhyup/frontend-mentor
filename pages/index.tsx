import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: block;
  @media (min-width: 800px) {
    display: flex;
    flex-grow: 1;
  }
`;
const CardDescription = styled.div<{ backColor: string }>`
  padding: 48px;
  background-color: ${({ backColor }) => backColor};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  h2 {
    font-family: 'Big Shoulders Display';
    font-weight: bold;
    font-size: 40px;
    text-transform: uppercase;
    color: #f2f2f2;
    line-height: 48px;
    margin-bottom: 25px;
  }
  p {
    line-height: 25px;
    color: #fff;
    opacity: 0.75;
    margin-left: -0.5px;
    margin-bottom: 25px;
  }
`;

const CardIcon = styled.img`
  display: block;
  margin-bottom: 35px;
`;

const LinkButton = styled.a<{ backColor: string }>`
  display: inline-block;
  background-color: #f2f2f2;
  border-radius: 25px;
  font-size: 15px;
  line-height: 25px;
  color: ${({ backColor }) => backColor};
  text-align: center;
  padding: 11px 31.5px 12px;
`;

const ColorCard = ({
  backColor,
  iconUrl,
  title,
  desc
}: {
  backColor: string;
  iconUrl: string;
  title: string;
  desc: React.ReactNode;
}): React.ReactElement => {
  return (
    <CardDescription backColor={backColor}>
      <CardIcon src={iconUrl} alt="" />
      <h2>{title}</h2>
      <p>{desc}</p>
      <LinkButton href="#" backColor={backColor}>
        Learn More
      </LinkButton>
    </CardDescription>
  );
};

export default function MainPage(): React.ReactElement {
  return (
    <>
      <Container>
        {/* <ColorCard
        backColor="#E28625"
        iconUrl="/images/icon-sedans.svg"
        title="SEDANS"
        desc="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next
        road trip"
      />
      <ColorCard
        backColor="#006971"
        iconUrl="/images/icon-suvs.svg"
        title="SUVS"
        desc="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      />
      <ColorCard
        backColor="#004140"
        iconUrl="/images/icon-suvs.svg"
        title="SUVS"
        desc="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
      /> */}
        {/* <div>
        <ColorCard
          backColor="#E28625"
          iconUrl="/images/icon-sedans.svg"
          title="SEDANS"
          desc="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next
        road trip"
        />
      </div>
      <div>
        <ColorCard
          backColor="#006971"
          iconUrl="/images/icon-suvs.svg"
          title="SUVS"
          desc="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        />
      </div>
      <div>
        <ColorCard
          backColor="#004140"
          iconUrl="/images/icon-suvs.svg"
          title="SUVS"
          desc="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
        />
      </div> */}
        <div style={{ display: 'flex', borderRadius: '8px 8px 0 0' }}>
          <ColorCard
            backColor="#E28625"
            iconUrl="/images/icon-sedans.svg"
            title="SEDANS"
            desc="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next
        road trip"
          />
        </div>
        <div style={{ display: 'flex', borderRadius: '8px 8px 0 0', marginTop: '-5px' }}>
          <ColorCard
            backColor="#006971"
            iconUrl="/images/icon-suvs.svg"
            title="SUVS"
            desc="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
          />
        </div>
        <div style={{ display: 'flex', borderRadius: '8px 8px 0 0', marginTop: '-5px' }}>
          <ColorCard
            backColor="#004140"
            iconUrl="/images/icon-suvs.svg"
            title="SUVS"
            desc="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
          />
        </div>
      </Container>
      <div style={{ background: 'red' }}>
        <div style={{ background: 'green', marginLeft: '100px' }}>a</div>
      </div>
    </>
  );
}
