import { Container } from "./styles";
import { Header} from "../../components/header"
import { Footer} from "../../components/footer"
import {Input} from "../../components/input"
import {Textarea} from "../../components/textarea"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"
import {Select} from "../../components/select"
import {TagItem} from "../../components/tagItem"
import { api } from "../../services/api";
import {useAuth} from "../../hooks/auth"
import { useParams, useNavigate } from "react-router-dom"
import{useState, useEffect} from "react"
import {AiOutlineDown} from "react-icons/ai"


  // const {dish, updateDishImg} = useAuth()
  

  // const [imgDish, setImgDish] = useState(dish.image_plate)
  // const [imgDishFile, setImgDishFile] = useState(null)

  // function handleChangeImgDish(event){
  //   const file = event.target.files[0];

  // }



export function UpdateDish(){

  const [data, setData] = useState(null)
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [ingredients, setIngredients] = useState()

  //Adicionar novas Tags na edição do prato
  const [ingredientsList, setIngredientsList] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const params = useParams();
  const navigate = useNavigate()


    async function handleUpdateDish(){
      //ajustar Handle update 
    const updatedIngredients = 
    [...data.ingredients.map(ingredient => ingredient.tags), ...ingredientsList]

    const dish = {
      name,
      category,
      description,
      price,
      ingredients: updatedIngredients
    }

    await api.put(`/menu/${params.id}`, dish)
    alert("Atualizado com sucesso")
    console.log(updatedIngredients)
    // navigate("/")

  }

  function handleAddTag(){
    setIngredientsList(prevState => [...prevState, newIngredient]);
    setNewIngredient("")
  }

  function handleRemoveTag(tagDeleted){

    setIngredientsList(prevState => prevState.filter(tag => tag !== tagDeleted) )
    // console.log(tagDeleted)
    setData(prevState =>{
      const updatedIngredients = prevState.ingredients.filter(ingredient => ingredient !== tagDeleted)
      console.log(prevState.ingredients)
      return{...prevState, ingredients: updatedIngredients }
    })
  }

  async function handleDeleteDish(){
    const confirm = window.confirm("Deseja realmente excluir prato do menu?")

    if(confirm){
      await api.delete(`/menu/${params.id}`)
      navigate("/")
    }
  }



  useEffect( () => {
    async function fetchDish(){
      const response = await api.get(`/menu/${params.id}`);
      
      setData(response.data);
      console.log("Data from API:", response.data)
    }
    fetchDish();

  }, [])


  return(
    <Container>
        <Header/>
      { data &&
      <main>

        <div className="content">
          <ButtonText title={"voltar"} to="/"/>
          <h1>Editar prato</h1>

          <p>Imagem do prato</p>
          <Input 
            type="file" 
            placeholder="Selecione imagem"
            // onChange={handleChangeImgDish}
          />

          <p> Nome do Prato</p>
          <Input 
            defaultValue={data?.name?? ""}
            type="text" 
            onChange={e => setName(e.target.value)}
            // defaultValue="Salada Ceasar"
          />

          <p>Categoria</p>

          <Select icon={AiOutlineDown}
            onChange={e => setCategory(e.target.value)}
          />

          
          { 
          data.ingredients && (
            <div>
              <p>Ingredientes</p>
            
            
              <div className="newTagSection">
                
                {
                  data.ingredients.map(ingredient => (
                    <li key={ingredient.id.toString()}>
                  <TagItem 
                    value={ingredient.tags}
                    // onClick={() =>{{handleRemoveTag(ingredient)}}}
                    onClick={() => {handleRemoveTag(ingredient)}}
                    // onChange={e => setIngredients(e.target.value)}
                  />
                  </li>
                  ))
                }

                                  {
                                            ingredientsList.map((ingredient, index) => (
                                              <TagItem  
                                                key={(index.toString())}
                                                value={ingredient}
                                                onClick={() => {handleRemoveTag(ingredient)}}
                                                // onChange={e => setIngredients(e.target.value)}
                                              />
                                            ))
                                  }
                  <TagItem 
                    isnew  
                    value={newIngredient}
                    onChange={e => setNewIngredient(e.target.value) }  
                    onClick={handleAddTag}
                    placeholder="Adicionar"
                  />
                
                
              </div>
            </div>
          )}
          <p>Preço</p>
          <Input 
            type="text" 
            defaultValue={data?.price??""}
            onChange={e => setPrice(e.target.value)}
            // placeholder="R$ 40,00"
          />
          <p>Descrição</p>

          <Textarea 
           defaultValue={data?.description??""}
           onChange={e => setDescription(e.target.value)}
            // defaultValue ="A Salada Ceasar é um opção refrescasnte para o verão "
          />
          <div className="buttonsDiv">
            <Button 
              title={"Excluir prato"}
              onClick={handleDeleteDish}
            />
            
            <Button 
              title={"Salvar alterações"} 
              onClick={handleUpdateDish}
              />
          </div>
        </div>
      </main>

      }
    <Footer/>
    </Container>
  )
}