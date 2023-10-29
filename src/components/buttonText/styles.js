import { styled } from "styled-components";

export const Container = styled.button`
  border: none;
  background: none;
  font-size: 1.6rem;
  display: flex;
  align-items: center;

  color: ${({theme}) => theme.COLORS.FONT_COLOR};
  
  
  .iconClass{
  font-size: 2rem;
  color: white;
}

`

