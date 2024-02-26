import { createContext, useContext, useState, useEffect } from "react"; 
import {api} from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({})
  const [dishs, setDishs] = useState()
   
  const [shoppingCartNumber, setShoppingCartNumber] = useState(() => {
    const storedShoppingCartNumber = localStorage.getItem("@foodExplorer:shoppingCartNumber");
    return storedShoppingCartNumber ? parseInt(storedShoppingCartNumber, 10) : 0
  })

  const[ dishsNumberOrder, setDishsNumberOrder] = useState(1)




  async function signIn({email, password}){
    try {
      const response = await api.post("/sessions",
      {email, password},
      {withCredentials: true}
      );
      const {user} = response.data;

      localStorage.setItem("@foodExplorer:user", JSON.stringify(user))

      setData({user})

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("não foi possível efetuar login")
      }
    }
  }  

  async function signOut(){
    localStorage.removeItem("@foodExplorer:user");

    setData({});
    document.body.classList.remove("menu-open")
  } 

  async function updateProfile({user}){
    try {

      await api.put("/users", user);
      localStorage.setItem("@foodExplorer:user", JSON.stringify(user));

      setData({user});
      alert("Perfil atualizado com sucesso.")
      
    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("não foi possível atualizar o perfil do usuário")
      }
    }
  }

  async function updateDishImg(){
    try {
      const response = await api.get("/dishs")
      const {dish} = response.data

      console.log(dish)
      setDishs(dish)

    } catch (error) {
      console.error("Erro na obtenção de dados ")
    }
  }

  function updateDishsOrderNumber(dishId, operation){
    setDishsNumberOrder((prevState) => { 
      const currentQuantity = prevState[dishId] || 1;

      let updatedState
    
      if (operation === 'add'){
        updatedState = {...prevState, [dishId]: currentQuantity + 1};
      }else if(operation === 'minus' && currentQuantity > 0){
        updatedState = {...prevState, [dishId]: currentQuantity - 1};
      }
     

      return {...prevState, ...updatedState}
    })
  }

  async function addToCartShopping(dish){
    setShoppingCartNumber((prevState) => prevState + 1 )
    const quantity = dishsNumberOrder[dish.id] || 1 
    
    await api.post("/shoppingCart", {
      name: dish.name,
      price: dish.price,
      image_plate: dish.image_plate,
      quantity,
    })

    localStorage.setItem("@foodExplorer:shoppingCartNumber", shoppingCartNumber + 1);
    setDishsNumberOrder(1)
  }




  useEffect(() => {
        const user = localStorage.getItem("@foodExplorer:user");

        if(user){

          setData({
            user: JSON.parse(user)
          })
        }
      }, [])

    return (
      <AuthContext.Provider value={{
        addToCartShopping,
        shoppingCartNumber,
        setShoppingCartNumber,
        signIn,
        signOut,
        updateProfile,
        updateDishImg,
        updateDishsOrderNumber,
        dishsNumberOrder,
        user:data.user}}>
        {children}
      </AuthContext.Provider>
    )
}

function useAuth (){
  const context = useContext(AuthContext)
  return context
}

export {AuthProvider, useAuth}