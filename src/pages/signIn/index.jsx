import { Container, Form, NewButton } from "./styles";
import{ Input} from "../../components/input"
import{ Button} from "../../components/button"
import{ ButtonText} from "../../components/buttonText"
import {FiMail, FiLock } from "react-icons/fi"
import {BiFoodMenu} from "react-icons/bi"
import {useAuth} from "../../hooks/auth"
import { useState } from "react";

import {Link} from "react-router-dom"

export function SignIn(){
  const {signIn} = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  function handleSignIn(){
    signIn({email, password})
  }

  return(
    <Container>
      {/* <div className="container"> */}
        <Form>
          <div className="iconFood">
            <BiFoodMenu className="foodSvg"/>
            <h1>Food explorer</h1>
          </div>
          <div className="formContainer">
            <h2>Faça login</h2>
            <p>Email</p>
            <Input 
              type="email"
              placeholder="exemplo@exemplo.com.br"
              icon={FiMail}
              onChange={(event) => setEmail(event.target.value)}
              />
              <p>Senha</p>
            <Input
              type="password"
              placeholder="No mínimo 6 caracteres"
              icon={FiLock}
              onChange={(event) => setPassword(event.target.value)}
            />
            <NewButton  
              className="buttonSignIn"
              title={"Entrar"} onClick={handleSignIn}
            />

            <div className="p1">
            <ButtonText title={"Criar uma conta"} to="/register"/>
            </div>
          </div>
        </Form>
        {/* </div>   */}

    </Container>
  )
}