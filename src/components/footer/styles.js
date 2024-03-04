import {styled} from "styled-components"
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"


export const Container = styled.footer`

  height: 7.7rem;
  background-color: ${({theme}) => theme.COLORS.SecondBackground};
  margin-top: 3rem;

  p{
    font-size: 1.0rem;
  }

  svg{
    font-size: 1.6rem;
  }

  .footer{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      max-width: 140rem;
      margin: 0 auto;
    }
  }

  .footer1{
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({theme}) => theme.COLORS.FONT_PLACEHOLDER};
  }
` 