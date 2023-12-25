import {Container} from "./styles"
// import { Header } from "../../components copy/header"
import { Footer } from "../../components/footer"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"
import {PiCreditCard, PiForkKnifeBold} from "react-icons/pi"
import {MdPix, MdOutlineWatchLater, MdOutlineCheckCircleOutline} from "react-icons/md"
import {BsQrCode} from "react-icons/bs"
import {Textarea} from "../../components/textarea"

export function Payment(){
  return(
    <Container>
      <Header/>
        <main>
          <h1>Pagamento</h1>

          <div className="PaymentModel">
            <Button className="buttonPaymentPix" icon={MdPix} title={"PIX"} />
            <Button className="buttonPayment" icon={PiCreditCard} title={"Crédito"} />
          </div>
          
          <div className="paymentBox">


            <div className="pixBox">
              <img src="" alt="" />
              <BsQrCode className="qrCode"/>
            </div>

            <div className="creditCardBox">
              <div className="creditCardBoxAfter">
                <p>Número do Cartão</p>
                  <Textarea className="textArea" placeholder="0000 0000 0000 0000" />
                  <div className="creditCardBoxOther">
                    <div>
                      <p>Validade</p>
                      <Textarea className="textArea" placeholder="04/25"/>
                    </div>

                    <div>
                      <p>CVC</p>
                      <Textarea className="textArea" placeholder="000"/>
                    </div>
                  </div>

                  <Button title={"Finalizar pagamento"} className="button"/>
              </div>

              <div className="loadingPayment">
                  <MdOutlineWatchLater/>
                  <p>Aguardando pagamento no caixa</p>
              </div>

              <div className="aprovedPayment">
                  <MdOutlineCheckCircleOutline/>
                  <p>Pagamento aprovado!</p>
              </div>

            </div>

            <div className="orderDelivered">
                <PiForkKnifeBold/>
                <p>Pedido entregue!</p>
            </div>




          </div>

        </main>

      <Footer/>
    </Container>
  )
}