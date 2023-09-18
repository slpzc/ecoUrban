import styled from "styled-components";

export const NavigatonModule = styled.nav`
  position: absolute;
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 999;
  bottom: 20px;
  pointer-events: none;
 
  .links{
    pointer-events: auto;
    display: flex;
    gap: 13px;
    a{
      width: 43px;
      height: 43px;
      border-radius: 30px;
      background: #FFF;
      box-shadow: 0px -4px 25px 0px rgba(0, 0, 0, 0.07);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      *{
        transition: all .2s ease;
      }
      p{
        width: 0;
        overflow: hidden;
        color: #13902C;
        text-align: center;
        leading-trim: both;
        text-edge: cap;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      &.active{
        width: auto;
        padding: 0 21px;
        svg *{
          fill: #13902C;
        }
        p{
          margin-left: 8px;
          width: auto;
          color: #13902C !important;
        }
      }
    }
  }
 
`