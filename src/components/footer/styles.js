import {styled} from "styled-components"

export const Container = styled.footer`

grid-area: footer;

width: 100%;
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
}

.footer1{
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({theme}) => theme.COLORS.FONT_PLACEHOLDER};
}
` 