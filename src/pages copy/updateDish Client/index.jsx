import { Container } from "./styles";
import { Header} from "../../components/header"
import { Footer} from "../../components/footer"
import {Input} from "../../components/input"
import {Textarea} from "../../components/textarea"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"
import {Select} from "../../components/select"
import {TagItem} from "../../components/tagItem"

import {AiOutlineDown} from "react-icons/ai"



export function UpdateDish(){
  return(
    <Container>
        <Header/>

      <div className="content">
        <ButtonText title={"voltar"}/>
        <h1>Editar prato</h1>

        <p>Imagem do prato</p>
        <Input 
        type="file" 
        placeholder="Selecione imagem"
        />

        <p>Nome</p>
        <Input 
          type="text" 
          value="Salada Ceasar"
        />

        <p>Categoria</p>

        <Select icon={AiOutlineDown}/>


        <p>Ingredientes</p>
        
        <div className="newTagSection">
          <TagItem  value="Patê" />
          <TagItem  value="Patê" />
          <TagItem  value="Patê" />
          <TagItem isnew  placeholder="Adicionar" />
        </div>

        <p>Preço</p>
        <Input 
        type="text" 
        placeholder="R$ 40,00"
        />
        <p>Descrição</p>

        <Textarea 
          value="A Salada Ceasar é um opção refrescasnte para o verão "
        />
        <div className="buttonsDiv">
          <Button title={"Excluir prato"}/>
          <Button title={"Salvar alterações"}/>
        </div>
      </div>

    <Footer/>
    </Container>
  )
}