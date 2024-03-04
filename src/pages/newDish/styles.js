import {styled} from "styled-components"
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"

export const Container = styled.div`


  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  .content{
    flex: 1;


  }

  main{
    flex: 1;

    padding: 2rem;

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
      margin: auto;
      min-width: 82rem;
      padding-left: 3rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      max-width: 87rem;
      min-width: 87rem;
      padding: 0;
      margin: 3rem auto;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.X_LARGE}){
      max-width: 93rem;
      min-width: 93rem;
    }
  }

  .buttonText{

    @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
      font-size: 2rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      font-size: 2.4rem;
    }
  }

  h1{
    font-size: 2.6rem;
    margin: 2.4rem 0;
  }

  p{
    font-size: 1.2rem;
  }

    option{
      font-size: 1.2rem;
      color: white;

      outline: none;
  }

  .LargerDevices{
    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      display: flex;
      margin-bottom: 3rem;

      justify-content: space-between;

    }
  }

  .LargerDevices2{
    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  }

  .titleEditFlex{
      @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

      }
  }

  .newTagSection{
    background-color: ${({theme}) => theme.COLORS.SecondBackground};
    padding: 0.8rem 0.5rem;
    margin-top: 1.2rem;
    margin-bottom: 2.4rem;
    border-radius: 0.4rem;

    display: flex;
    
    flex-wrap: wrap;
    gap: 1rem;

  

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
     margin: 0;
     min-width: 55rem;
     
    }
  }

  .buttonDiv{
    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      justify-content: flex-end;
    }

  }


  @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
    .imageInput{
      width: 20rem;
    }
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
    .nameInput{
      width: 37rem;
    }
  }
  
  @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
    .categoryInput{
      width: 25rem;
    }
  }
  
  @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){


    .priceInput{
      width: 15rem;
      
    }
  }

  .buttonsDiv{
    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      display: flex;
      justify-content: flex-end;
    }
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
    footer{
      min-width: 82.5rem;
   }
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
    .selectInput{
      background-color: ${({theme}) => theme.COLORS.SecondBackground};
      border-radius: 0.6rem;
      color: ${({theme}) => theme.COLORS.FONT_PLACEHOLDER}
    }

    .selectIcon{
      position: absolute;
      z-index: 1;
      font-size: 2.8rem;
      transform: translate(220px, 5%);
    }
  }
 
  
  .imageInput{
      width: 22rem;
      background-color: ${({theme}) => theme.COLORS.SecondBackground};
      height: 3.7rem;
      border-radius: 0.6rem;
      margin-top: 0.1rem;
      color: ${({theme}) => theme.COLORS.FONT_PLACEHOLDER}
    }
   
    .labelInputImg{
      display: inline-block;
      position: relative;
      
    }

    .selectImage{
      position: absolute;
      padding: 1rem 0;
      /* z-index: 1; */
      font-size: 1.2rem;
      transform: translate(50%, 10%);
      
    }

    .selectImageIcon{
      position: absolute;
      /* padding: 1rem 0; */
      z-index: 1;
      font-size: 2.8rem;
      /* transform: translateX(80%); */
      transform: translate(100%, -0%);
      
    }

`

