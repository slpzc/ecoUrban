'use client'
import styled from "styled-components"

export const SlidesModule = styled.div`
  overflow: hidden;
  display: flex;
  padding-top: 3.0238dvh;
  flex-direction: column;

  .indicators {
    display: flex;
    justify-content: center;
    margin-top: 9px;
  }

  .indicator {
    width: 7px;
    height: 7px;
    border-radius: 9px;
    margin: 0 5px;
    background-color: #1818182E;
    opacity: .60;
    transition: all .2s ease;
  }

  .indicator.active {
    background-color: #13902C;
    width: 23px;
    opacity: 1;
  }


  .content {
    display: flex;
    flex-direction: column;

    .slides-skip {
      text-align: right;
      color: #9BA9A6;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 18px; /* 112.5% */
    }

    svg {
      width: 100%;
      margin-top: 6px;
      text-align: center;
    }
  }

  .swiper-slide {
    opacity: 0;
    transition: .4s ease;
  }

  .swiper-slide-active {
    opacity: 1;
  }

  .swiper {
    //overflow-x: hidden !important;
    overflow-x: clip !important;
    overflow-y: auto !important;
    margin-top: 5.4752dvh;
    text-align: center;
    //svg{
    //  min-height: 32.3132vh;
    //}
    img {

    }

    &-wrapper {
      max-width: 100vw !important;
      align-items: center;
    }

    .swiper-slide {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        max-width: 397px;
        margin-top: 3.7797dvh;
        color: #424242;
        font-size: 3.4557vh;
        font-weight: 600;
        line-height: 30px; /* 93.75% */
        letter-spacing: -0.4px;
      }

      p {
        text-wrap: balance;
        max-width: 386px;
        margin-top: 1.7279vh;
        color: #424242;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.2px; /* 120% */
        letter-spacing: -0.4px;
      }
    }
  }

  button {
    border: 0;
    outline: 0;
    margin-top: 5.8596dvh;
    border-radius: 15px;
    background: #13902C;
    padding: 16px 0;
    width: 100%;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 112.5% */
    position: relative;
    opacity: 0;
    transition: all .1s ease-in-out;

    &.active {
      opacity: 1;
      margin-top: 4.8596dvh;
    }
  }
`