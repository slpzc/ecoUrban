import styled from "styled-components";

export const FeaturesModule = styled.div`
  overflow-y: auto;
  max-height: 100%;
  padding-top: 3.0238dvh;
  padding-bottom: 3.0238dvh;
.title{
  display: flex;
  flex-direction: column;
  align-items: center;
  h2{
    color: #424242;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 93.75% */
    letter-spacing: -0.4px;
    &:first-child{
      line-height: 40px;
    }
  }
}
  
  ul{
    margin-top: 34px;
    display: flex;
    flex-direction: column;
    gap: 13px;
    color: #424242;
    list-style: none;
    b{
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 19.2px; /* 80% */
      letter-spacing: -0.4px;
    }
    li{
      display: flex;
     align-items: center;
      gap: 8px;
      p{
        white-space: balance;
       max-width: 78.125vw;
       font-size: 16px;
       font-style: normal;
       font-weight: 400;
       line-height: 19.2px; /* 120% */
       letter-spacing: -0.4px;
     }
    }
  }
  button{
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.10);
    margin-top: 61px;
    width: 100%;
    padding: 16px 0;
    border-radius: 15px;
    border: 1px solid #9BA9A6;
    background: #BEDAD5;
    color: #13902C;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 112.5% */
  }
`