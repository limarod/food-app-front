import {Container} from "./styles"
import {AiOutlineClose} from "react-icons/ai"


export function HeaderMenu({onCloseMenu}){
  return(
    <Container>
      <AiOutlineClose onClick={onCloseMenu}/>
      <h2>Menu</h2>
    </Container>
  )
}