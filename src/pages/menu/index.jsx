import {Container} from "./styles"
import {HeaderMenu} from "../../components/headerMenu" 
import{ Input} from"../../components/input"
import{ ButtonText} from"../../components/buttonText"
import{ Footer} from"../../components/footer"
import {BsSearch} from "react-icons/bs"
import { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"

export function Menu({menuIsOpen, onCloseMenu}){
  const {signOut} = useAuth()
  const navigate = useNavigate()


  function handleNewPlatepath(){
    navigate("/newDish") 
  }

  function handleSignOut(){
    signOut()
  }

   

  return(
    <Container data-menu-is-open={menuIsOpen}>
      <HeaderMenu onCloseMenu={onCloseMenu}/>

      <div className="content">
        <div className="input">
          <Input icon={BsSearch} type="text" placeholder="Busque por pratos ou ingredientes" />
        </div>

        <ButtonText 
          className="buttonText" 
          title={"Novo prato"}
          to={"/newDish"}
        />
        <div className="border"></div>
        <ButtonText className="buttonText" title={"Sair"} onClick={handleSignOut}/>
        <div className="border"></div>
      </div>

      <Footer/>

    </Container>
  )
}