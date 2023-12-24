import {Container, StyledButtonText} from "./styles"
import {Header} from "../../components/header"
import {Footer} from "../../components/footer"
import macarrons from "../../assets/macarrons.png"
import salada_rav from "../../assets/Dish - Salada Ravanello.png"
import {PiPencilSimpleLight} from "react-icons/pi"
import {Menu} from "../menu"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ButtonText } from "../../components/buttonText"
import { Button } from "../../components/button"
import { api } from "../../services/api"
import {useAuth} from "../../hooks/auth"
import{USER_ROLE} from "../../utils/roles"


export function Home (){


    // useEffect(() => {
  //   const handleMessage = (event) => {
  //     console.log('Received MessageEvent:', event);
  //   };

  //   window.addEventListener('message', handleMessage);

  //   return () => {
  //     window.removeEventListener('message', handleMessage);
  //   };
  // }, []);

//   Busca no Código-Fonte:

// Procure no seu código por chamadas postMessage ou por qualquer código que envie mensagens entre janelas ou frames.
// Extensões do Navegador:

// Verifique se há extensões do navegador instaladas que possam estar interagindo com sua aplicação.
// Libs Externas:

// Se você estiver usando bibliotecas externas, verifique a documentação para garantir que não esteja ocorrendo alguma comunicação inesperada.
  const navigate = useNavigate()
  const {user} = useAuth()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [dishs, setDishs] = useState([])


  
  const dishImgUrl = dishs.map(dish => `${api.defaults.baseURL}/files/${dish.image_plate}`)
  console.log(dishImgUrl)

  function handleUpdateDish(dishId){
    navigate(`/updateDish/${dishId}`)
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  function handleSearchCompleted(data){
    setDishs(data)
  }
  


  return(


    <Container>
      <Menu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={()=> setMenuIsOpen(false)}
        onSearchComplete={handleSearchCompleted}
      />
      <div className="sideMenuHidden" data-hidden-below-menu={menuIsOpen} >
        <Header 
          onOpenMenu={() => {
              setMenuIsOpen(true);
              // setHiddenBelowMenu(true)
            }
          }
        />
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
              
              {
                dishs && dishs.map(dish => (
                  <li key={dish.id.toString()}>
                    <div className="backgroundCard">
                      { [USER_ROLE.ADMIN].includes(user.role) &&
                      <StyledButtonText title={<PiPencilSimpleLight/>} 
                      onClick ={(event) => {
                        event.preventDefault();
                        handleUpdateDish(dish.id)}}
                        // to={"/updateDish/25"} 
                        />
                      }
                    
                      <img 
                        src={dishImgUrl.find(url => url.includes(dish.image_plate))} 
                        alt=""
                        onClick={(event) => {
                          event.preventDefault()
                          handleDetails(dish.id)}}
                          className="imgDISH"
                      />
                        <h4> {dish.name} </h4>
                      <h4> {dish.price}</h4>
                    </div>
                  </li>
                ))
              }
            </div>

            <div className="cardsRefeicao">
              <h3>Refeições
              
              </h3>
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
      </div>
    </Container>
  )
}