import React, {useEffect} from 'react';
import styled from "styled-components";

const CheckBox = styled.div`
  margin-top: 52px;
  display: flex;
  .checkbox-border{
    height: 26px;
    width: 47px;
    border: 0.5px solid #9BA9A6;
    border-radius: 40px;
    position: relative;
    transition: 200ms ease;
    .checkbox-circle{
      position: absolute;
      top: 0;
      left: 4px;
      bottom: 0;
      margin: auto 0;
      border-radius: 40px;
      width: 18px;
      height: 18px;
      background-color: #13902C;
      transition: 200ms cubic-bezier(0.34,-0.71, 0.65, 1.7);
    }
    &.checked{
      background-color: #13902C;
      border: 0.5px solid #13902C;
      .checkbox-circle{
       background-color: white;
        left: 22px;
      }
    }
  }

  label {
    max-width: 227px;
    margin-left: 16px;
    color: #9BA9A6;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19.2px; /* 137.143% */
    letter-spacing: -0.4px;
    text-decoration-line: underline;
  }
`

const SwitchCheckbox = ({ checkbox, setCheckbox }) => {
    return (
        <CheckBox onClick={()=> setCheckbox(acc => !acc)}>
            <div className={`checkbox-border ${checkbox ? 'checked' : ''}`}>
               <div className='checkbox-circle'></div>
            </div>
            <label htmlFor="s2d">Соглашаюсь с правилами пользования и на получение рассылки </label>
        </CheckBox>
    );
};

export default SwitchCheckbox;