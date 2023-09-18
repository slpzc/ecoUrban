'use client'

import styled from "styled-components"

export const AuthModule = styled.div`
  z-index: 2;
  background-color: #EDEDED;
  width: 100%;
  height: 100dvh;

  ::-webkit-scrollbar {
    width: 0px; /* в основном для вертикальных полос прокрутки */
    height: 0px; /* в основном для горизонтальных полос прокрутки */
  }
  ::-webkit-scrollbar-thumb { /* плашка-бегунок */
    background: #13902C;
  }
  ::-webkit-scrollbar-track { /* фон */
    background: #333;
  }
`