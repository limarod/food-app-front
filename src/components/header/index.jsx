import { Container } from "./styles";
import {HiOutlineMenu} from "react-icons/hi"
import {BiFoodMenu} from "react-icons/bi"
import {useAuth} from "../../hooks/auth"
import {USER_ROLE} from "../../utils/roles"
import {PiReceipt} from "react-icons/pi"
import { useNavigate } from "react-router-dom"



export function Header({onOpenMenu, currentPage }){
 const navigate = useNavigate()
 const {user, addToCartShopping, shoppingCartNumber} = useAuth()

  function handleGoToShoppingCart(){
    navigate("/order")
  }
    
  return (
    <Container>
      <div className="content">
          {currentPage === 'home' && <HiOutlineMenu onClick={onOpenMenu } />}
          <div className="secondDiv">
            <BiFoodMenu />
            <h1>Food explorer</h1>
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