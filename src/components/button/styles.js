import {styled} from "styled-components"

export const Container = styled.button`
  background-color: ${({theme}) => theme.COLORS.BUTTON_COLOR2};
  color: ${({theme}) => theme.COLORS.FONT_COLOR};

  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  
  

  width: 100%;
  height: 3.4rem;
  padding: 0.4rem 2.9rem;
  font-size: 1.2rem;
  border-radius: 0.6rem;

  border: none;

  .iconClass{
    font-size: 1.6rem ;
  }

&&.excluirPrato{
  background-color: ${({theme})=> theme.COLORS.SecondBackground};
}
`
