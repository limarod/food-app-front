import { Container } from "./styles";
import { Header} from "../../components/header"
import { Footer} from "../../components/footer"
import {Input} from "../../components/input"
import {Textarea} from "../../components/textarea"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"
import {Select} from "../../components/select"
import {TagItem} from "../../components/tagItem"
import { useState } from "react";
import {api} from "../../services/api"
import { useNavigate, useParams } from "react-router-dom";

import {AiOutlineDown} from "react-icons/ai"



export function NewDish(){
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [imgDishFile, setImgDishFile] = useState(null)

  const fileUploadForm = new FormData()
  fileUploadForm.append("dishImage", imgDishFile);

  function handleAddTag(){
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("")
  }

  function handleRemoveTag(tagDeleted){
    setIngredients(prevState => prevState.filter(tag => tag !== tagDeleted) )
  }

  async function handleAddNewDish(){
    

    if(newIngredient){
      return alert("Você não adicionou o ingrediente preenchido")
    }

    if(!name || !price){
      return alert(`Os campos "nome" e "preço" são obrigatórios`)
    }


    const dataDish = new FormData()

      dataDish.append("name", name);
      dataDish.append("category", category);
      dataDish.append("description", description);
      dataDish.append("price",price);
      

    if(ingredients.length > 0 ){
      ingredients.forEach((tag, index) =>{

        dataDish.append(`ingredients[${index}]`, tag)
      })
    }

    if(imgDishFile){
       dataDish.append("dishImage", imgDishFile)
    }

    
    await api.post("/menu", dataDish)


    alert("Cadastrado com sucesso.")
    navigate("/")
  }

  function handleChangeImgDish(event){
    const file = event.target.files[0];

    setImgDishFile(file);

  }


  

  return(
    <Container>
        <Header/>

      <div className="content">
        <ButtonText title={"voltar"} to="/"/>
        <h1>Novo prato</h1>

        <p>Imagem do prato</p>
        <Input 
        type="file" 
        placeholder="Selecione imagem"
        onChange={handleChangeImgDish}
        />

        <p>Nome</p>
        <Input 
          type="text" 
          placeholder="Ex: Salada Ceasar"
          onChange={e => setName(e.target.value)}
        />

        <p>Categoria</p>

        <Select 
          icon={AiOutlineDown}
          onChange={e => setCategory(e.target.value)}
        />


        <p>Ingredientes</p>
        
        <div className="newTagSection">
          {
            ingredients.map((ingredient, index) => (
              <TagItem  
                key={(index.toString())}
                value={ingredient}
                onClick={() => {handleRemoveTag(ingredient)}}
              />
            ))
          }
          <TagItem 
            isnew  
            placeholder="Adicionar"
            value={newIngredient} 
            onChange={e => setNewIngredient(e.target.value) }  
            onClick={handleAddTag}
          />
        </div>

        <p>Preço</p>
        <Input 
          type="text" 
          placeholder="R$ 00,00"
          onChange={e => setPrice(e.target.value)}
        />
        <p>Descrição</p>

        <Textarea 
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          onChange={e => setDescription(e.target.value)}
        />

        <Button title={"Salvar alterações"} onClick={handleAddNewDish}/>

      </div>

    <Footer/>
    </Container>
  )
}