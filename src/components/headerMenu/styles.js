import { styled } from "styled-components"

export const Container = styled.div`
  height: 100px;
  width: 100%;
  
  background-color: ${({theme}) => theme.COLORS.SecondBackground};

  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: flex-start;

  padding-left: 2rem;
  margin-bottom: 3.6rem;

  svg{
    font-size: 2.4rem;
    cursor: pointer;
  }

  h2{
    font-size: 1.8rem;
  }
`