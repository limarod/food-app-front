import {Container} from "./styles"
import {HeaderMenu} from "../../components/headerMenu" 
import{ Input} from"../../components/input"
import{ Footer} from"../../components/footer"
import {BsSearch} from "react-icons/bs"
  

export function Menu(){
  return(
    <Container>
      <HeaderMenu/>

      <div className="content">
        <div className="input">
          <Input icon={BsSearch} type="text" placeholder="Busque por pratos ou ingredientes" />
        </div>

        <p>Novo prato</p>
        <p>Sair</p>
      </div>

      <Footer/>

    </Container>
  )
}