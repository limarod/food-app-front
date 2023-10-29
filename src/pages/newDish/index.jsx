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



export function NewDish(){
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
        />

        <p>Nome</p>
        <Input 
          type="text" 
          placeholder="Ex: Salada Ceasar"
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
        placeholder="R$ 00,00"
        />
        <p>Descrição</p>

        <Textarea 
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
        />

        <Button title={"Salvar alterações"} to="/"/>

      </div>

    <Footer/>
    </Container>
  )
}