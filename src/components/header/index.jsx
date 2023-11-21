import { Container } from "./styles";
import {HiOutlineMenu} from "react-icons/hi"
import {BiFoodMenu} from "react-icons/bi"




export function Header({onOpenMenu, hiddenSideMenu}){

  const handleOnClick = () =>{
    onOpenMenu();
    hiddenSideMenu();
  }
  return (
    <Container>
      
      <HiOutlineMenu onClick={handleOnClick } />
        <div>
          <BiFoodMenu />
          <h1>Food explorer</h1>
          <small>admin</small>    
      </div>
    </Container>
  )
}