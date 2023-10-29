import { styled } from "styled-components";

export const Container = styled.div`

  .homeImg{
    margin: 4.4rem 0 4.4rem;
    
    display: flex;
    background-color: ${({theme}) => theme.COLORS.SecondBackground};



    img{
      width: 15rem;

      margin-top: -2.9rem;
      margin-left: -1.8rem;
    }

    .homeImgBackground{
      padding: 2.2rem 2.1rem 0 0;
      margin-left: -0.8rem;

      h2{
        margin-bottom: 0.8rem;
      }
    }
  }

  h2, h3{
    font-size: 1.4rem;
    font-weight: 400;
  }

  p{
    font-size: 1rem;

  }

  .content{
    padding:0 1.0rem 0 2.4rem ;
  }


  .main{
    display: flex;
    flex-direction: column;

    gap: 2.4rem;
  }

  .backgroundCard{
    width: 14rem;
    height: 20rem;
    background-color: ${({theme}) => theme.COLORS.CardsBackground};

    margin-top: 2rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    padding: 1.6rem;

    >h4{
      font-size: 1.1rem;
      font-weight: 400;
      margin-bottom: 1rem;
    }

    span{
      
        margin-bottom: 0.5rem;
        margin-left: 10rem;
        margin-top: -0.5rem;
        
        svg{
           font-size: 1.8rem;
        }
    }

    >img{
      width: 7.5rem;
      margin-bottom: 7px;
      margin-top: -5px;
    }

    .AddDishs{
    display: flex;
    gap: 1rem;

    align-items: center;

    margin-top: -7px;
    }
  }


  .cardsEntrada{
    display: flex;
    gap: 1.6rem;
  
    margin-top: -3rem;
  }

  .cardsRefeicao{
    display: flex;
    gap: 1.6rem;
  
    margin-top: -3rem;
  }

  .cardsBebida{
    display: flex;
    gap: 1.6rem;
  
    margin-top: -3rem;
  }

  .cardsSobremesa{
    display: flex;
    gap: 1.6rem;
  
    margin-top: -3rem;
  }
`