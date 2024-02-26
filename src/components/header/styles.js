import { styled } from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"
import { Button } from "../button";


export const Container = styled.header`

  height: 100px;
  width: 100%;

  background-color: ${({theme}) => theme.COLORS.SecondBackground};
  background-color: #00111A ;
  display: flex;
  justify-content: center;
  padding: 1.5rem;
 
  
  .container{
    
    
    .favorites, .buttonDetails, .buttonHistory, .buttonSignOut, .search{
        display: none;
    }
   
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 2rem;
    
    
    svg{
      font-size: 2rem;
    }

    .sideMenuButton, .receipt{
      font-size: 2.5rem;
    }
     
    .foodExplorer{
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    
    .roleSpan{
      font-size: 1.5rem;
      color: ${({theme}) => theme.COLORS.FONT_PRICE}
    }
    

    .iconLogo{
      font-size: 3.9rem;
      color: #065E7C;
    }

    h1{
      font-size: 2.3rem;
    }

 
    .favorites{
      font-size: 1.7rem;
    }
    
    .buttonSignOut{
      font-size: 2.5rem;
    }


    @media (min-width: ${DEVICE_BREAKPOINTS.LARGE}) {
      justify-content: center;


      .sideMenuButton, .shoppingCart{
        display: none;
      }
    }

    
    @media (min-width: ${DEVICE_BREAKPOINTS.X_SMALL}){
    

    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LARGE}) {
      .favorites, .buttonDetails, .buttonHistory, .buttonSignOut, .search{
        display: flex;
      }
    }

    .shoppingCart{
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
  }

  @media (min-width: 426px ) and (max-width: 1023px ) {
    .foodExplorer {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 25rem;
    }
  }


`
  

export const NewButton = styled(Button)`

  &.buttonDetails{
    background-color: ${({theme}) => theme.COLORS.BUTTON_COLOR};
    min-width: 17rem;
    height: 3.7rem;

    font-size: 1.5rem;

  }
`
