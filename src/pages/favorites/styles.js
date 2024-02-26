import { styled } from "styled-components";
import { ButtonText } from "../../components/buttonText";

       
export const Container = styled.div`
 
  main{

    padding:0 0 0 3.5rem;

    h1{
      font-size: 3.2rem;
      margin: 3.6rem 0 2.7rem 0;
    }
    h2{
      font-size: 2rem;
    }

    img{
      width: 7.2rem;
    }

    .dishsContainer{
      padding: 1.6rem 0 ;

      display: flex;
      align-items: center;
      gap: 1.5rem;
      
      div{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
    }

    .newButtonText{
      font-size: 1.2rem;
      color: ${({theme}) => theme.COLORS.BUTTON_COLOR2};
    }

    >h2{
      margin-top: 2rem;
      margin-bottom: 3.2rem;
    }

    .buttonOrder{
      color: aqua;
      font-size: 1.2rem;
    }
  }

  footer{
    margin-top: 5rem;
  }
`
export const NewButtonText = styled(ButtonText)`
  margin-top: 2rem;
  font-size: 2rem;
`