import {styled} from "styled-components"
import { Button } from "../../components/button"


export const Container = styled.div`

display: flex;
flex-direction: column;

main{
  flex: 1;
}

li{
  list-style: none;
}

.content{
  padding: 1.6rem;
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
  border-radius: 0.4rem;

  display: flex;
  
  flex-wrap: wrap;
  gap: 1rem;
}

.buttonsDiv{
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 2rem;
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