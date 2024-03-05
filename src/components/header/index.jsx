import { Container, NewButton } from "./styles";
import {HiOutlineMenu} from "react-icons/hi"
import {BiFoodMenu} from "react-icons/bi"
import {useAuth} from "../../hooks/auth"
import {useHandleQuantity} from "../../hooks/quantityDishContext"
import {USER_ROLE} from "../../utils/roles"
import {PiReceipt} from "react-icons/pi"
import { useNavigate } from "react-router-dom"
import {Input} from "../../components/input"
import {ButtonText} from "../buttonText"
import {BsSearch} from "react-icons/bs"
import { GoSignOut } from "react-icons/go";
import {useState, useEffect} from "react"
import { api } from "../../services/api";




export function Header({onOpenMenu, currentPage, onSearchComplete }){
 const navigate = useNavigate()
 const {user,  signOut} = useAuth()
 const { addToCartShopping, shoppingCartNumber} = useHandleQuantity()


  const [search, setSearch] = useState("")

  function handleToMenu(event){
    event.preventDefault();
    navigate("/")
  }

  function handleGoToShoppingCart(event){
    event.preventDefault();
    navigate("/order")
  }

  function handleToNewDish(event){
    event.preventDefault();
    navigate("/newDish")
  }

  function handleSignOut(){
    signOut()
    navigate("/")
  }

  function handleToOrderHistory(event){
    event.preventDefault();
    navigate("/orderHistory")
  }

  function handleToFavorites(event){
    event.preventDefault();
    navigate("/favorites")
  }
  function handleToorderHistory(event){
    event.preventDefault();
    navigate("/orderHistory")
  }

  useEffect(() =>{
    async function handleSearch(){
      const response = await api.get(`/menu?name=${search}&ingredients=${search}`)
      if(typeof onSearchComplete === 'function'){
        onSearchComplete(response.data)
      }
      
    }
    handleSearch()
  },[search])
    
  return (
    <Container>

      <div className="container">


        {
          currentPage === 'home' && 
            <HiOutlineMenu 
              className="sideMenuButton" 
              onClick={onOpenMenu } 
            />
        }
        
        <div className="foodExplorer">
          <BiFoodMenu onClick={(event) => handleToMenu(event)} className="iconLogo"  style={{cursor: 'pointer'}}/>
          <h1 onClick={(event) => handleToMenu(event)} style={{cursor: 'pointer'}} >Food explorer</h1>
        { 
          [USER_ROLE.ADMIN].includes(user.role) &&
            
          <small className="roleSpan">{user.role}</small>
        }
        </div>
        

        <div className="search">
          <Input 
            className="search"
            icon={ BsSearch } 
            type="text" 
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch( e.target.value)}
          />
        </div>


        { 
            [USER_ROLE.CUSTOMER].includes(user.role) &&
            <div className="favorites">
              <ButtonText
                title={"Favoritos"}
                className="favorites"
                onClick={ (event) => handleToFavorites(event)}
              />

              <ButtonText
                title={"Histórico"}
                className="history"
                onClick={ (event) => handleToorderHistory(event)}
              />
           </div>
        }

        {
          [USER_ROLE.CUSTOMER].includes(user.role) &&
            <div className="buttonDetails">
              <NewButton 
                className="buttonDetails"
                icon={PiReceipt}
                title={<span 
                          className="shoppingCartLargerDevices"> Pedidos - 
                          ({shoppingCartNumber}) 
                        </span>
                      }
                onClick={(event) => handleGoToShoppingCart(event)}
              />
            </div>
        }

        {
          [USER_ROLE.ADMIN].includes(user.role) &&
          <div className="buttonDetails">
            <NewButton 
              className="buttonDetails"
              title={"Novo prato" }
              onClick={ (event) => handleToNewDish(event)}
            />
          </div>
        }

        {
          [USER_ROLE.ADMIN].includes(user.role) &&
          <div className="buttonHistory">
            <ButtonText
              title={"Histórico de pedidos"}
              className="buttonHistory"
              onClick={ (event) => handleToOrderHistory(event)}
            />
          </div>
        }
        <>       
          <GoSignOut 
            onClick={handleSignOut}
            className="buttonSignOut"
          />
        </>

        {
          [USER_ROLE.CUSTOMER].includes(user.role) &&
            <div className="shoppingCart">
              {
                (currentPage === 'home' || currentPage === 'details') &&
                <>
                <PiReceipt 
                  onClick={handleGoToShoppingCart}
                  className="receipt"
                />
                </>
              } 

              {
                (currentPage === 'home' || currentPage === 'details') &&
                <span>{shoppingCartNumber}</span>
              }
            </div>
        }


      </div>

    </Container>
  )
}
