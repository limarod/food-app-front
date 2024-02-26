import {Container, NewButtonText} from "./styles"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import {ButtonText} from "../../components/buttonText"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"


export function Favorites(){

  const { addToCartShopping} = useAuth()
  const [data, setData] = useState()



  useEffect(() =>{
    async function fetchData(){
       const response = await api.get("/favorites")
       setData(response.data)
       console.log(response.data)
      }
    fetchData()
   

  },[])
  return(
    <Container>
      <Header/>
        <main>
        <NewButtonText title={"Voltar"} to="/"/>
          <h1>Favoritos</h1>
            {
            data &&
             data.map((item, index) => (
              
          <div className="dishsContainer" key={index}>
              
              <img src={`${api.defaults.baseURL}/files/${item.image_plate}`} alt="imagem do prato" />
              <div>
                <h2>{item.name}</h2>
                <ButtonText 
                  className="buttonOrder" 
                  title={"Adicionar ao pedido"}
                  onClick ={(event) => {event.preventDefault() ; addToCartShopping(item)}}
                />
                <ButtonText className="newButtonText" title={"Remover dos Favoritos"}
                  
                />
              </div>
          </div>
           ))
          }

         

        </main>

      <Footer/>
    </Container>
  )
}