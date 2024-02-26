import {Container, StyledButtonText, StyledButtonText2, StyledButton, StyledFilledHeartIcon} from "./styles"
import {Header} from "../../components/header"
import {Footer} from "../../components/footer"
import macarrons from "../../assets/macarrons.png"
import {PiPencilSimpleLight, PiHeartStraight, PiHeartStraightFill } from "react-icons/pi"
import {AiOutlineMinus , AiOutlinePlus } from "react-icons/ai"
import {Menu} from "../menu"
import { useState, useEffect, useRef, useLayoutEffect  } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"
import {useAuth} from "../../hooks/auth"
import{USER_ROLE} from "../../utils/roles"
import { useMemo } from "react"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export function Home (){



  const navigate = useNavigate()
  const params = useParams()

  const {user, addToCartShopping, updateDishsOrderNumber, dishsNumberOrder } = useAuth()


  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false)
  const [dishs, setDishs] = useState([])

  const [shoppingCartNumber, setShoppingCartNumber] = useState(0)

  const [isFavorite, setIsFavorite] = useState(false)

  const dishImgUrl = useMemo(() => dishs.map(dish => `${api.defaults.baseURL}/files/${dish.image_plate}`))

  function handleUpdateDish(dishId){
    navigate(`/updateDish/${dishId}`)
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  function handleSearchCompleted(data){
    setDishs(data)
  }


  async function addToFavorites(dishId){
    console.log(dishId)
    const dish_id = dishId
    const response = await api.get("/favorites")
    const favorites = response.data

    const favoriteItem = favorites.find(dish => dish.dish_id === dish_id && dish.is_favorite === 1 )


    if(!favoriteItem){ 
      await api.post("/favorites",{dish_id})

    }else{
      await api.delete(`/favorites/${favoriteItem.id }`)
    }

  }

  const [heartIcon, setHeartIcon] = useState({})

  useEffect(() =>{
    async function fetchFavorites(){

      const response = await api.get("/favorites")
      const favorites = response.data

      const updatedIcons = {};

      favorites.forEach((favorite) =>{
        updatedIcons[favorite.dish_id] = <StyledFilledHeartIcon/>
      });

      setHeartIcon(updatedIcons)

    }

    fetchFavorites()
  }, [addToFavorites])


  return(
    <Container>
      <Menu 
        sideMenuIsOpen={sideMenuIsOpen}
        onCloseMenu={()=> {setSideMenuIsOpen(false)
          document.body.classList.remove("menu-open")
        }}



        onSearchComplete={handleSearchCompleted}
      />

        <Header className="header"
          onOpenMenu={() => {setSideMenuIsOpen(true)
            document.body.classList.add("menu-open")

          }}
          onSearchComplete={handleSearchCompleted}
          
          currentPage="home"
          shoppingCartNumber={shoppingCartNumber}
          setShoppingCartNumber={setShoppingCartNumber}
        />

        <div className="content" menuOpen={sideMenuIsOpen}>
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
              
              <Swiper 
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 breakpoints={{
                  0:{
                    slidesPerView: 2,
                  },
                  320: {
                    slidesPerView: 2,
                  },
                  768:{
                    slidesPerView:3,
                  },
                  1024: {
                    slidesPerView: 4,
                  }
                }}
                 spaceBetween={15}
                 className="custom-swiper"
              >
               
              {
                dishs && 
           
                dishs.filter(dish => dish.category === "Entrada")
                .map(dish => (
                  
                  <li key={dish.id.toString()}>
                    <SwiperSlide key={dish.id.toString()}>
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
                        <StyledButtonText title={(heartIcon[dish.id]) || <PiHeartStraight/>} 
                          onClick ={(event) => {
                          event.preventDefault();
                          addToFavorites(dish.id);
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
                                <StyledButtonText2 title={< AiOutlineMinus/>} onClick={() => { updateDishsOrderNumber(dish.id, 'minus')}}/>
                                <p>{dishsNumberOrder[dish.id] || 1 }</p>

                                <StyledButtonText2 title={< AiOutlinePlus/>} onClick={() => updateDishsOrderNumber(dish.id, 'add')}/>
                              </div>
                          }
                          {
                            [USER_ROLE.CUSTOMER].includes(user.role) &&
                            <StyledButton className="buttonHome"
                              title={"Incluir"} 
                              onClick ={(event) => {event.preventDefault() ; addToCartShopping(dish)}}
                            />
                          }
                          


                    </div>
                    </SwiperSlide>
                  </li>
                ))
                        
              }
              </Swiper>
            </div>

            <div className="cardsRefeicao">
              <h3>Refeições</h3>
              <Swiper 
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 breakpoints={{
                  0:{
                    slidesPerView: 2,
                  },
                  320: {
                    slidesPerView: 2,
                  },
                  768:{
                    slidesPerView:3,
                  },
                  1024: {
                    slidesPerView: 4,
                  }
                }}
                 spaceBetween={15}
                 className="custom-swiper"
              >
              {
                dishs && 
           
                dishs.filter(dish => dish.category === "Refeição")
                .map(dish => (
                  <li key={dish.id.toString()}>
                    <SwiperSlide key={dish.id.toString()}>
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
                        <StyledButtonText title={(heartIcon && heartIcon[dish.id]) || <PiHeartStraight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        addToFavorites(dish.id)
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
                        <h3> {dish.price}</h3>
                        {  
                          [USER_ROLE.CUSTOMER].includes(user.role) &&
                            <div className="AddDishs">
                              <StyledButtonText2 title={< AiOutlineMinus/>} onClick={() => { updateDishsOrderNumber(dish.id, 'minus')}}/>
                              <p>{dishsNumberOrder[dish.id] || 1 }</p>

                              <StyledButtonText2 title={< AiOutlinePlus/>} onClick={() => { updateDishsOrderNumber(dish.id, 'add')}}/>
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
                    </SwiperSlide>
                  </li>
                ))
              
              }
              </Swiper>
            </div>

            <div className="cardsBebida">
              <h3>Bebidas</h3>
              <Swiper 
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 breakpoints={{
                  0:{
                    slidesPerView: 2,
                  },
                  320: {
                    slidesPerView: 2,
                  },
                  768:{
                    slidesPerView:3,
                  },
                  1024: {
                    slidesPerView: 4,
                  }
                }}
                 spaceBetween={15}
                 className="custom-swiper"            
              >
                {
                dishs && 
           
                dishs.filter(dish => dish.category === "Bebida")
                .map(dish => (
                  <li key={dish.id.toString()}>
                    <SwiperSlide key={dish.id.toString()}>
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
                        <StyledButtonText title={ (heartIcon && heartIcon[dish.id]) || <PiHeartStraight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        addToFavorites(dish.id)
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
                        <h3> {dish.price}</h3>
                        {  
                          [USER_ROLE.CUSTOMER].includes(user.role) &&
                            <div className="AddDishs">
                              <StyledButtonText2 title={< AiOutlineMinus/>} onClick={() => { updateDishsOrderNumber(dish.id, 'minus')}}/>
                              <p>{dishsNumberOrder[dish.id] || 1 }</p>

                              <StyledButtonText2 title={< AiOutlinePlus/>} onClick={() => { updateDishsOrderNumber(dish.id, 'add')}}/>
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
                    </SwiperSlide>
                  </li>
                ))
              
              }
              </Swiper>
            </div>

            <div className="cardsSobremesa">
            <h3>Sobremesas</h3>
            <Swiper 
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 breakpoints={{
                  0:{
                    slidesPerView: 2,
                  },
                  320: {
                    slidesPerView: 2,
                  },
                  768:{
                    slidesPerView:3,
                  },
                  1024: {
                    slidesPerView: 4,
                  }
                }}
                 spaceBetween={15}
                 className="custom-swiper"
              >
              {
                dishs && 
           
                dishs.filter(dish => dish.category === "Sobremesa")
                .map(dish => (
                  <li key={dish.id.toString()}>
                    <SwiperSlide key={dish.id.toString()}>
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
                        <StyledButtonText title={(heartIcon && heartIcon[dish.id]) || <PiHeartStraight/>} 
                        onClick ={(event) => {
                        event.preventDefault();
                        addToFavorites(dish.id)
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
                        <h3> {dish.price}</h3>
                        {  
                          [USER_ROLE.CUSTOMER].includes(user.role) &&
                            <div className="AddDishs">
                              <StyledButtonText2 title={< AiOutlineMinus/>} onClick={() => { updateDishsOrderNumber(dish.id, 'minus')}}/>
                              <p>{dishsNumberOrder[dish.id] || 1 }</p>

                              <StyledButtonText2 title={< AiOutlinePlus/>} onClick={() => { updateDishsOrderNumber(dish.id, 'add')}}/>
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
                    </SwiperSlide>
                  </li>
                ))
              
              }
              </Swiper>
            </div>

          </div>
          

        </div>

      <Footer />

    </Container>
  )
}

