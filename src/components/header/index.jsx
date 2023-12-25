import { Container } from "./styles";
import {HiOutlineMenu} from "react-icons/hi"
import {BiFoodMenu} from "react-icons/bi"
import {useAuth} from "../../hooks/auth"
import {USER_ROLE} from "../../utils/roles"
import {PiReceipt} from "react-icons/pi"
import { useState } from "react";
 


export function Header({onOpenMenu, shoppingCartNumber, setShoppingCartNumber}){

  

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
          { 
            [USER_ROLE.ADMIN].includes(user.role) &&
            <small>{user.role} - {user.name}</small>    
          }

          {
            [USER_ROLE.CUSTOMER].includes(user.role) &&
            <div className="thirdDiv">
            <PiReceipt/>
            <span>{shoppingCartNumber}</span>
            </div>
          }
        </div>
    </Container>
  )
}