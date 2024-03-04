import { styled } from "styled-components";
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"

       
export const Container = styled.div`

  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;


  main{

    padding: 5.6rem 0 0 1.5rem;

    h1{
      font-size: 3.2rem;
      margin-bottom: 1.4rem;
    }

    .orderItems{
      padding: 8px;
      max-width: 28rem;

      border: 1px solid gray;
      border-radius: 0.6rem;
      font-size: 2.8rem;
      margin-bottom: 1.2rem;


      .statusOrder{
        display: flex;
        justify-content:  flex-start;
        gap: 0.5rem;
      }

      @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
        display: none;
      }
    }

    svg{
      font-size: 1rem;
      color: red;
    }

    .itemsPedido{
      font-size: 1.2rem;
    }


  }

  .largerDevice{
    display: none;
  }

  footer{
    margin-top: 5rem;
  }

  .tableLargerDevice{
    display: none;

    
    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      display: flex;
      justify-content: center;

      .created_atHistory{
        width: 20%;
      }

      table{
        border-collapse: collapse;
        max-width: 100%;
        min-width: 80%;
      }

      th, td{
        border: 1px solid #dddddd;
        text-align: left;
        padding: 0.8rem;

        font-size: 1.5rem;
      }

      td{
        color: ${({theme}) => theme.COLORS.FONT_PLACEHOLDER};
      }

      .poNumber{
        width: 15%;
      }
    }
  }

  .selectButton{
    background-color: ${({theme}) => theme.COLORS.Dark500};
    color: ${({theme}) => theme.COLORS.FONT_PLACEHOLDER};
    font-size: 1.2rem;
    border-color: ${({theme}) => theme.COLORS.Dark500};
    outline: none;
    box-shadow: none;
    width: 65%;
  }

  .optionsButton{
    font-size: 1.2rem;
  }

  .statusWraper{
    color: ${({theme}) => theme.COLORS.FONT_PRICE};

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      font-size: 1.2rem;
    }
  }
`
