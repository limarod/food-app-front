import { createContext, useContext, useState, useEffect } from "react"; 
import {api} from "../services/api"


export const handleDishQuantityContext = createContext({})


function HandleQuantityProvider({children}){
    
    const[ dishsNumberOrder, setDishsNumberOrder] = useState(1)

    const [shoppingCartNumber, setShoppingCartNumber] = useState(() => {
        const storedShoppingCartNumber = localStorage.getItem("@foodExplorer:shoppingCartNumber");
        return storedShoppingCartNumber ? parseInt(storedShoppingCartNumber, 10) : 0
    })
    
    
    function updateDishsOrderNumber(event, dishId, operation){
        event.preventDefault()

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

    async function addToCartShopping(event, dish){
        event.preventDefault()
        const quantity = dishsNumberOrder[dish.id] || 1 
        
        await api.post("/shoppingCart", {
          
          dish_id: dish.id,
          quantity,
          
        })
    
        setShoppingCartNumber((prevState) => prevState + quantity)
        
        localStorage.setItem("@foodExplorer:shoppingCartNumber", shoppingCartNumber + quantity );
    
        setDishsNumberOrder(1)
    }


    async function addToCartShoppingFavorite(event, dish){
        console.log(dish)
        event.preventDefault()
        const quantity = 1 
        
        await api.post("/shoppingCart", {
          dish_id: dish.dish_id,
          quantity,
        })
    
        setShoppingCartNumber((prevState) => prevState + quantity)
        
        localStorage.setItem("@foodExplorer:shoppingCartNumber", shoppingCartNumber + quantity );
    
        setDishsNumberOrder(1)
    }
    
    return (
        <handleDishQuantityContext.Provider value={{
            updateDishsOrderNumber,
            dishsNumberOrder,
            setDishsNumberOrder,
            addToCartShopping,
            shoppingCartNumber,
            setShoppingCartNumber,
            addToCartShoppingFavorite
        }}>

        {children}
        </handleDishQuantityContext.Provider>
    )
}

function useHandleQuantity (){
    const context = useContext(handleDishQuantityContext)
    return context
  }

export {HandleQuantityProvider, useHandleQuantity}