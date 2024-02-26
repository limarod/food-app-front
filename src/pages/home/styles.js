import { styled, css} from "styled-components";
import { ButtonText } from "../../components/buttonText";
import { Button } from "../../components/button";
import {PiHeartStraightFill} from "react-icons/pi"
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"
import {createGlobalStyle} from "styled-components"






import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  
// export default createGlobalStyle`
//   body.menu-open{
//     background-color: red;
//   }
// `


export const Container = styled.div`

  .custom-swiper{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  display: flex;
  flex-direction: column;

  @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
    min-width: 82.5rem;
  }

  .homeImg{
    margin: 4.4rem 0;
    padding: 0 0 0 0 ;
    
    display: flex;
    background-color: ${({theme}) => theme.COLORS.SecondBackground};
    align-items: center;

    @media(min-width: ${DEVICE_BREAKPOINTS.SMALL}){
      gap: 5rem;
      justify-content: space-between;
      padding-right: 1rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
      justify-content: space-around;
      max-width: 79.5rem;
      min-width: 77.5rem;
      margin: 4.4rem auto;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      max-width: 87.5rem;
      min-width: 87.5rem;
    }

    img{
      width: 15rem;

      margin-top: -2.9rem;
      margin-left: -1.8rem;
     
     
      @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
        margin-left: -10rem;
        width: 20rem;
    }

      @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
        margin-left: -13rem;
      }

    }

    .homeImgBackground{
      padding: 1.5rem 0rem 0.5rem 0rem;
      margin-left: -1.5rem;

      h2{
        margin-bottom: 0.8rem;
      }

      @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
        h2{
          font-size: 3rem;
        }
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
    padding: 1.0rem 1.5rem 2.4rem ;
    /* flex: 1;    */
    

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
      /* margin: auto; */
      margin: 0 auto;
      max-width: 79.5rem;
      min-width: 82rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      padding: 0 7.5rem;
      max-width: 103rem;
      margin: 0 auto;
    }
  }


  .main{
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }


  li{
    list-style: none;
  }

  .backgroundCard{
    width: 100%;
    height: 31rem;
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
      color: ${({theme}) => theme.COLORS.FONT_PRICE};
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
      width: 10.5rem;
      height: auto;
      margin: 10px 0 20px 0 ;

      @media(min-width: 426px){
        width: 12rem;
      }
    }

    .AddDishs{
      display: flex;
      gap: 1rem;

      align-items: center;
      margin-bottom: 7px;

      p{
        font-size: 1.2rem;
      }
    }
  }

  .buttonHome{
    background-color:  ${({theme}) => theme.COLORS.BUTTON_COLOR};
  }

  .swiper{
    z-index: 0;
  }

  /* .swiper-container{
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  @media(min-width: ${DEVICE_BREAKPOINTS.X_SMALL}){
  .swiper-container {
    width: 320px;  
  }
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
    .swiper-container {
      width: 768px;
    }
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
    .swiper-container {
      width: 1024px;
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
