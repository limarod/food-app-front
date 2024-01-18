import { styled } from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"
import { Button } from "../button";

export const Container = styled.header`

  grid-area: header;

  height: 100px;
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.SecondBackground};
  display: flex;
  padding: 1.5rem;

  @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
    padding: 0 2.5rem;
    min-width: 82.5rem;
  }


  @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
    background-color: #00111A ;
    border-bottom: 1px solid;
    border-color:  rgba(128, 128, 128, 0.5);
    max-width: none;
  }

  .content{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
      max-width: 77rem;
      min-width: 67rem;
      margin:  auto;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      >svg{
        display: none;
      }
      justify-content: space-around;
      max-width: none;
      margin: none;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.X_LARGE}){
      padding:0 14rem;
      justify-content: space-around;

    }
  } 

  .inputLargerDevices{
    display: none;

      @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
        min-width: 65rem;
        display: flex;
        gap: 4.5rem;
        align-items: center;
    }


  }

  .secondDiv{
    display: flex;
    align-items: center;
    
    >svg{
      color: #065E7C;
      font-size: 3.9rem;
      cursor: auto;
    }

    small{
      display: none;
     
      @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
        display: flex;
        gap: 1.5rem;
      }
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      gap: 1.5rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.X_LARGE}){
      gap: 6.5rem;

    }

  }

  div h1{
    font-size: 2.1rem;
    margin: 0;
    
    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
          font-size: 2.5rem;
          /* margin: 0; */
        }

    @media(min-width: ${DEVICE_BREAKPOINTS.X_LARGE}){
      font-size: 2.7rem;
      margin: 0 0 0 -5rem;
    }
  }
  
  > div small{
    font-size: 1.2rem;
    color: ${({theme}) => theme.COLORS.FONT_PRICE};

    @media(min-width: ${DEVICE_BREAKPOINTS.X_LARGE}){
      margin-left: -5rem;
    }
  }

  svg{
    font-size: 2.4rem;
    cursor: pointer;

  }

  .shoppingCartLargerDevices{
      font-size: 1.2rem;
    }

  .fourthdDiv{
    /* position: relative; */
    display: flex;
    flex-direction: column;

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      display: none;
    }
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

   
    
    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      display: none;
    }

  }

  .signOutButton{
    display: none;
    
    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      display: block;
    }

  }
  
`

export const NewButton = styled(Button)`

  &.buttonDetails{
    background-color: ${({theme}) => theme.COLORS.BUTTON_COLOR};
    margin: auto;
    /* max-width: 25rem; */
    min-width: 17rem;
    height: 3.7rem;

  }
`
