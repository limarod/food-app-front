import { styled } from "styled-components";

export const Container = styled.header`

  grid-area: header;

  height: 100px;
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.SecondBackground};
  display: flex;
  padding: 1.5rem;

  .content{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  } 

  .secondDiv{
    display: flex;
    gap: 1rem;
    align-items: center;
    
    svg{
      color: #065E7C;
      cursor: auto;
    }
  }
  

  > div h1{
    font-size: 2.1rem;
  }
  
  > div small{
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.FONT_PRICE};
  }

  svg{
    font-size: 2.4rem;
    cursor: pointer;

  }

 

  .fourthdDiv{
    /* position: relative; */
    display: flex;
    flex-direction: column;
  }

    .thirdDiv{
      position: relative;

      svg{
        color: white;
      }
    
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
