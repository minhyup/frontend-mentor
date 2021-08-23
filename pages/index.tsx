import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  padding-top: 48px;

  .title {
    h1 {
      position: relative;
      text-align: center;
      font-size: 20px;
      margin-bottom: 54px;
      color: ${({ theme }) => theme.color.color3};
      &::before {
        content: 'a';
        border: 1px solid blue;
        border-radius: 50%;
        background-color: red;
      }
    }
  }

  .heroImg {
    text-align: center;
    margin-bottom: 48px;
  }

  .mainHead {
    h2 {
      font-weight: 900;
      font-size: 40px;
      line-height: 44px;
      text-align: center;
      color: ${({ theme }) => theme.color.color3};
      margin: 0 24px 24px;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      color: #87879d;
      margin: 0 24px 32px;
    }

    .btns {
      display: flex;
      flex-direction: column;
      color: #fff;
      margin-bottom: 64px;
    }
    .btns button {
      color: inherit;
      border-radius: 20px;
    }

    .btns__first {
      margin-bottom: 16px;
      padding: 16px 40px;
      background-color: ${({ theme }) => theme.color.color1};
    }
    .btns__second {
      padding: 16px 29px;
      background-color: ${({ theme }) => theme.color.color2};
    }
  }

  .numCircle {
    text-align: center;
    color: red;
    margin-bottom: 64px;

    .numCircle__num {
      position: relative;
      padding: 20px;
      border: 1px solid red;
      border-radius: 50%;
      &::before {
        content: '';
        position: absolute;
        left: 28px;
        top: -50px;
        height: 50px;
        border-left: 1px solid red;
      }
    }
  }

  .imgGrid {
    margin: 0 24px;
    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -10px;

      img {
        border-radius: 8px;
      }
    }
  }

  .subDec {
    margin: 0 24px;
    text-align: center;
    h4 {
      margin-bottom: 24px;
      font-weight: 900;
      font-size: 16px;
      line-height: 26px;
      letter-spacing: 4px;
      color: #4d96a9;
    }
    h3 {
      margin-bottom: 32px;
      font-weight: 900;
      font-size: 32px;
      line-height: 36px;
      color: #28283d;
    }
    p {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      color: #87879d;
    }
  }

  .l_col {
    width: calc(100% / 2);
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 24px;
  }
`;
export default function MainPage(): React.ReactElement {
  return (
    <Container>
      <div className="title">
        <h1>meet</h1>
      </div>
      <div className="heroImg">
        <img src="/tablet/image-hero.png" alt="" />
      </div>
      <div className="mainHead">
        <h2>
          Group Chat
          <br />
          for Everyone
        </h2>
        <p>Meet makes it easy to connect with others face-to-face virtually and collaborate across any device</p>
        <div className="btns">
          <button className="btns__first">
            Download <em>v1.3</em>
          </button>
          <button className="btns__second">Waht is it?</button>
        </div>
      </div>
      <div className="numCircle">
        <span className="numCircle__num">01</span>
      </div>
      <div className="imgGrid">
        <ul>
          <li className="l_col">
            <img src="/desktop/image-woman-in-videocall.jpg" alt="" />
          </li>
          <li className="l_col">
            <img src="/desktop/image-women-videochatting.jpg" alt="" />
          </li>
          <li className="l_col">
            <img src="/desktop/image-men-in-meeting.jpg" alt="" />
          </li>
          <li className="l_col">
            <img src="/desktop/image-man-texting.jpg" alt="" />
          </li>
        </ul>
      </div>
      <div className="subDec">
        <h4>BUILT FOR MODERN USE</h4>
        <h3>
          Smarter meetings,
          <br />
          all in one place
        </h3>
        <p>
          Send messages, share files, show your screen, and record your meetings — all in one workspace. Control who can
          join with invite-only team access, data encryption, and data export.
        </p>
      </div>

      <div>number2</div>
      <div>
        <h3>Smarter meetings</h3>
        <p>sssss</p>
      </div>
    </Container>
  );
}
