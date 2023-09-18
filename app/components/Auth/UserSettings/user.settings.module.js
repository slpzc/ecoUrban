import styled from "styled-components";

export const UserSettingsModule = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 3.2635dvh;
    color: #424242;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    max-width: 373px;
    letter-spacing: -0.4px;
  }

  p {
    max-width: 254px;
    margin-top: 14px;
    color: #9BA9A6;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.2px;
    letter-spacing: -0.4px;
  }

  svg {
    width: 100%;
  }

  svg:nth-child(2n) {
    margin-top: 9.9352dvh;
  }

  button {
    margin-top: 5.9352dvh;
    width: 100%;
    border-radius: 15px;
    background: #13902C;
    border: 0;
    padding: 16px 0;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 112.5% */
  }
`