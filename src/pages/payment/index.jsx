import {Container} from "./styles"
import { Footer } from "../../components/footer"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"
import {PiCreditCard, PiForkKnifeBold} from "react-icons/pi"
import {MdPix, MdOutlineWatchLater, MdOutlineCheckCircleOutline} from "react-icons/md"
import {BsQrCode} from "react-icons/bs"
import {Textarea} from "../../components/textarea"
import { Header } from "../../components/header"
import { useState, useEffect } from "react"
import {useAuth} from "../../hooks/auth"
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"

export function Payment(){
  const navigate = useNavigate()

  const {setShoppingCartNumber,user, shoppingCartNumber} = useAuth()
  const [pixBox, setPixBox] = useState(true);
  const [creditCardBox, setCreditCardBox] = useState(false);
  const [finishedPayment, setFinishedPayment] = useState(false)

  

  const [numeroCartao, setNumeroCartao] = useState("");
  const [validade, setValidade] = useState("");
  const [cvc, setCvc] = useState("");
  const [numeroCartaoError, setNumeroCartaoError] = useState(" ");
  const [validadeError, setValidadeError] = useState(" ");
  const [cvcError, setCvcError] = useState(" ");


  function handleGoBack(){
    navigate(-1)
  }

  async function handleFinalizarPagamento() {

    const response = await api.get("/shoppingCart")
    const shoppingCartItems = response.data
    const user_id = user.id

    const responseOrders = await api.post("/orders", { user_id });
    const order_id = responseOrders.data.order_id


      const orderItems = shoppingCartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        total_price: parseFloat(item.price.replace(",",".")) * item.quantity,
        user_id: user_id,
      }))


      if(order_id){
        await api.post("/history",{
          orderItems: orderItems, 
          order_id: order_id,
        })
    }

    localStorage.clear()
    setShoppingCartNumber(0)
    await api.delete("/shoppingCartDeleteAll")
    navigate("/")

  };


  return(
    <Container>
      <Header/>
        <main>
          <ButtonText 
            className="backButton" 
            title={"Voltar"}
            onClick={handleGoBack}
          />
          <h1>Pagamento</h1>

          <div className="PaymentModel">
            <Button 
              className="buttonPaymentPix" 
              icon={MdPix} 
              title={"PIX"} 
              onClick={() => {
                setPixBox(true)
                setCreditCardBox(false)
                setFinishedPayment(false);
              }}
            />
            <Button 
              className="buttonPayment" 
              icon={PiCreditCard} 
              title={"Crédito"}
              onClick={() => {
                setPixBox(false)
                setCreditCardBox(true)
                setFinishedPayment(false);
              }}
            />
          </div>
          
          <div className="paymentBox">

          {
          pixBox && 
            <div className="pixBox">
              <img src="" alt="" />
              <BsQrCode className="qrCode"/>
            </div>
          }

          
            <div className="creditCardBox">
          {
            creditCardBox &&
              <div className="creditCardBoxAfter">
                <p>Número do Cartão</p>
                  <Textarea 
                    className={`textArea ${numeroCartaoError ? 'borderError' : ''} `}  
                    placeholder="0000 0000 0000 0000" 
                    required
                    onChange={(e) => {
                      const value = e.target.value;
                      setNumeroCartao(value);
                    }}
                    onBlur={() => {
                      if (numeroCartao.length < 16 || numeroCartao.length > 16) {
                        setNumeroCartaoError(" ");
                      } else {
                        setNumeroCartaoError("");
                      }
                    }}
                  />
            
                  <div className="creditCardBoxOther">
                    <div>
                      <p>Validade</p>
                      <Textarea 
                        className={`textArea ${validadeError ? 'borderError' : ''} `}  
                        placeholder="04/25"
                        required 
                        onChange={(e) => {
                          const value = e.target.value;
                          setValidade(value);
                        }}
                        onBlur={() => {
                          if (validade.length < 5) {
                            setValidadeError(" ");
                          } else {
                            setValidadeError("");
                          }
                        }}
                      />
                    </div>

                    <div>
                      <p>CVC</p>
                      <Textarea 
                        className={`textArea ${cvcError ? 'borderError' : ''} `} 
                        placeholder="000"
                        required
                        onChange={(e) => {
                          const value = e.target.value;
                          setCvc(value);
                        }}
                        onBlur={() => {
                          if (cvc.length < 3 || cvc.length > 3) {
                            setCvcError(" ");
                          } else {
                            setCvcError("");
                          }
                        }}
                      />
                    </div>
                  </div>
               
                  <Button 
                    title={"Finalizar pagamento"} 
                    className="button"
                    onClick={() => {
                      setPixBox(false)
                      setCreditCardBox(false)
                      setFinishedPayment(true)
                    }}
                    disabled={numeroCartaoError || validadeError || cvcError}
                  />
            </div>
            }
              <div className="loadingPayment">
                  <MdOutlineWatchLater/>
                  <p>Aguardando pagamento no caixa</p>
              </div>

            { 
              finishedPayment &&
              <div className="aprovedPayment">
                  <MdOutlineCheckCircleOutline/>
                  <p>Pagamento aprovado!</p>

                  <h1><ButtonText title={"Finalizar"} onClick={handleFinalizarPagamento}  /> </h1>
              </div>
             
            }
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