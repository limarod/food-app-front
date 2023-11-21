import { styled } from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.COLORS.PrimaryBackground};
    transform: translateX(-100%);
    transition: transform 0.7s ;
    position: absolute;

    &[data-menu-is-open="true"]{
      transform: translateX(0);
    }

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