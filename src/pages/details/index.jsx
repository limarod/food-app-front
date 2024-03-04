
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
  const {user, addToCartShopping, updateDishsOrderNumber, dishsNumberOrder} = useAuth()

  const [data, setData] = useState(null)
  const [shoppingCartNumber, setShoppingCartNumber] = useState(0)

  const params = useParams();
  const navigate = useNavigate()

  function handleUpdateDish(dishId){
    navigate(`/updateDish/${dishId}`)
  }


  
  useEffect(() =>{
    async function fetchDishDetails(){
      const response = await api.get(`/menu/${params.id}`);
      
      setData(response.data);
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
            <div className="LargerDevicesContainer">
              <div>
                <img src={dishImgUrl} alt="imagem do prato" />
              </div>

              <div className="dataDish">
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
                    <StyledButtonText2 title={< AiOutlineMinus/>} onClick={(event) => { updateDishsOrderNumber(event, data.id, 'minus')}}/>
                    <p>{dishsNumberOrder[data.id] || 1 }</p>
                    <StyledButtonText2 title={< AiOutlinePlus/>} onClick={(event) => updateDishsOrderNumber(event, data.id, 'add')}/>
        
                    <NewButton 
                      className="buttonDetails"
                      icon={PiReceipt}
                      title={` pedir -  ${data.price}` }
                      onClick ={(event) => {event.preventDefault() ; addToCartShopping(data)}}
                    />
                  
                  </div>
                }
              </div>

            </div>
          
          
          </div> 
          
        }
      <Footer/>
    </Container>
  )
}