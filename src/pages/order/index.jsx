import {Container, NewButtonText} from "./styles"
import { Header } from "../../components/header"
import { HeaderWreceipt } from "../../components/headerWreceipt"
import { Footer } from "../../components/footer"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"
import { api } from "../../services/api"
import { useState, useEffect } from "react"
import {useHandleQuantity} from "../../hooks/quantityDishContext"
import { useNavigate } from "react-router-dom"


export function Order(){
  const navigate = useNavigate() 

  const {setShoppingCartNumber, shoppingCartNumber} = useHandleQuantity()

  const [dishs, setDishs] = useState()

  const dishImgUrl = dishs ? dishs.map(dish => `${api.defaults.baseURL}/files/${dish.image_plate}`) : [];
  

  function calculateTotal() {
    let total = 0;

    if(dishs && dishs.length > 0){
      dishs.forEach((dish) =>{
        total += dish.quantity * parseFloat(dish.price.toString().replace(',','.'));
      })
    }
    return total.toFixed(2).replace('.',',')
  }

  async function removeItemShoppingCart(dishId){
    const response = await api.get("/shoppingCart")
    const shoppingCartItems = response.data


    const quantityItemDeleted = shoppingCartItems.filter((item) => (item.id === dishId)).map(item => item.quantity)

    const confirm = window.confirm("Deseja realmente excluir?")

    
    if(confirm){
      await api.delete(`/shoppingCart/${dishId}`)

      setShoppingCartNumber((prevState) => prevState - quantityItemDeleted)
      localStorage.setItem("@foodExplorer:shoppingCartNumber", JSON.parse(shoppingCartNumber - Number(quantityItemDeleted)))
    }else{
      return
    }
  }
  

  function handleGoToPayment(event){
    event.preventDefault()
    navigate("/payment")
  }

  const calculateTotalPrice = (dish) =>{
    const quantity = dish.quantity
    const priceAsNumber = parseFloat(dish.price.replace(',', '.'));
    const totalPrice = quantity * priceAsNumber;
    
    return (totalPrice.toFixed(2).replace('.', ','))
  }

  
  useEffect(() => {

    async function fetchDishs(){
      const response = await api.get("/shoppingCart")
      setDishs(response.data);
    }
    fetchDishs()

  },[removeItemShoppingCart]);



  return(
    <Container>
      <Header currentPage="order"/>
        <main>
        <NewButtonText title={"Voltar"} to="/"/>
          <h1>Meu pedido</h1>

          {
            dishs && 
            
            dishs.map((dish, index) =>(
              <li key={dish.id ? dish.id.toString() : index.toString()}>
                
                <div className="dishsContainer">
                  <img src={dishImgUrl.find(url => url.includes(dish.image_plate))} alt={dish.name} />
                  <div>
                    <h2>{dish.name}</h2>
                    <h4 className="priceH4">{calculateTotalPrice(dish)}</h4>
                    <h4>{dish.quantity} Quantidade(s)</h4>
                    <ButtonText 
                      className="newButtonText" 
                      title={"Remover item"}
                      onClick={() => { removeItemShoppingCart(dish.id)}}
                    />
                  </div>
                </div>
              </li>
              
            ))
            
              
          }


   
          <h2>Total: R$ {calculateTotal()}</h2>
          <div className="button">
            <Button 
              title={"Avançar"}
              onClick={(e) => handleGoToPayment(e)}
            />
          </div>
        </main>

      <Footer/>
    </Container>
  )
}