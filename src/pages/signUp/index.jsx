import { Container, Form, NewButton } from "./styles";
import{ Input} from "../../components/input"
import{ Button} from "../../components/button"
import {FiMail, FiLock, FiUser } from "react-icons/fi"
import {BiFoodMenu} from "react-icons/bi"
import { ButtonText } from "../../components/buttonText";
import { useState } from "react";
import {api} from "../../services/api"
import {useNavigate} from "react-router-dom"

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name || !email || !password){
      return(alert("Preencha todos os campos para seguir."))
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso")
      navigate("/")
    })
    .catch(error => {
      if (error.response){
        alert(error.response.data.message)
      } else{
        alert("não foi possível cadastrar usuário")
      }
    });
    

  }

  return(
    <Container>
        <Form>
          <div className="iconFood">
            <BiFoodMenu className="foodSvg"/>
            <h1>Food explorer</h1>
          </div>
          <div className="formContainer">
            <h2>Crie sua conta</h2>
             <p>Seu nome</p>
            <Input 
              type="text"
              placeholder="Exemplo: Maria da Silva"
              icon={FiUser}
              onChange={(event) => setName(event.target.value) }
              />
              <p>Email</p>
            <Input 
              type="email"
              placeholder="exemplo@exemplo.com.br"
              icon={FiMail}
              onChange={(event) => setEmail(event.target.value) }
              />
              <p>Senha</p>
            <Input
              type="password"
              placeholder="No mínimo 6 caracteres"
              icon={FiLock}
              onChange={(event) => setPassword(event.target.value) }
            />
            <NewButton  
              className="buttonSignUp"
              title={"Cadastrar"}
              onClick={handleSignUp}
            />
            <div className="p1">
            <ButtonText title={"Já tenho uma conta"} to="/"/>
            </div>
          </div>
        </Form>
        

    </Container>
  )
}