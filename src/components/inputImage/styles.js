import styled from 'styled-components';
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"

export const Container = styled.label`


  width: 100%;
  border-radius: 0.6rem;
  margin: 1.2rem 0 2.4rem 0;

  background-color: ${({theme}) => theme.COLORS.SecondBackground};

  display: flex;
  align-items: center;

  @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      margin: 0;
    }

`;

export const Input = styled.input `
    opacity: 0;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    border: none;
    border-radius: 0.6rem;

    padding: 1.2rem 0 1.2rem 1.4rem;

  @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
    padding: 0;
  }
`;

