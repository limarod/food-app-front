import {styled} from "styled-components"
import { Button } from "../../components/button"
import { ButtonText } from "../../components/buttonText"

export const Container = styled.div`

  Icon{
    font-size: 2rem;
  }

.containerDetails{
  padding: 0 3.5rem;
  margin:  3rem 0 4rem;
  text-align: center;

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

}


`
export const NewButton = styled(Button)`
  background-color: ${({theme}) => theme.COLORS.BUTTON_COLOR};
`
export const NewButtonText = styled(ButtonText)`
  font-size: 2rem;
`
