import {Container, StyledButtonText, StyledButtonText2, StyledButton, StyledFilledHeartIcon, CustomSlider} from "./styles"
import {Header} from "../../components/header"
import {Footer} from "../../components/footer"
import macarrons from "../../assets/macarrons.png"
import salada_rav from "../../assets/Dish - Salada Ravanello.png"
import {PiPencilSimpleLight, PiHeartStraight, PiHeartStraightFill } from "react-icons/pi"
import {AiOutlineMinus , AiOutlinePlus } from "react-icons/ai"
import {Menu} from "../menu"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { ButtonText } from "../../components/buttonText"
import { Button } from "../../components/button"
import { api } from "../../services/api"
import {useAuth} from "../../hooks/auth"
import{USER_ROLE} from "../../utils/roles"



import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


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
  const [heartIcon, setHeartIcon] = useState(<PiHeartStraight/>)
  const [dishsNumberOrder, setDishsNumberOrder] = useState(1)
  const [shoppingCartNumber, setShoppingCartNumber] = useState(0)

  
  const dishImgUrl = dishs.map(dish => `${api.defaults.baseURL}/files/${dish.image_plate}`)

  function handleUpdateDish(dishId){
    navigate(`/updateDish/${dishId}`)
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  function handleSearchCompleted(data){
    setDishs(data)
  }

  function toogleHeartIcon(){
    setHeartIcon((prevIcon) => prevIcon.type === PiHeartStraight ? <StyledFilledHeartIcon/> : <PiHeartStraight/>)
  }
  
  function addDishsOrder(dishId){
    
    setDishsNumberOrder(prevState => ({
      ...prevState,
      [dishId]: (prevState[dishId] || 1) + 1,
    }));


  }

  function minusDishOrder(dishId){

    setDishsNumberOrder((prevState) => {
      const currentCount = prevState[dishId] || 1;
      if(currentCount > 0){
        return{
          ...prevState, [dishId]: currentCount - 1,
        };
      }
      return prevState;
    })
    
  }

  function addToCartShopping(){
    setShoppingCartNumber((prevNumber) => prevNumber + 1)
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
          shoppingCartNumber={shoppingCartNumber}
          setShoppingCartNumber={setShoppingCartNumber}
        />
        <div className="content">
          <div className="homeImg">
            <img src={macarrons} alt="imagem de macarrons e frutas" />
            <div className="homeImgBackground">
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </div>

          <div className="main">
            <div className="cardsEntrada">
              <h3>Entradas</h3>
              
              <CustomSlider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={2}
                slidesToScroll={1}  
                // initialSlide={0}
              >
              {
                dishs && 
                
                dishs.map(dish => (
                  <li key={dish.id.toString()}>
                    <div className="backgroundCard">
                      
                      { 
                        [USER_ROLE.ADMIN].includes(user.role) &&
                        <StyledButtonText title={<PiPencilSimpleLight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        handleUpdateDish(dish.id)}}
                        // to={"/updateDish/25"} 
                        />
                      }
                      {
                        [USER_ROLE.CUSTOMER].includes(user.role) &&
                        <StyledButtonText title={heartIcon} 
                        onClick ={(event) => {
                        event.preventDefault();
                        toogleHeartIcon()
                        }}
                        // to={"/updateDish/25"} 
                        // handleUpdateDish(dish.id)
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
                        {  
                          [USER_ROLE.CUSTOMER].includes(user.role) &&
                            <div className="AddDishs">
                              <StyledButtonText2 title={< AiOutlineMinus/>} onClick={() => minusDishOrder(dish.id)}/>
                              <p>{dishsNumberOrder[dish.id] || 1 }</p>

                              <StyledButtonText2 title={< AiOutlinePlus/>} onClick={() => addDishsOrder(dish.id)}/>
                            </div>
                          }
                          {
                            [USER_ROLE.CUSTOMER].includes(user.role) &&
                            <StyledButton title={"Incluir"} onClick={addToCartShopping} />
                          }
                          


                    </div>
                  </li>
                ))
                
              }
              </CustomSlider>
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