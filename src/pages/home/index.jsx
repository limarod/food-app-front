import {Container} from "./styles"
import {Header} from "../../components/header"
import {Footer} from "../../components/footer"
import macarrons from "../../assets/macarrons.png"
import {PiPencilSimpleLight} from "react-icons/pi"

export function Home (){
  return(
    <Container>
      <Header/>
      <div className="content">
        <div className="homeImg">
          <img src={macarrons} alt="imagem de macarrons e frutas" />
          <div className="homeImgBackground">
            <h2>Sabores inigualáveis</h2>
            <p>Sinto o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>

        <div className="main">
          <div className="cardsEntrada">
            <h3>Entradas</h3>
            <div className="backgroundCard">
            <span><PiPencilSimpleLight/></span>
              <img src="" alt="" />
              <h4>Salada Ravanello &gt;</h4>
              <h4>R$ 49,90</h4>
            </div>
          </div>

          <div className="cardsRefeicao">
            <h3>Refeições</h3>
            <div className="backgroundCard">
              <span><PiPencilSimpleLight/></span>
              <img src="" alt="" />
              <h4>Salada Ravanello</h4>
              <h4>R$ 49,90</h4>
            </div>
          </div>

          <div className="cardsBebida">
            <h3>Bebidas</h3>
            <div className="backgroundCard">
              <span><PiPencilSimpleLight/></span>
              <img src="" alt="" />
              <h4>Salada Ravanello</h4>
              <h4>R$ 49,90</h4>
            </div>
          </div>

          <div className="cardsSobremesa">
            <h3>Sobremesas</h3>
            <div className="backgroundCard">
              <span><PiPencilSimpleLight/></span>
              <img src="" alt="" />
              <h4>Salada Ravanello</h4>
              <h4>R$ 49,90</h4>
            </div>
          </div>

        </div>

      </div>



      <Footer/>
    </Container>
  )
}