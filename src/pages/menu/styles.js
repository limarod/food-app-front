import { styled } from "styled-components";

export const Container = styled.div`

  .content{
    padding: 0 2.1rem;

    .buttonText{
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
      
    }

    .border{
      border-bottom: 2px solid;
      border-color: ${({theme}) => theme.COLORS.SecondBackground};
      margin-top: -10px;
      margin-bottom: 10px;
    }

    .input{
      margin-bottom: 3.6rem;
    }
  }


`