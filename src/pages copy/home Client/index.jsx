import {Container} from "./styles"
import {Header} from "../../components/header"
import {Footer} from "../../components/footer"
import macarrons from "../../assets/macarrons.png"
import dishimage from "../../assets/Dish - Salada Ravanello.png"
import {PiPencilSimpleLight, PiHeartStraightFill, PiHeartStraight } from "react-icons/pi"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"


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
          <h3>Entradas</h3>
          <div className="cardsEntrada">
            <div className="backgroundCard">
              <span> <ButtonText icon={PiHeartStraight}/> </span>
              <img src={dishimage} alt="imagem do prato" />
              <h4>Salada Ravanello &gt;</h4>
              <h4>R$ 49,90</h4>
              <div className="AddDishs">
                <ButtonText title={"-"}/>
                <p>01</p>
                <ButtonText title={"+"}/>
              </div>
              <Button title={"Incluir"} />
            </div>
            
            <div className="backgroundCard">
              <span> <ButtonText icon={PiHeartStraight}/> </span>
              <img src={dishimage} alt="imagem do prato" />
              <h4>Salada Ravanello &gt;</h4>
              <h4>R$ 49,90</h4>
              <div className="AddDishs">
                <ButtonText title={"-"}/>
                <p>01</p>
                <ButtonText title={"+"}/>
              </div>
              <Button title={"Incluir"} />
            </div>
          </div>

           <h3>Refeições</h3>
          <div className="cardsRefeicao">
            
            <div className="backgroundCard">
              <span> <ButtonText icon={PiHeartStraight}/> </span>
              <img src={dishimage} alt="imagem do prato" />
              <h4>Salada Ravanello</h4>
              <h4>R$ 49,90</h4>
              <div className="AddDishs">
                <ButtonText title={"-"}/>
                <p>01</p>
                <ButtonText title={"+"}/>
              </div>
              <Button title={"Incluir"} />
            </div>

            <div className="backgroundCard">
              <span> <ButtonText icon={PiHeartStraight}/> </span>
              <img src={dishimage} alt="imagem do prato" />
              <h4>Salada Ravanello</h4>
              <h4>R$ 49,90</h4>
              <div className="AddDishs">
                <ButtonText title={"-"}/>
                <p>01</p>
                <ButtonText title={"+"}/>
              </div>
              <Button title={"Incluir"} />
            </div>
          </div>

          <h3>Bebidas</h3>
          <div className="cardsBebida">
            <div className="backgroundCard">
              <span> <ButtonText icon={PiHeartStraight}/> </span>
              <img src={dishimage} alt="imagem do prato" />
              <h4>Salada Ravanello</h4>
              <h4>R$ 49,90</h4>
              <div className="AddDishs">
                <ButtonText title={"-"}/>
                <p>01</p>
                <ButtonText title={"+"}/>
              </div>
              <Button title={"Incluir"} />
            </div>

            <div className="backgroundCard">
              <span> <ButtonText icon={PiHeartStraight}/> </span>
              <img src={dishimage} alt="imagem do prato" />
              <h4>Salada Ravanello</h4>
              <h4>R$ 49,90</h4>
              <div className="AddDishs">
                <ButtonText title={"-"}/>
                <p>01</p>
                <ButtonText title={"+"}/>
              </div>
              <Button title={"Incluir"} />
            </div>
          </div>


          <h3>Sobremesas</h3>
          <div className="cardsSobremesa">
            <div className="backgroundCard">
              <span> <ButtonText icon={PiHeartStraight}/> </span>
              <img src={dishimage} alt="imagem do prato" />
              <h4>Salada Ravanello</h4>
              <h4>R$ 49,90</h4>
              <div className="AddDishs">
                <ButtonText title={"-"}/>
                <p>01</p>
                <ButtonText title={"+"}/>
              </div>
              <Button title={"Incluir"} />
            </div>

            <div className="backgroundCard">
              <span> <ButtonText icon={PiHeartStraight}/> </span>
              <img src={dishimage} alt="imagem do prato" />
              <h4>Salada Ravanello</h4>
              <h4>R$ 49,90</h4>
              <div className="AddDishs">
                <ButtonText title={"-"}/>
                <p>01</p>
                <ButtonText title={"+"}/>
              </div>
              <Button title={"Incluir"} />
            </div>
          </div>

        </div>

      </div>



      <Footer/>
    </Container>
  )
}