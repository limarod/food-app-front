import {Container} from "./styles"
import {HeaderMenu} from "../../components/headerMenu" 
import{ Input} from"../../components/input"
import{ ButtonText} from"../../components/buttonText"
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

        <ButtonText className="buttonText" title={"Novo prato"}/>
        <div className="border"></div>
        <ButtonText className="buttonText" title={"Sair"}/>
        <div className="border"></div>
      </div>

      <Footer/>

    </Container>
  )
}