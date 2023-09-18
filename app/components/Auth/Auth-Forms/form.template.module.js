import styled from "styled-components";

export const FormTemplateModule = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #EDEDED;
  .mobile-wrapper{
    height: 100%;
    position: relative;
  }
  .logo{
    margin-top: 102px;
    text-align: center;
    width: 100%;
  }
  .text{
    margin-top: 68px;
    &-title{
      max-width: 373px;
      color: #424242;
      font-size: 32px;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: -0.4px;
    }
    &-description{
      max-width: 254px;
      margin-top: 14px;
      color: #9BA9A6;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19.2px; /* 120% */
      letter-spacing: -0.4px;
    }
  }
  .rate-system{
    text-align: center;
    &.stars{
      margin-top: 100px;
      svg path{
        transition: fill .2s ease;
      }
    }
    &.answers{
      margin-top: 75px;
      display: flex;
      flex-direction: column;
      span{
        padding-top: 6px;
        padding-bottom: 6px;
        color: #666;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px; /* 95% */
        letter-spacing: -0.4px;
        transition: all .2s ease;
        transform: scale(1);
        &.selected{
          color: #13902C;
          transform: scale(1.3);
        }
      }
    }
  }
  b.thanks{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: #424242;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px; /* 93.75% */
    letter-spacing: -0.4px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  p.thanks{
    position: absolute;
    bottom: 78px;
    color: #9BA9A6;
    font-size: 16px;
    width: 100%;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 156.25% */
    letter-spacing: -0.4px;
  }
  button{
    position: absolute;
    bottom: 87px;
    padding: 16px 0;
    border-radius: 15px;
    background: #13902C;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
    width: 100%;
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
    line-height: 18px; /* 112.5% */
    border: 0;
  }
`