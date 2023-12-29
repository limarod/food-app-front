import {Container} from "./styles"
import { Header } from "../../components/header"
import { HeaderWreceipt } from "../../components/headerWreceipt"
import { Footer } from "../../components/footer"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"
import dishimage from "../../assets/Dish - Salada Ravanello.png"

export function Order(){
  return(
    <Container>
      <HeaderWreceipt/>
        <main>
          <h1>Meu pedido</h1>
          <div className="dishsContainer">
            <img src={dishimage} alt="imagem de macarrons e frutas" />
            <div>
              <h2>Salada Radish</h2>
              <ButtonText className="newButtonText" title={"Remover item"}/>
            </div>
          </div>

          <div className="dishsContainer">
            <img src={dishimage} alt="imagem de macarrons e frutas" />
            <div>
              <h2>Salada Radish</h2>
              <ButtonText className="newButtonText" title={"Remover item"}/>
            </div>
          </div>

          <div className="dishsContainer">
            <img src={dishimage} alt="imagem de macarrons e frutas" />
            <div>
              <h2>Salada Radish</h2>
              <ButtonText className="newButtonText" title={"Remover item"}/>
            </div>
          </div>

          <div className="dishsContainer">
            <img src={dishimage} alt="imagem de macarrons e frutas" />
            <div>
              <h2>Salada Radish</h2>
              <ButtonText className="newButtonText" title={"Remover item"}/>
            </div>
          </div>

          <h2>Total: R$ 103,88</h2>
          <div className="button">
            <Button title={"Avançar"}/>
          </div>
        </main>

      <Footer/>
    </Container>
  )
}