import { Container, Form, NewButton } from "./styles";
import{ Input} from "../../components/input"
import{ Button} from "../../components/button"
import {FiMail, FiLock, FiUser } from "react-icons/fi"
import {BiFoodMenu} from "react-icons/bi"
import { ButtonText } from "../../components/buttonText";

export function SignUp(){
  return(
    <Container>

        <Form>
          <div className="iconFood">
            <BiFoodMenu className="foodSvg"/>
            <h1>Food explorer</h1>
          </div>
          <p>Seu nome</p>
        <Input 
          type="text"
          placeholder="Exemplo: Maria da Silva"
          icon={FiUser}
          />
          <p>Email</p>
        <Input 
          type="email"
          placeholder="exemplo@exemplo.com.br"
          icon={FiMail}
          />
          <p>Senha</p>
        <Input
          type="password"
          placeholder="No mínimo 6 caracteres"
          icon={FiLock}

        />
        <NewButton  title={"Entrar"}/>
        <div className="p1">
         <ButtonText title={"Já tenho uma conta"} to="/"/>
        </div>
        </Form>
        

    </Container>
  )
}