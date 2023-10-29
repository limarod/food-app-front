
import { Container, NewButton, NewButtonText } from "./styles"
import {Header} from "../../components/header"
import {Footer} from "../../components/footer"
import {Tag} from "../../components/tag"
import dishimage from "../../assets/Dish - Salada Ravanello.png"

export function Details(){
  return (
    <Container>
      <Header/>
        <div className="containerDetails">
          <NewButtonText title={"Voltar"} to="/"/>
          <img src={dishimage} alt="imagem do prato" />

          <h1>Salada Ravanello</h1>

          <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

          <div className="tagsContainer">
            <Tag title={"alface"}/>  
            <Tag title={"cebola"}/>  
            <Tag title={"pão noan"}/>  
            <Tag title={"pepino"}/>  
            <Tag title={"rabanete"}/>  
            <Tag title={"tomate"}/>  
            <Tag title={"tomate"}/>  
            <Tag title={"tomate"}/>  
            <Tag title={"tomate"}/>  
            <Tag title={"tomate"}/>  
            <Tag title={"tomate"}/>  
          </div>
          <NewButton title={"Editar prato"} />
        </div> 
      <Footer/>
    </Container>
  )
}