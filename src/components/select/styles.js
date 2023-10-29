import {styled} from "styled-components"

export const Container = styled.div`
  width: 100%;
  position: relative;

`

export const StyledSelect = styled.select`

width: 100%;
border: none;
border-radius: 0.6rem;

font-size: 1.2rem;
padding: 1.2rem 0 1.2rem 1.4rem;
margin: 1.2rem 0 2.4rem 0;

background-color: ${({theme}) => theme.COLORS.SecondBackground};
color: white;

outline: none;

appearance: none;
-webkit-appearance: none;
-moz-appearance: none;
`


export const StyledIcon = styled.div`
  color: white;
  position: absolute;
  font-size: 2.5rem;
  background-color: transparent;
  transform: translateY(-200%);
  right: 2rem;
`



