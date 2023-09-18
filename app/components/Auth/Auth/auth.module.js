import styled from "styled-components";

export const AuthModule = styled.div`
  padding: 3.0238dvh 0;
  max-height: 100%;
  overflow-y: auto;

  svg {
    width: 100%;
    text-align: center;
  }

  .register {
    margin-top: 58px;
    b {
      color: #424242;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px; /* 93.75% */
      letter-spacing: -0.4px;
    }

    &-description {
      margin-top: 13px;
      color: #9BA9A6;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 156.25% */
      letter-spacing: -0.4px;
    }

    form {
      margin-top: 14px;
      display: flex;
      flex-direction: column;
      gap: 14px;

      .input {
        width: 100%;
      min-height: 90px;
        input {
          outline-color: #13902C;
          border-radius: 14px;
          border: 1px solid rgba(0, 0, 0, 0.07);
          background: rgba(155, 169, 166, 0.05);
          width: 100%;
          max-width: 360px;
          padding: 27px 0 27px 22px;
          max-height: 65px;
          color: #1f1f1f;
          leading-trim: both;
          text-edge: cap;
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 25px; /* 156.25% */
          letter-spacing: -0.4px;

          &::placeholder {
            color: #9BA9A6;
            leading-trim: both;
            text-edge: cap;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 25px; /* 156.25% */
            letter-spacing: -0.4px;
          }
        }
        p{
          margin-top: 5px;
          color: #E54036;
          leading-trim: both;
          text-edge: cap;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 15px; /* 107.143% */
          letter-spacing: -0.4px;
        }
      }
    }
  }
  p.subscription{
    margin-top: 16px;
    color: #9BA9A6;
    a{
      color: #9BA9A6;
    }
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.2px; /* 137.143% */
    letter-spacing: -0.4px;
    max-width: 320px;
  }
  .reg-auth-buttons{
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 39px;
    button{
      border: 0;
    }
    button:first-child{
      width: 100%;
      border-radius: 15px;
      border: 0.5px solid #13902C;
      background: #13902C;
      box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.05);
      padding: 16px;
      color: #EDEDED;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 112.5% */
      transition: all .2s ease;
      &:disabled{
        border: 1px solid rgba(188, 187, 187, 0.40);
        background: rgba(188, 187, 187, 0.20);
        color: #BCBBBB;
      }
    }
    button:last-child{
      background-color: transparent;
      color: #9BA9A6;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px; /* 128.571% */
      u{
        color: #13902C;
      }
    }
  }
  .socials{
    width: 100%;
    justify-content: center;
    margin-top: 48px;
    display: flex;
    align-items: center;
    gap: 44px;
  }
`