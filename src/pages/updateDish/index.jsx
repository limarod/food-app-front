import { Container, NewButton } from "./styles";
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
import{InputImage} from "../../components/inputImage"
import { PiUploadSimpleBold } from "react-icons/pi";


export function UpdateDish(){

  const [data, setData] = useState(null)
  const [name, setName] = useState()
  const [category, setCategory] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [imgDishFile, setImgDishFile] = useState(null)

  const [ingredientsList, setIngredientsList] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const params = useParams();
  const navigate = useNavigate()


  async function handleUpdateDish(){
      //ajustar Handle update 
    
    const existingTagsResponse = data.ingredients.map(ingredient => ingredient.tags);
    const uniqueNewIngredients = ingredientsList.filter(tag => {
      const tagLowerCase = tag.toLowerCase();
      return !existingTagsResponse.some(existingTag => existingTag === tagLowerCase)})
      
    const dish = {
      name,
      category,
      description,
      price,
    }

    if(uniqueNewIngredients.length > 0){
      dish.ingredients = uniqueNewIngredients
    }

    if(imgDishFile){
      const fileUploadForm = new FormData()
      fileUploadForm.append("dishImage", imgDishFile);

      const response = await api.patch(`/menu/dishImage/${params.id}`, fileUploadForm );
      dish.image_plate = response.data.dishImage
    }
    
    if(newIngredient){
      return alert("Existem ingredientes não adicionados")
    }

    await api.put(`/menu/${params.id}`, dish)

    alert("Atualizado com sucesso")
    // navigate("/")

  }

  async function handleAddTag(){

    const existingTagsResponse = data.ingredients.map(ingredient => ingredient.tags.toLowerCase()); 
    const newIngredientToCompare = newIngredient.toLowerCase()
    const newIngredientTrim = newIngredient.trim()


    if(existingTagsResponse.includes(newIngredientToCompare)){
      setNewIngredient("")
      return alert("Você está tentando adicionar um ingrediente já existente")
      
    }
    
    if(ingredientsList.includes(newIngredientToCompare)){
      setNewIngredient("")
      return alert("Você está tentando adicionar um ingrediente já existente")
      
    }

    if(newIngredient === "" || newIngredient === undefined){
        return alert("Não é possível inserir um ingrediente `vazio`")
      }

    setIngredientsList(prevState => [...prevState, newIngredientTrim]);
    setNewIngredient("")
  }

  async function handleRemoveTag(tagDeleted){

    await api.delete(`/ingredients/${tagDeleted}`)

    setIngredientsList(prevState => prevState.filter(tag => tag !== tagDeleted) )

    setData( (prevState) =>{

      const updatedIngredients = prevState.ingredients.filter(ingredient => ingredient.id !== tagDeleted)
      
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

  function handleChangeImgDish(event){
    const file = event.target.files[0];
    // const imagePreview = URL.createObjectURL(file);

    setImgDishFile(file);


    // setImgDish(imagePreview)

  }


  useEffect( () => {
    async function fetchDish(){
      const response = await api.get(`/menu/${params.id}`);
      
      setData(response.data);
    }
    fetchDish();

  }, [])


  return(
    <Container>
        <Header/>
      { data &&
      <main>

        <div className="content">
          <ButtonText className="buttonText" title={"<-- Voltar"} to="/"/>
          <h1>Editar prato</h1>

          <div className="LargerDevices">
           
            <div className="titleEditFlex inputImg">
              <p>Imagem do prato</p>
              <label htmlFor="inputLabel" className="imageInput" > 
                 
                <span className="selectImage">Selecione imagem </span>
                <span className="selectImageIcon"><PiUploadSimpleBold/></span>
                <InputImage 
                  id="inputLabel"
                  type="file" 
                  placeholder="Selecione imagem"
                  onChange={handleChangeImgDish}
                >
                </InputImage>
               
              </label>
            </div>
      

            <div className="titleEditFlex nameInputWrapper">
              <p> Nome do Prato</p>
              <Input 
                className="nameInput"
                defaultValue={data.name}
                type="text" 
                onChange={e => setName(e.target.value)}
                // defaultValue="Salada Ceasar"
              />
            </div>
            
            <div className="titleEditFlex">
              <p>Categoria</p>
            <label htmlFor="selectLabel" className="selectInput">
              <span className="selectIcon">  < AiOutlineDown/> </span>
                <Select 
                  id="selectLabel"
                  className="categoryInput"
                  // icon={AiOutlineDown}
                  onChange={e => setCategory(e.target.value)}
                />
              </label>
            </div>

          </div>

          
            { 
            data.ingredients && (
            <div className="LargerDevices">
              
              <div className="LargerDevices2">
                
                    <p>Ingredientes</p>
                <div className="newTagSection">
                   
                   
              
              
               
                  
                  {
                    data.ingredients.map(ingredient => (
                      <li key={ingredient.id.toString()}>
                    <TagItem 
                      value={ingredient.tags}
                      // onClick={() =>{{handleRemoveTag(ingredient)}}}
                      onClick={() => {handleRemoveTag(ingredient.id)}}
                    
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

                <div className="titleEditFlex priceBox">
                  <p>Preço</p>
                    <Input 
                      className="priceInput"
                      type="text" 
                      defaultValue={data?.price??""}
                      onChange={e => setPrice(e.target.value)}
                      // placeholder="R$ 40,00"
                    />
                  </div>


              </div>
              )}
                <div>
                  <p>Descrição</p>

                  <Textarea 
                    className="descriptionInput"
                    defaultValue={data?.description??""}
                    onChange={e => setDescription(e.target.value)}
                    // defaultValue ="A Salada Ceasar é um opção refrescasnte para o verão "
                  />
                </div>

        


            <div className="buttonsDiv">
                <NewButton 
                  className="removeButton"
                  title={"Excluir prato"}
                  onClick={handleDeleteDish}
                />
                
                <NewButton 
                  className="saveButton"
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