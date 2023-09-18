'use client'
import styled from "styled-components";

export const PageModule = styled.div`
  position: relative;
  //overflow: hidden;
  //max-height: 100dvh;
  &::before, &::after{
    z-index: 0;
    user-select: none;
    pointer-events: none;
  }
  &::after{
    left: 0;
    top: 0;
    position: absolute;
    content: "";
    width: 100%;
    height: 100dvh;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) 73%, #FFF 106.56%)
  }
  &::before{
    left: 0;
    top: 0;
    position: absolute;
    content: "";
    width: 100%;
    height: 100dvh;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 62.94%, #FFF 96.56%);
  }

    .hud-top {
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.00) -1.96%, #FFF 100%);
      padding-top: 55px;
      padding-bottom: 60px;
      text-align: center;
      position: relative;
      z-index: 1;

      p {
        color: rgba(36, 36, 36, 0.80);
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 30px; /* 214.286% */
        letter-spacing: -0.4px;
      }

      b {
        color: #424242;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 93.75% */
        letter-spacing: -0.4px;
      }
    }

    .hud-bottom {
      position: absolute;
      bottom: -73dvh;
      text-align: center;
      left: 0;
      right: 0;
      padding-bottom: 50px;
      button {
        max-width: 327px;
        margin: 0 auto;
        border: 0;
        width: 100%;
        border-radius: 15px;
        background: #13902C;
        padding: 16px 0;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
        color: #FFF;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px; /* 112.5% */
      }
      p {
        margin-top: 19px;
        color: #9BA9A6;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        span {
          color: #13902C;
          text-decoration-line: underline;
        }
      }
    }

  

  .write-panel {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100dvh;
    z-index: 4;
    user-select: none;
    pointer-events: none;

    .backdrop {
      width: 100%;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0);
      transition: all .2s ease;
      z-index: 1;
    }

    &.show {
      opacity: 1;
      user-select: auto;
      pointer-events: auto;

      .backdrop {
        background-color: rgba(0, 0, 0, 0.7);
      }
      .address-content{
        transform: translateY(0);
        overflow: hidden;
      }
    }

    .address-content {
      z-index: 2;
      border-radius: 40px 40px 0px 0px;
      background: #FFF;
      position: absolute;
      bottom: 0;
      width: 100vw;
      padding-top: 38px;
      padding-bottom: 55px;
      transition: transform .2s ease;
      transform: translateY(100%);
      overflow: hidden;
      &::before{
        position: absolute;
        content: "";
        width: 62px;
        height: 6px;
        border-radius: 30px;
        top: 8px;
        left: 0;
        right: 0;
        margin: 0 auto;
        background: #E2DFDF;
      }
      .mobile-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        //max-width: 73.444vw;
      }
      b {
        color: #424242;
        font-size: 20px;
        white-space: balance;
        font-style: normal;
        font-weight: 700;
        line-height: 22px; /* 150% */
        letter-spacing: -0.4px;
      }
      .address-input {
        margin-top: 30px;
        width: 100%;
        height: 174px;
        overflow: hidden;
        .input-inner {
          position: relative;
          z-index: 4;
          &::before {
            position: absolute;
            content: "";
            background-image: url("https://i.imgur.com/0DOMNNL.png");
            width: 24px;
            height: 24px;
            top: 0;
            left: 16px;
            bottom: 2.5px;
            margin: auto 0;
          }

          input {
            height: 49px;
            padding: 15.5px 50px 16.5px 50px;
            width: 100%;
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.07);
            background: #fafbfa;
            color: #1f1f1f;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: -0.4px;
            outline-color: transparent;
            transition: outline-color .2s ease;
            &:focus{
              outline-color: #13902C;
            }
            &::placeholder {
              color: #9E9B98;
              font-weight: 400;
            }
          }
        }
        .input-offers{
          padding-top: 10px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 45px;
          max-height: 133px;
          overflow-y: auto;
          border-radius: 0px 0px 10px 10px;
          border: 1px solid rgba(0, 0, 0, 0.07);
          background: #fafbfa;
          transition: all .2s ease;
          position: relative;
          bottom: 10px;
          opacity: 1;
          .offer{
            padding: 7px 20px;
            span{
              color: #999;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
            p{
              color: #666;
              font-size: 10px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
          }
          &.hidden{
            height: 0px;
            opacity: 0;
            background-color: transparent;
            user-select: none;
            border: 1px solid transparent;
            pointer-events: none;
            
          }
        }
      }
      .panel-buttons{
        width: 100%;
        margin-top: 44px;
        button{
          width: 100%;
          border-radius: 15px;
          border: 1px solid #13902C;
          background: #13902C;
          color: #FFF;
          font-size: 16px;
          font-weight: 600;
          line-height: 18px; /* 112.5% */
          padding: 16px 0;
          transition: all .2s ease;
          &:disabled{
            color: #BCBBBB;
            border: 1px solid rgba(188, 187, 187, 0.40);
            background: rgba(188, 187, 187, 0.20);
          }
        }
        p{
          margin-top: 15px;
          color: #9E9B98;
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 18px; /* 128.571% */
        }
      }
    }
  }
`