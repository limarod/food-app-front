import {Container, NewButtonText} from "./styles"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import {ButtonText} from "../../components/buttonText"
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import {useHandleQuantity} from "../../hooks/quantityDishContext"
import { useParams } from "react-router-dom"


export function Favorites(){

  const { addToCartShoppingFavorite} = useHandleQuantity()
  const [data, setData] = useState()
  const params = useParams();

  async function handleremoveFavorites(id){
    const confirm = window.confirm("Deseja remover dos favoritos?")
    if(confirm){
      await api.delete(`/favorites/${id}`)
    }
  }

  useEffect(() =>{
    async function fetchData(){
       const response = await api.get("/favorites")
       setData(response.data)
      }
    fetchData()
   

  },[handleremoveFavorites])
  return(
    <Container>
      <Header/>
        <main>
        <NewButtonText title={"Voltar"} to="/"/>
          <h1>Favoritos</h1>
        <div className="container">
            {
            data &&
             data.map((item, index) => (
              
          <div className="dishsContainer" key={index}>
              <img src={`${api.defaults.baseURL}/files/${item.image_plate}`} alt="imagem do prato" />
              <div className="dataContainer">
                <h2>{item.name}</h2>
                <ButtonText 
                  className="buttonOrder" 
                  title={"Adicionar ao pedido"}
                  onClick ={(event) => addToCartShoppingFavorite(event, item )}
                />
                <ButtonText 
                  className="newButtonText" 
                  title={"Remover dos Favoritos"}
                  onClick={() => (handleremoveFavorites(item.id))}
                />
              </div>
          </div>
           ))
          }

        </div>

        </main>

      <Footer/>
    </Container>
  )
}