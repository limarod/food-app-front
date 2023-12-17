
import { Container, NewButton, NewButtonText } from "./styles"
import {Header} from "../../components/header"
import {Footer} from "../../components/footer"
import {Tag} from "../../components/tag"
import dishimage from "../../assets/Dish - Salada Ravanello.png"
import { useParams, useNavigate } from "react-router-dom"
import{useState, useEffect} from "react"
import { api } from "../../services/api";




export function Details(){

  const [data, setData] = useState(null)

  const params = useParams();
  const navigate = useNavigate()

  function handleUpdateDish(dishId){
    navigate(`/updateDish/${dishId}`)
  }


  
  useEffect(() =>{
    async function fetchDishDetails(){
      const response = await api.get(`/menu/${params.id}`);
      
      setData(response.data);
      console.log(data)
    }

    fetchDishDetails();

  }, [])

  
  if(!data){
    return null
  }

  const dishImgUrl = `${api.defaults.baseURL}/files/${data.image_plate}`

  return (
    <Container>
      <Header/>

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
                
            <NewButton 
              title={"Editar prato"}
              onClick ={(event) => {
                event.preventDefault();
                handleUpdateDish(data.id)}}
           />
           
          
          
          </div> 
          
        }
      <Footer/>
    </Container>
  )
}