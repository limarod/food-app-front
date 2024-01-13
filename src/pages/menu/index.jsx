import {Container} from "./styles"
import {HeaderMenu} from "../../components/headerMenu" 
import{ Input} from"../../components/input"
import{ ButtonText} from"../../components/buttonText"
import{ Footer} from"../../components/footer"
import {BsSearch} from "react-icons/bs"
import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import{USER_ROLE} from "../../utils/roles"


export function Menu({sideMenuIsOpen, onCloseMenu, onSearchComplete  }){

  const {signOut} = useAuth()
  const {user} = useAuth()
  // const navigate = useNavigate()

  const [search, setSearch] = useState("")

  function handleSignOut(){
    signOut()
  }

   
  useEffect(() =>{
    async function handleSearch(){
      const response = await api.get(`/menu?name=${search}&ingredients=${search}`)
      onSearchComplete(response.data)
    }

    handleSearch()
    
  },[search])

  return(
    <Container data-menu-is-open={sideMenuIsOpen}>
      <HeaderMenu onCloseMenu={onCloseMenu}/>

      <div className="content">
        <div className="input">

          <Input 
            icon={ BsSearch } 
            type="text" 
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch( e.target.value)}
          />
                {/* 
            <ButtonText
              title={"Pesquisar"}
              onClick={() => onCloseMenu()}
            /> */}
        </div>

   
        {
         [USER_ROLE.ADMIN].includes(user.role) &&
          <ButtonText 
          className="buttonText" 
          title={"Novo prato"}
          to={"/newDish"}
          />
        }
        <div className="border"></div>
        <ButtonText className="buttonText" title={"Sair"} onClick={handleSignOut}/>
        <div className="border"></div>
      </div>

      <Footer/>

    </Container>
  )
}