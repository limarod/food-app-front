import {styled} from "styled-components"


export const Container = styled.textarea`
  width: 100%;
  height: 14rem;
  font-size: 1.2rem;

  background-color: ${({theme}) => theme.COLORS.SecondBackground};
  color: white;

  border: none;
  border-radius: 0.6rem;

  padding: 1rem;

  margin-top: 1.2rem;
  margin-bottom: 2.4rem;

  &::placeholder{
    color: ${({theme}) => theme.COLORS.FONT_PLACEHOLDER};
  }
`
