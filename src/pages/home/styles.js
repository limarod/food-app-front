import { styled, css} from "styled-components";
import { ButtonText } from "../../components/buttonText";
import { Button } from "../../components/button";
import {PiHeartStraightFill} from "react-icons/pi"


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  li{
    list-style: none;
    /* background-color: red; */



    &:last-child{
      /* transform: translateX(20px); */
      /* margin-right: 80px; */

    }

  }

  .backgroundCard{
    width: 100%;
    height: 25rem;
    background-color: ${({theme}) => theme.COLORS.CardsBackground};
    position: relative;

    margin-top: 2rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    padding: 1.6rem;


    >h4{
      font-size: 1.15rem;
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

    .imgDISH{
      width: 100%;
      height: auto;
      margin: 5px 0 12px 0 ;
    }

    .AddDishs{
      display: flex;
      gap: 1rem;

      align-items: center;

      /* margin-top: -7px; */
      margin-bottom: 7px;

      p{
        font-size: 1.2rem;
      }
    }
  

 
  }
`

export const StyledButtonText = styled(ButtonText)`
  font-size: 3rem;
  position: absolute;
  right: 6px;
  top: 6px;
`

export const StyledButtonText2 = styled(ButtonText)`
  font-size: 2.6rem;

`


export const StyledButton = styled(Button)`
  height: 100%;
  padding: 0.4rem 2.9rem;
  /* width: 5rem; */
  background-color:  ${({theme}) => theme.COLORS.BUTTON_COLOR};
`

export const StyledFilledHeartIcon = styled(PiHeartStraightFill)`
  color: red;

`;


export const CustomSlider = styled(Slider)`
  .slick-track {
    display: flex !important;
    justify-content: space-around;
    /* align-items: center; */
    gap: 5px;
    /* margin-left: 29.5px; */
  }

  .slick-dots{
    li {
      button {
        &::before {
          color: white;

        }
      }
    }
  }

  .slick-prev,
  .slick-next {
    display: none !important;
  }
  `;