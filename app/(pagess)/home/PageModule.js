"use client"

import styled from "styled-components";

export const PageModule = styled.main`
  position: absolute;
  width: 100%;
  height: 100dvh;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.5);

  @keyframes upMine {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(10%);
    }
  }

  .panel {
    transition: transform .1s ease;
    transform: translateY(100%);
    animation-name: upMine;
    animation-delay: 0ms;
    animation-fill-mode: forwards;
    animation-duration: .5s;
    padding-bottom: 300px;
    border-radius: 40px 40px 0px 0px;
    background: #FFF;
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    pointer-events: auto;
    overflow: auto;

    &::before {
      position: absolute;
      content: "";
      width: 62px;
      height: 6px;
      border-radius: 30px;
      background-color: #E2DFDF;
      top: 8px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .mobile-wrapper {
      padding-top: 49px;
    }

    .events {
      .event {
        margin-top: 26px;
        padding: 24px;
        width: 100%;
        min-height: 150px;
        border-radius: 12px;
        background-color: #F4F4F5;

        p {
          max-width: 241px;
        }
      }

    }

    .questions {
      h2 {
        margin-top: 40px;
      }

      &-wrapper {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 6px;

        .question {
          border-radius: 12px;
          background: #F4F4F5;
          width: 100%;
          padding: 17px 22px 30px 18px;
          overflow: hidden;
          height: 52px;
          //transition: bac .2s ease;

          b {
            color: rgba(46, 46, 46, 0.80);
            leading-trim: both;
            text-edge: cap;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 20px */
            letter-spacing: -0.64px;
          }

          p {
            margin-top: 12px;
          }

          &.active {
            height: 100%;
            background-color: #13902C;

            b {
              color: white !important;
            }

            p {
              color: white !important;

            }
          }
        }
      }
    }
  }
  .profile {
    b {
      font-size: 20px;
    }
    .avatar{
      margin-top: 24px;
      &-content{
        margin-top: 24px;
        &_image{
          border-radius: 100%;
          margin: 0 auto;
          width: 100px;
          height: 100px;
          background-image: url(https://lh3.googleusercontent.com/ogw/AGvuzYbtl8NirqXJqrvZemEwLeUQWGM6giIZFT7QXGrp=s32-c-mo);
          background-repeat: no-repeat;
          background-size: cover;
          background-color: #E8ECEF;
        }
        button{
          margin-top: 24px;
          color: #21201F;
          background-color: transparent;
          border-radius: 12px;
          border: 2px solid #E8ECEF;
        }
      }
      p{
        margin-top: 18px;
        color: #999;
        leading-trim: both;
        text-edge: cap;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 17.6px */
        letter-spacing: -0.64px;
      }
    }
    .personally_input{
      margin-top: 35px;
      &-input{
        margin-top: 18px;
        position: relative;
        svg{
          top: 0;
          bottom: 0;
          left: 23px;
          margin: auto 0;
          position: absolute;
        }
        input{
          width: 100%;
          border-radius: 12px;
          border: 2px solid #E8ECEF;
          padding: 0 56px;
          height: 51px;
          color: #666;
          leading-trim: both;
          text-edge: cap;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 100%; /* 14px */
          letter-spacing: -0.64px;
        }
      }
    }
    .ratings{
      margin-top: 24px;
      .ratings_wrapper{
        margin-top: 18px;
        .user-rating{
          width: 158px;
          height: 87px;
          border-radius: 12px;
          background-color: #F4F4F5;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding-bottom: 12px;
          padding-right: 13px;
          position: relative;
          p{
            top: 12px;
            left: 14px;
            position: absolute;
            color: #999;
            leading-trim: both;
            text-edge: cap;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 10px */
            letter-spacing: -0.64px;
          }
          div{
            color: rgba(19, 144, 44, 0.80);
            leading-trim: both;
            text-edge: cap;
            text-shadow: 0px 0px 25px rgba(19, 144, 44, 0.30);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 32px */
            letter-spacing: -0.64px;
            span{
              color: #999;
              leading-trim: both;
              text-edge: cap;
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 100%;
              letter-spacing: -0.64px;
            }
          }
        }
      }
    }
  }
  .news{
    .filters{
      margin-top: 20px;
      display: flex;
      gap: 10px;
      overflow: auto;
      padding-left: 40px;
      padding-right: 40px;
      .filter{
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        padding: 0 32px;
        border-radius: 12px;
        border: 1px solid rgba(102, 102, 102, 0.20);
        background: rgba(153, 153, 153, 0.10);
        &.selected{
          border-radius: 12px;
          border: 1px solid #13902C;
          background: #13902C;
          color: #FFFFFF;
        }
      }
    }
  }
  h1.title {
    color: #2E2E2E;
    leading-trim: both;
    text-edge: cap;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 32px */
    letter-spacing: -0.64px;
  }

  h2.subtitle {
    color: #2E2E2E;
    leading-trim: both;
    text-edge: cap;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 28px */
    letter-spacing: -0.64px;
  }

  b {
    color: #2E2E2E;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 90.909% */
    letter-spacing: -0.64px;
  }

  p {
    color: #999;
    leading-trim: both;
    text-edge: cap;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 13px; /* 92.857% */
    text-wrap: balance;
  }

  button {
    width: 100%;
    padding: 17px 0;
    border-radius: 16px;
    background: #13902C;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px; /* 156.25% */
    letter-spacing: -0.4px;
  }
`