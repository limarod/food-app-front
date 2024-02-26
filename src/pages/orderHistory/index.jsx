import {Container} from "./styles"
import { Footer } from "../../components/footer"
import {VscCircleFilled} from "react-icons/vsc"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"
import { Header } from "../../components/header"
import { api } from "../../services/api"
import {useState, useEffect } from "react"


export function OrderHistory(){

  const [data, setData] = useState()



  useEffect(() =>{
    async function fetchData(){
       const response = await api.get("/history")
       setData(response.data)
       console.log(response.data)
    }
    fetchData()
   

  },[])

  return(
    <Container>
      <Header/>
        <main>
          <h1>Pedidos</h1>
          <h1 className="largerDevice">Histórico de Pedidos</h1>
           { data &&
            data.map(item => (
          <div className="content">

            <div className="orderItems">
              
              <div className="statusOrder">
                
                <span>{item.id}</span>
                <span> <VscCircleFilled/> Pendente </span>
                <span> {item.created_at} </span>
              </div>
              <div className="listOrder">
                <span>{`${item.quantity} x ` }{item.name}</span>
              </div>
            </div>
          
            <div className="tableLargerDevice">
             <table>
                  <thead>
                      <tr>
                          <th>Status</th>
                          <th>Código</th>
                          <th>Detalhamento</th>
                          <th>Data e Hora</th>
                      </tr>
                  </thead>

                  <tbody>
                      <tr>
                          <td>Pendente</td>
                          <td>{item.id}</td>
                          <td>{`${item.quantity} x ` }{item.name}</td>
                          <td>{item.created_at}</td>
                      </tr>
                  </tbody>
              </table>
            </div>

            

          </div>
        
              ))}  

        </main>

      <Footer/>
    </Container>
  )
}