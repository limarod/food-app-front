import {styled} from "styled-components"
import { Button } from "../../components/button"
import {DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"
import {Input} from "../../components/input"


export const Container = styled.div`

  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;


  main{
    flex-grow: 1;

    padding: 2rem;
    overflow: hidden;

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
  
  li{
    list-style: none;
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

  .newTagSection{
    background-color: ${({theme}) => theme.COLORS.SecondBackground};
    padding: 0.8rem 0.5rem;
    margin-top: 1.2rem;
    margin-bottom: 2.4rem;
    border-radius: 0.6rem;

    display: flex;
    
    flex-wrap: wrap;
    gap: 1rem;

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
     margin: 0;
     max-width: 55rem;
    }
  }

  .buttonsDiv{
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 2rem;

    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      justify-content: flex-end;
    }

  }

  .ParagraphIngredientsmobiles{
    @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
      display: none;
    }
  }
  .ParagraphIngredientslargerDevices{
    @media(max-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
      display: none;
    }
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

  @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
    

    .nameInput{
      width: 37rem;
    }

    .categoryInput{
      width: 25rem;
    }
    

    .priceInput{
      width: 15rem;
    }

    .inputImg{
      gap: 0;
    }

   
    //////////////////////////////////////////////////

    .selectInput{
      background-color: ${({theme}) => theme.COLORS.SecondBackground};
      border-radius: 0.6rem;
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
      height: 3.9rem;
      border-radius: 0.6rem;
      margin-top: 1.5rem;
    }
   
    .labelInputImg{
      display: inline-block;
      position: relative;
      
    }

    .selectImage{
      position: absolute;
      padding: 1rem 0;
      font-size: 1.2rem;
      transform: translate(50%, 10%);
      
    }

    .selectImageIcon{
      position: absolute;
      z-index: 1;
      font-size: 2.8rem;
      transform: translate(100%, -0%);
      
    }
    


  @media(min-width: ${DEVICE_BREAKPOINTS.MEDIUM}){
    footer{
      min-width: 82.5rem;
   }
  }

`

export const NewButton = styled(Button)`
  &.removeButton{
    background-color: ${({theme})=> theme.COLORS.SecondBackground};
    width: 39vw;
    max-width: 25rem;
    padding-right: 1rem;
    padding-left: 1rem;
  }

  &.saveButton{
    width: 39vw;
    max-width: 25rem;
    padding-right: 1rem;
    padding-left: 1rem;
}
`
