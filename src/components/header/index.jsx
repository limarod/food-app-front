import { Container, NewButton } from "./styles";
import {HiOutlineMenu} from "react-icons/hi"
import {BiFoodMenu} from "react-icons/bi"
import {useAuth} from "../../hooks/auth"
import {USER_ROLE} from "../../utils/roles"
import {PiReceipt} from "react-icons/pi"
import { useNavigate } from "react-router-dom"
import {Input} from "../../components/input"
import {BsSearch} from "react-icons/bs"
import { GoSignOut } from "react-icons/go";
import {useState, useEffect} from "react"
import { api } from "../../services/api";



export function Header({onOpenMenu, currentPage, onSearchComplete }){
 const navigate = useNavigate()
 const {user, addToCartShopping, shoppingCartNumber, signOut} = useAuth()


  const [search, setSearch] = useState("")



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
  }


  useEffect(() =>{
    async function handleSearch(){
      const response = await api.get(`/menu?name=${search}&ingredients=${search}`)
      onSearchComplete(response.data)
      
    }
    handleSearch()
  },[search])
    
  return (
    <Container>
      <div className="content">
          {currentPage === 'home' && <HiOutlineMenu onClick={onOpenMenu } />}
          <div className="secondDiv">
            <BiFoodMenu />
            <div className="roleHeader">
              <h1>Food explorer</h1>
              { 
              [USER_ROLE.ADMIN].includes(user.role) &&
                
                <small>{user.role}</small>
              }
            </div>

            
            <div className="inputLargerDevices">
            
            
              <Input 
                className="search"
                icon={ BsSearch } 
                type="text" 
                placeholder="Busque por pratos ou ingredientes"
                onChange={(e) => setSearch( e.target.value)}
              />
           
           
              {[USER_ROLE.CUSTOMER].includes(user.role) &&
                <NewButton 
                  className="buttonDetails"
                  icon={PiReceipt}
                  title={` Pedidos - (0)`  }
                  onClick={(event) => handleGoToShoppingCart(event)}
                />
              }
              {[USER_ROLE.ADMIN].includes(user.role) &&
                <NewButton 
                  className="buttonDetails"
                  title={"Novo prato" }
                  onClick={ (event) => handleToNewDish(event)}
                />
              }

              <div className="signOutButton">
                <GoSignOut onClick={handleSignOut}/>
              </div>

             

          </div>
          </div>

            
         

          {
            [USER_ROLE.CUSTOMER].includes(user.role) &&
            <div className="thirdDiv">
              {
                (currentPage === 'home' || currentPage === 'details') &&
                <PiReceipt onClick={handleGoToShoppingCart}/>
              }

              {
                (currentPage === 'home' || currentPage === 'details') &&
                <span>{shoppingCartNumber}</span>
              }
            </div>
          }

          { 
            [USER_ROLE.ADMIN].includes(user.role) &&
            <div  className="fourthdDiv">
              <small>{user.role}</small> <small> {user.name}</small>    
            </div>
          }
      </div>
    </Container>
  )
}