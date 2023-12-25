import {styled} from "styled-components"
import { Button } from "../../components/button"
import { ButtonText } from "../../components/buttonText"

export const Container = styled.div`

li{
  list-style: none;
}

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


  .AddDishs{
    display: flex;
    gap: 1rem;

    align-items: center;
    justify-content: center;
    /* margin-top: -7px; */
    margin-bottom: 7px;
  }

}


`
export const NewButton = styled(Button)`
  background-color: ${({theme}) => theme.COLORS.BUTTON_COLOR};
  width: 17rem;
`
export const NewButtonText = styled(ButtonText)`
  font-size: 2rem;
`

export const StyledButtonText2 = styled(ButtonText)`
  font-size: 2.6rem;

`