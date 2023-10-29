import {Container} from "./styles"
import { Header } from "../../components copy/header"
import { Footer } from "../../components/footer"
import {VscCircleFilled} from "react-icons/vsc"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"



export function OrderHistory(){
  return(
    <Container>
      <Header/>
        <main>
          <h1>Pedidos</h1>
          <div className="content">
            <div className="orderItems">
              <div className="statusOrder">
                <span>000004</span>
                <span> <VscCircleFilled/> Pendente </span>
                <span> 28/10 às 18h00 </span>
              </div>
              <div className="listOrder">
                <span>1x salada Radish, </span>
                <span>1x Torradas de Parma, </span>
                <span>2x Sucos de murucujá</span>
              </div>
            </div>

            <div className="orderItems">
              <div className="statusOrder">
                <span>000004</span>
                <span> <VscCircleFilled/> Pendente </span>
                <span> 28/10 às 18h00 </span>
              </div>
              <div className="listOrder">
                <span>1x salada Radish, </span>
                <span>1x Torradas de Parma, </span>
                <span>2x Sucos de murucujá</span>
              </div>
            </div>
            
            <div className="orderItems">
              <div className="statusOrder">
                <span>000004</span>
                <span> <VscCircleFilled/> Pendente </span>
                <span> 28/10 às 18h00 </span>
              </div>
              <div className="listOrder">
                <span>1x salada Radish, </span>
                <span>1x Torradas de Parma, </span>
                <span>2x Sucos de murucujá</span>
              </div>
            </div>

          </div>
        

        </main>

      <Footer/>
    </Container>
  )
}