
import { Container, NewButton, NewButtonText } from "./styles"
// import {Header} from "../../components copy/header"
import {Footer} from "../../components/footer"
import {Tag} from "../../components/tag"
import dishimage from "../../assets/Dish - Salada Ravanello.png"
import {ButtonText} from "../../components/buttonText"
import{IoChevronBack} from "react-icons/io5"
import {PiReceipt} from "react-icons/pi"
import {AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"

export function Details(){
  return (
    <Container>
      <Header/>
        <div className="containerDetails">
          <NewButtonText icon={IoChevronBack}  title={"Voltar"}/>
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
          </div >
          <div className="orderDiv">
            <ButtonText icon={AiOutlineMinus}/>
            <p>01</p>
            <ButtonText icon={AiOutlinePlus}/>
            <NewButton icon={PiReceipt} title={`pedir - $45,90`} />
          </div>
        </div> 
      <Footer/>
    </Container>
  )
}