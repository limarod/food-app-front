import {styled} from "styled-components"
import {Button} from "../../components/button"
import{DEVICE_BREAKPOINTS} from "../../styles/deviceBreakPoints"

export const Container = styled.div`
  width: 100%;
  padding: 0 3.5rem;
  height: 100vh;
  display: flex;
  background-color: ${({theme}) => theme.COLORS.Dark500};


  .foodSvg{
    font-size: 3.7rem;
    color: #065E7C;
    margin-left: -0.5rem;
  }

  .iconFood{
    display: flex;
    gap: 1rem;
  }

  button{
    margin-bottom: 3rem;
  }

  .p1{
    display: flex;
    justify-content:center;
  }

  p{
    margin-bottom: -1rem;
  }

  

`;



export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 35.5rem;
  margin:0 auto;

  h1{
    font-size: 3rem;
    margin-bottom: 7.3rem;
  }


  p{
    font-size: 1.4rem;
    font-weight: 400;
  }

  h2{
    display: none;
  }

  @media(min-width: ${DEVICE_BREAKPOINTS.LARGE}){
    flex-direction: row;
    min-width: 90rem;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    



    .formContainer{
      display: flex;
      flex-direction: column;
      gap:2rem;
      background-color: ${({theme}) => theme.COLORS.PrimaryBackground};
      padding: 5.5rem 3.5rem ;
      width: 37rem;
      border-radius: 6px;
    }

    h2{
      display: block;
      font-size: 3.6rem;
      text-align: center;
    }

    input{
      background-color:  ${({theme}) => theme.COLORS.SecondBackground};
    }
  
  }

`;

export const NewButton = styled(Button)`
  &.buttonSignUp{
    background-color: ${({theme}) => theme.COLORS.BUTTON_COLOR};
  }
`
