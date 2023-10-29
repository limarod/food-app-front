import { Container, Form, NewButton } from "./styles";
import{ Input} from "../../components/input"
import{ Button} from "../../components/button"
import{ ButtonText} from "../../components/buttonText"
import {FiMail, FiLock } from "react-icons/fi"
import {BiFoodMenu} from "react-icons/bi"

import {Link} from "react-router-dom"

export function SignIn(){
  return(
    <Container>

        <Form>
          <div className="iconFood">
            <BiFoodMenu className="foodSvg"/>
            <h1>Food explorer</h1>
          </div>
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
         <ButtonText title={"Criar uma conta"} to="/register"/>
        </div>
        </Form>
        

    </Container>
  )
}