import { styled, css} from "styled-components";
import { ButtonText } from "../../components/buttonText";
import { Button } from "../../components/button";
import {PiHeartStraightFill} from "react-icons/pi"
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Container = styled.div`

  display: flex;
  flex-direction: column;


  .homeImg{
    margin: 4.4rem 0;
    padding: 0 0 00rem 0 ;
    
    display: flex;
    background-color: ${({theme}) => theme.COLORS.SecondBackground};

    img{
      width: 15rem;

      margin-top: -2.9rem;
      margin-left: -1.8rem;
    }

    .homeImgBackground{
      padding: 1.5rem 0rem 0.5rem 0rem;
      margin-left: -1.5rem;

      h2{
        margin-bottom: 0.8rem;
      }
    }
  }

  h2, h3{
    font-size: 1.6rem;
    font-weight: 400;
  }

  p{
    font-size: 1.1rem;
  }

  >.content{
    padding:0 1.0rem 0 2.4rem ;
    /* flex: 1;    */
  }


  .main{
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    /* flex: 1; */
  }

  li{
    list-style: none;
  }

  .backgroundCard{
    width: 100%;
    height: 29rem;
    background-color: ${({theme}) => theme.COLORS.CardsBackground};
    position: relative;

    margin-top: 2rem;


    display: flex;
    flex-direction: column;
    flex: 1;

    align-items: center;
    padding: 1.6rem;

    .name-Price{
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-between;
    }

    h4{
      font-size: 1.15rem;
      font-weight: 400;
      margin-bottom: 2rem;
      height: 4.5rem;
    }

    h3{
      font-size: 1.15rem;
      margin-bottom: 1rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.SMALL}){
      h4{
        height: 3rem
      }
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
      width: 10rem;
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
    .buttonHome{
    background-color:  ${({theme}) => theme.COLORS.BUTTON_COLOR};
  }
`

export const StyledButtonText = styled(ButtonText)`
  font-size: 3rem;
  position: absolute;
  right: 6px;
  top: 6px;
`

export const StyledButtonText2 = styled(ButtonText)`
  font-size: 2.4rem;

`

export const StyledButton = styled(Button)`
  height: 3.4rem;
  padding: 0.4rem 2.9rem;

  &.buttonHome{
    background-color:  ${({theme}) => theme.COLORS.BUTTON_COLOR};
  }

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

  &.single-slide{

    .slick-track {
      max-width: 55%;
  }}

  @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
    .slick-slider {
      slidesToShow: 4;
    }
  }
  
  `;


