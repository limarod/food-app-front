import { Container } from "./styles";
import { Header} from "../../components/header"
import { Footer} from "../../components/footer"
import {Input} from "../../components/input"
import {Textarea} from "../../components/textarea"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"
import {Select} from "../../components/select"
import {TagItem} from "../../components/tagItem"
import{useState} from "react"
import { api } from "../../services/api";
import {useAuth} from "../../hooks/auth"


import {AiOutlineDown} from "react-icons/ai"
  // const {dish, updateDishImg} = useAuth()
  

  // const [imgDish, setImgDish] = useState(dish.image_plate)
  // const [imgDishFile, setImgDishFile] = useState(null)

  // function handleChangeImgDish(event){
  //   const file = event.target.files[0];

  // }

export function UpdateDish(){
  return(
    <Container>
        <Header/>

      <div className="content">
        <ButtonText title={"voltar"} to="/"/>
        <h1>Editar prato</h1>

        <p>Imagem do prato</p>
        <Input 
          type="file" 
          placeholder="Selecione imagem"
          // onChange={handleChangeImgDish}
        />

        <p>Nome</p>
        <Input 
          type="text" 
          defaultValue="Salada Ceasar"
        />

        <p>Categoria</p>

        <Select icon={AiOutlineDown}/>


        <p>Ingredientes</p>
        
        <div className="newTagSection">
          <TagItem  defaultValue ="Patê" />
          <TagItem  defaultValue ="Patê" />
          <TagItem  defaultValue ="Patê" />
          <TagItem isnew  placeholder="Adicionar" />
        </div>

        <p>Preço</p>
        <Input 
        type="text" 
        placeholder="R$ 40,00"
        />
        <p>Descrição</p>

        <Textarea 
          defaultValue ="A Salada Ceasar é um opção refrescasnte para o verão "
        />
        <div className="buttonsDiv">
          <Button title={"Excluir prato"}/>
          <Button title={"Salvar alterações"} to="/"/>
        </div>
      </div>

    <Footer/>
    </Container>
  )
}