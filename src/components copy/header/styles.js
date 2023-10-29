import { styled } from "styled-components";

export const Container = styled.header`
  height: 100px;
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.SecondBackground};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1.3rem 0 0 1.3rem;

  h1{
    font-size: 1.8rem;
  }

  small{
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.FONT_PRICE};
  }

  svg{
    font-size: 2.4rem;
    color: white;
  }

  .firstDiv{
    >svg{
     cursor: pointer;
    }
  }

  .secondDiv{
    display: flex;
    gap: 0.8rem;
    align-items: center;

    >svg{
      color: #065E7C;
    }
  }

  .thirdDiv{
    position: relative;
    span{
      background-color: #9a0526;
      border-radius: 50%;
      font-size: 1.1rem;
      padding: 0.12rem 0.34rem 0.14rem 0.36rem;
      position: absolute;

      top: -4px;
      right: -4px;
    }
  }

`
