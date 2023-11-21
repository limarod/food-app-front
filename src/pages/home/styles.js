import { styled } from "styled-components";

export const Container = styled.div`
  /* height: 100%; */
  /* position: absolute; */
  /* z-index: 2; */

  .sideMenuHidden{
    &[data-hidden-below-menu="true"]{
      display: none;
      /* transform: translateX(0); */
    }
    
  }
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
    >svg{
      font-size: 2rem;
      color: white;

      margin-bottom: 1rem;
      margin-left: 9rem;
    }
  }
  }
`