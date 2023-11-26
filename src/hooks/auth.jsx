import { createContext, useContext, useState, useEffect } from "react"; 
import {api} from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({children}){
  const [data, setData] = useState({})
  const [dishs, setDishs] = useState()
   

  async function signIn({email, password}){
    try {
      const response = await api.post("/sessions", {email, password});
      const {user, token} = response.data;

      localStorage.setItem("@foodExplorer:user", JSON.stringify(user))
      localStorage.setItem("@foodExplorer:token", token)

      api.defaults.headers.common['authorization'] = `Bearer ${token}`;
      console.log(user, token)
      setData({user, token})

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("não foi possível efetuar login")
      }
    }
  }  

  async function signOut(){
    localStorage.removeItem("@foodExplorer:token");
    localStorage.removeItem("@foodExplorer:user");

    setData({});
  } 

  async function updateProfile({user}){
    try {

      await api.put("/users", user);
      localStorage.setItem("@foodExplorer:user", JSON.stringify(user));

      setData({user, token:data.token});
      alert("Perfil atualizado com sucesso.")
      
    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("não foi possível atualizar o perfil do usuário")
      }
    }
  }

  async function updateDishImg(){
    try {
      const response = await api.get("/dishs")
      const {dish} = response.data

      console.log(dish)
      setDishs(dish)

    } catch (error) {
      console.error("Erro na obtenção de dados ")
    }
  }

    useEffect(() => {
        const token = localStorage.getItem("@foodExplorer:token");
        const user = localStorage.getItem("@foodExplorer:user");

        if(token && user){
          api.defaults.headers.common['authorization'] = `Bearer ${token}`;

          setData({
            token, 
            user: JSON.parse(user)
          })
        }
      }, [])

    return (
      <AuthContext.Provider value={{
        signIn,
        signOut,
        updateProfile,
        updateDishImg,
        user:data.user}}>
        {children}
      </AuthContext.Provider>
    )
}

function useAuth (){
  const context = useContext(AuthContext)
  return context
}

export {AuthProvider, useAuth}