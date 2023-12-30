import {Container, StyledButtonText, StyledButtonText2, StyledButton, StyledFilledHeartIcon, CustomSlider} from "./styles"
import {Header} from "../../components/header"
import {Footer} from "../../components/footer"
import macarrons from "../../assets/macarrons.png"
import salada_rav from "../../assets/Dish - Salada Ravanello.png"
import {PiPencilSimpleLight, PiHeartStraight, PiHeartStraightFill } from "react-icons/pi"
import {AiOutlineMinus , AiOutlinePlus } from "react-icons/ai"
import {Menu} from "../menu"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ButtonText } from "../../components/buttonText"
import { Button } from "../../components/button"
import { api } from "../../services/api"
import {useAuth} from "../../hooks/auth"
import{USER_ROLE} from "../../utils/roles"


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


export function Home (){


  const navigate = useNavigate()
  const params = useParams()

  const {user, addToCartShopping} = useAuth()


  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false)
  const [dishs, setDishs] = useState([])
  const [heartIcon, setHeartIcon] = useState({})
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

  function toogleHeartIcon(dishId){

    setHeartIcon((prevIcon) =>{
      const updatedIcons = { ...prevIcon };

    // Verifica se o ícone para o dishId já existe no estado 
    // Se não existir, inicializa com o ícone do coração preenchido
    if (!updatedIcons[dishId]) { 
      updatedIcons[dishId] = <StyledFilledHeartIcon />;
    } else {
      // Se existir, alterna entre preenchido e vazio
      updatedIcons[dishId] = (updatedIcons[dishId].type === PiHeartStraight) 
        ? <StyledFilledHeartIcon />
        : <PiHeartStraight/>;
    }
    console.log(updatedIcons)
      return updatedIcons
      
    })
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



  return(
    <Container>
      <Menu 
        sideMenuIsOpen={sideMenuIsOpen}
        onCloseMenu={()=> setSideMenuIsOpen(false)}
        onSearchComplete={handleSearchCompleted}
      />

        <Header className="header"
          onOpenMenu={() => {setSideMenuIsOpen(true)}}
          currentPage="home"
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
                // slidesToShow={dishs.filter(dish => dish.category === "Entrada").length > 1 ? 2 : 1}
                // slidesToShowMobile={dishs.filter(dish => dish.category === "Entrada").length > 1 ? 2 : 4}
                className={dishs.filter(dish => dish.category === "Entrada").length > 1 ? "" : "single-slide"}
                slidesToScroll={1}  
                // initialSlide={0}
              >
              {
                dishs && 
           
                dishs.filter(dish => dish.category === "Entrada")
                .map(dish => (
                  <li key={dish.id.toString()}>
                    <div className="backgroundCard">
                      
                      { 
                        [USER_ROLE.ADMIN].includes(user.role) &&
                        <StyledButtonText title={<PiPencilSimpleLight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        handleUpdateDish(dish.id)}}
                        />
                      }
                      {
                        [USER_ROLE.CUSTOMER].includes(user.role) &&
                        <StyledButtonText title={heartIcon[dish.id] || <PiHeartStraight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        toogleHeartIcon(dish.id)
                        }}
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
                        <div className="name-Price">
                          <h4> {dish.name} </h4>
                          <h3> {dish.price}</h3>
                        </div>
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
                            <StyledButton className="buttonHome"
                              title={"Incluir"} 
                              onClick ={(event) => {event.preventDefault() ; addToCartShopping();}}
                            />
                          }
                          


                    </div>
                  </li>
                ))
                        
              }
              </CustomSlider>
            </div>

            <div className="cardsRefeicao">
              <h3>Refeições</h3>
              <CustomSlider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={dishs.filter(dish => dish.category === "Refeição").length > 1 ? 2 : 1}
                className={dishs.filter(dish => dish.category === "Refeição").length > 1 ? "" : "single-slide"}
                slidesToScroll={1}  
                // initialSlide={0}
              >
              {
                dishs && 
           
                dishs.filter(dish => dish.category === "Refeição")
                .map(dish => (
                  <li key={dish.id.toString()}>
                    <div className="backgroundCard">
                      
                      { 
                        [USER_ROLE.ADMIN].includes(user.role) &&
                        <StyledButtonText title={<PiPencilSimpleLight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        handleUpdateDish(dish.id)}}
                        />
                      }
                      {
                        [USER_ROLE.CUSTOMER].includes(user.role) &&
                        <StyledButtonText title={heartIcon[dish.id] || <PiHeartStraight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        toogleHeartIcon(dish.id)
                        }}
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
                            <StyledButton 
                              className="buttonHome"
                              title={"Incluir"} 
                              onClick ={(event) => {event.preventDefault() ; addToCartShopping();}}
                            />
                          }
                          


                    </div>
                  </li>
                ))
              
              }
              </CustomSlider>
            </div>

            <div className="cardsBebida">
              <h3>Bebidas</h3>
              <CustomSlider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={dishs.filter(dish => dish.category === "Bebida").length > 1 ? 2 : 1}
                className={dishs.filter(dish => dish.category === "Bebida").length > 1 ? "" : "single-slide"}
                slidesToScroll={1}  
                // initialSlide={0}
              >
              {
                dishs && 
           
                dishs.filter(dish => dish.category === "Bebida")
                .map(dish => (
                  <li key={dish.id.toString()}>
                    <div className="backgroundCard">
                      
                      { 
                        [USER_ROLE.ADMIN].includes(user.role) &&
                        <StyledButtonText title={<PiPencilSimpleLight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        handleUpdateDish(dish.id)}}
                        />
                      }
                      {
                        [USER_ROLE.CUSTOMER].includes(user.role) &&
                        <StyledButtonText title={heartIcon[dish.id] || <PiHeartStraight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        toogleHeartIcon(dish.id)
                        }}
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
                            <StyledButton 
                              className="buttonHome"
                              title={"Incluir"} 
                              onClick ={(event) => {event.preventDefault() ; addToCartShopping();}}
                            />
                          }
                          


                    </div>
                  </li>
                ))
              
              }
              </CustomSlider>
            </div>

            <div className="cardsSobremesa">
            <h3>Sobremesas</h3>
            <CustomSlider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={dishs.filter(dish => dish.category === "Sobremesa").length > 1 ? 2 : 1}
                className={dishs.filter(dish => dish.category === "Sobremesa").length > 1 ? "" : "single-slide"}
                slidesToScroll={1}  
                // initialSlide={0}
              >
              {
                dishs && 
           
                dishs.filter(dish => dish.category === "Sobremesa")
                .map(dish => (
                  <li key={dish.id.toString()}>
                    <div className="backgroundCard">
                      
                      { 
                        [USER_ROLE.ADMIN].includes(user.role) &&
                        <StyledButtonText title={<PiPencilSimpleLight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        handleUpdateDish(dish.id)}}
                        />
                      }
                      {
                        [USER_ROLE.CUSTOMER].includes(user.role) &&
                        <StyledButtonText title={heartIcon[dish.id] || <PiHeartStraight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        toogleHeartIcon(dish.id)
                        }}
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
                            <StyledButton 
                              className="buttonHome"
                              title={"Incluir"} 
                              onClick ={(event) => {event.preventDefault() ; addToCartShopping();}}
                            />
                          }
                          


                    </div>
                  </li>
                ))
              
              }
              </CustomSlider>
            </div>

          </div>
          

        </div>

      <Footer />

    </Container>
  )
}



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


