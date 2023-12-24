import { Container } from "./styles";
import {HiOutlineMenu} from "react-icons/hi"
import {BiFoodMenu} from "react-icons/bi"
import {useAuth} from "../../hooks/auth"

 


export function Header({onOpenMenu}){

  const {user} = useAuth()

  const handleOnClick = () =>{
    onOpenMenu();
  }
  return (
    <Container>
      
      <HiOutlineMenu onClick={handleOnClick } />
        <div>
          <BiFoodMenu />
          <h1>Food explorer</h1>
          <small>{user.role} - {user.name}</small>    
      </div>
    </Container>
  )
}