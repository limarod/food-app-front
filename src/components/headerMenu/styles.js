import { styled } from "styled-components"

export const Container = styled.div`
  height: 100px;
  width: 100%;
  font-size: 2.4rem;
  
  background-color: ${({theme}) => theme.COLORS.SecondBackground};

  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding: 1.3rem 0 0 1.3rem;
  margin-bottom: 3.6rem;
  svg{
    font-size: 2.4rem;
    cursor: pointer;
  }

  h2{
    font-weight: 400;
  }
`