
import { Container, NewButton, NewButtonText, StyledButtonText2 } from "./styles"
import {Header} from "../../components/header"
import {Footer} from "../../components/footer"
import {Tag} from "../../components/tag"
import dishimage from "../../assets/Dish - Salada Ravanello.png"
import { useParams, useNavigate } from "react-router-dom"
import{useState, useEffect} from "react"
import { api } from "../../services/api";
import {USER_ROLE} from "../../utils/roles"
import {useAuth} from "../../hooks/auth"
import { PiReceipt } from "react-icons/pi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";





export function Details(){
  const {user, addToCartShopping} = useAuth()

  const [data, setData] = useState(null)
  const [dishsNumberOrder, setDishsNumberOrder] = useState(1)
  const [shoppingCartNumber, setShoppingCartNumber] = useState(0)

  const params = useParams();
  const navigate = useNavigate()

  function handleUpdateDish(dishId){
    navigate(`/updateDish/${dishId}`)
  }

  function addDishsOrder(){
 
    setDishsNumberOrder(dishsNumberOrder + 1);
  }

  function minusDishOrder(){
    if(dishsNumberOrder === 1){
      return
    }
    setDishsNumberOrder(dishsNumberOrder - 1);   
  }

  // function addToCartShopping(DishId){
  //   setShoppingCartNumber((prevNumber) => prevNumber + 1)
  
  // }
  
  useEffect(() =>{
    async function fetchDishDetails(){
      const response = await api.get(`/menu/${params.id}`);
      
      setData(response.data);
      // console.log(data)
    }

    fetchDishDetails();

  }, [])

  
  if(!data){
    return null
  }

  const dishImgUrl = `${api.defaults.baseURL}/files/${data.image_plate}`

  return (
    <Container>
      
      <Header       
        currentPage="details"
        shoppingCartNumber={shoppingCartNumber}
        setShoppingCartNumber={setShoppingCartNumber}
      />

        { data &&

        
          <div className="containerDetails">
            <NewButtonText title={"Voltar"} to="/"/>
            <img src={dishImgUrl} alt="imagem do prato" />

            <h1>{data.name}</h1>

            <p>{data.description}</p>

            
            <div className="tagsContainer">
             
            { data.ingredients && data.ingredients.map(ingredient => (
                <li key={ingredient.id.toString()} >
                  <Tag title={ingredient.tags}/> 
                </li>
                ))
            }
            
              </div>
             
            { [USER_ROLE.ADMIN].includes(user.role) &&
              <NewButton className="buttonDetails"
                title={"Editar prato"}
                onClick ={(event) => {
                  event.preventDefault();
                  handleUpdateDish(data.id)}}
              />
            }

            { [USER_ROLE.CUSTOMER].includes(user.role) &&

              <div className="AddDishs">
                <StyledButtonText2 title={< AiOutlineMinus/>} onClick={minusDishOrder}/>
                <p>{dishsNumberOrder}</p>
                <StyledButtonText2 title={< AiOutlinePlus/>} onClick={addDishsOrder}/>
    
                <NewButton 
                  className="buttonDetails"
                  icon={PiReceipt}
                  title={` pedir -  ${data.price}` }
                  onClick ={(event) => {event.preventDefault() ; addToCartShopping()}}
                />
              </div>
            }
           
           
          
          
          </div> 
          
        }
      <Footer/>
    </Container>
  )
}