import {Container} from "./styles"
import { Header } from "../../components copy/header"
import { Footer } from "../../components/footer"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"
import dishimage from "../../assets/Dish - Salada Ravanello.png"

export function Favorites(){
  return(
    <Container>
      <Header/>
        <main>
          <h1>Favoritos</h1>
          <div className="dishsContainer">
            <img src={dishimage} alt="imagem de macarrons e frutas" />
            <div>
              <h2>Salada Radish</h2>
              <ButtonText className="newButtonText" title={"Remover dos Favoritos"}/>
              {/* <Button className="buttonOrder" title={"Adicionar ao pedido"}/> */}
            </div>
          </div>

          <div className="dishsContainer">
            <img src={dishimage} alt="imagem de macarrons e frutas" />
            <div>
              <h2>Salada Radish</h2>
              <ButtonText className="newButtonText" title={"Remover dos Favoritos"}/>
              {/* <Button className="buttonOrder" title={"Adicionar ao pedido"}/> */}
            </div>
          </div>

          <div className="dishsContainer">
            <img src={dishimage} alt="imagem de macarrons e frutas" />
            <div>
              <h2>Salada Radish</h2>
              <ButtonText className="newButtonText" title={"Remover dos Favoritos"}/>
              {/* <Button className="buttonOrder" title={"Adicionar ao pedido"}/> */}
            </div>
          </div>

          <div className="dishsContainer">
            <img src={dishimage} alt="imagem de macarrons e frutas" />
            <div>
              <h2>Salada Radish</h2>
              <ButtonText className="newButtonText" title={"Remover dos Favoritos"}/>
              {/* <Button className="buttonOrder" title={"Adicionar ao pedido"}/> */}
            </div>
          </div>

        </main>

      <Footer/>
    </Container>
  )
}