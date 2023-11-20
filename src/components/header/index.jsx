import { Container } from "./styles";
import {HiOutlineMenu} from "react-icons/hi"
import {BiFoodMenu} from "react-icons/bi"




export function Header(){
  return (
    <Container>
      
      <HiOutlineMenu />
        <div>
          <BiFoodMenu />
          <h1>Food explorer</h1>
          <small>admin</small>    
      </div>
    </Container>
  )
}