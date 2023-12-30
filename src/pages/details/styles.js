import {styled} from "styled-components"
import { Button } from "../../components/button"
import { ButtonText } from "../../components/buttonText"

export const Container = styled.div`

display: flex;
flex-direction: column;

li{
  list-style: none;
}

  Icon{
    font-size: 2rem;
  }

.containerDetails{
  padding: 0 3.5rem;
  /* padding:0 1.0rem 0 2.4rem ; */
  margin:  3rem 0 4rem;
  text-align: center;


  flex: 1;

  img{
    margin: 1.6rem 0;
    width: 22rem;
  }

  h1{
    font-size: 2.0rem;
  }
  p{
    font-size: 1.4rem;
    margin: 2.4rem 0;
  }

  .tagsContainer{
    margin: 0 auto;
    max-width: 30rem;
    padding: 0 1.1rem;

    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    
  }


  .AddDishs{
    display: flex;
    gap: 1rem;

    align-items: center;
    justify-content: center;
    margin-bottom: 7px;

  }

}


`
export const NewButton = styled(Button)`

  &.buttonDetails{
    background-color: ${({theme}) => theme.COLORS.BUTTON_COLOR};
    margin: auto;
    max-width: 45rem;
}
`
export const NewButtonText = styled(ButtonText)`
  font-size: 2rem;
`

export const StyledButtonText2 = styled(ButtonText)`
  font-size: 2.6rem;

`