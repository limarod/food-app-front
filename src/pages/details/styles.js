import {styled} from "styled-components"
import { Button } from "../../components/button"
import { ButtonText } from "../../components/buttonText"
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"

export const Container = styled.div`

  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;



  @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
    min-width: 82.5rem;
  }

  li{
    list-style: none;
  }

    Icon{
      font-size: 2rem;
    }

  .containerDetails{
    padding: 0 3.5rem;
    padding:0 2.4rem 0 2.4rem ;
    margin:  3rem 0 4rem;
    text-align: center;


    flex-grow: 1;

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
      max-width: 82.5rem;
      min-width: 82.5rem;
      margin:3rem auto;
      padding: 0 3.5rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      display: flex;
      flex-direction: column;
      gap: 4rem ;

      padding: 0 7.5rem;
      max-width: 86rem;
      min-width: 86rem;
      margin:3rem auto;
      /* text-align: start; */
      padding: 0;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.X_LARGE}){
      min-width: 92.5rem;
    }

    img{
      margin: 1.6rem 0;
      width: 22rem;

      @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
        width: 30rem;
      }
    }

    h1{
      font-size: 2.0rem;
    }
    p{
      font-size: 1.4rem;
      margin: 2.4rem 0;
    }

    .tagsContainer{
      margin: 0 auto;
      max-width: 30rem;
      padding: 0 1.1rem;

      display: flex;
      flex-wrap: wrap;

      align-items: center;
      justify-content: center;

      @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
        margin: 0;
        padding: 0;
        justify-content:flex-start;
      }
      
    }


    .AddDishs{
      display: flex;
      gap: 1rem;

      align-items: center;
      justify-content: center;
      /* margin-bottom: 7px; */

    }

    .LargerDevicesContainer{
      @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
        display: flex;
        justify-content: flex-start;
        align-items: center;

        gap: 8rem;
      }
    }

    .dataDish{
      @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
        display: flex;
        flex-direction: column;
        text-align: left;
        align-items: flex-start;
      
        gap: 1rem;
      }
    }

  }


`
export const NewButton = styled(Button)`

  &.buttonDetails{
    background-color:  ${({theme}) => theme.COLORS.BUTTON_COLOR};
  }

  &.buttonDetails.clicked{
    animation: buttonClickAnimation 0.5s ease-in-out ;
  }


`
export const NewButtonText = styled(ButtonText)`
  font-size: 2rem;
`

export const StyledButtonText2 = styled(ButtonText)`
  font-size: 2.6rem;

`