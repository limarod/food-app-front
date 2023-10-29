import {styled} from "styled-components"
import {Button} from "../../components/button"

export const Container = styled.div`
  width: 100%;
  padding: 0 3.5rem;
  height: 100vh;
  display: flex;
  /* text-align: center; */
  /* justify-content: center; */

  .foodSvg{
    font-size: 3.7rem;
    color: #065E7C;
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
  /* align-items: center; */


  h1{
    font-size: 3rem;
    margin-bottom: 7.3rem;
  }


  >p{
    font-size: 1.4rem;
    font-weight: 400;
  }



`;

export const NewButton = styled(Button)`
 background-color: ${({theme}) => theme.COLORS.BUTTON_COLOR};
`
