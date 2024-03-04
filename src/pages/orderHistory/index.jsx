import {Container} from "./styles"
import { Footer } from "../../components/footer"
import {VscCircleFilled} from "react-icons/vsc"
import {ButtonText} from "../../components/buttonText"
import {Button} from "../../components/button"
import { Header } from "../../components/header"
import { api } from "../../services/api"
import {useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth"
import{USER_ROLE} from "../../utils/roles"


export function OrderHistory(){

  const {user} = useAuth()
  const [data, setData] = useState()
  const [orderData, setOrderData] = useState([])
  const [selectedStatus, setSelectedStatus] = useState('');

 
 
  // Primeiro, agrupe os itens do histórico de pedidos pelo order_id
const groupedOrders = orderData.reduce((acc, item) => {
  const { id, status, created_at } = item;
  
  // Se ainda não existe um objeto para esse order_id, crie um
  if (!acc[id]) {
    acc[id] = {
      id,
      status,
      created_at,
      items: [],
    };
  }

  // Adicione os detalhes do histórico de pedidos à lista de itens
  acc[id].items.push({
    name: item.name,
    quantity: item.quantity,
  });

  return acc;
}, {});


// Agora, mapeie a estrutura agrupada para renderizar a tabela
const groupedOrderArray = Object.values(groupedOrders);



async function handleStatusChangeUpdate(value, orderId){
  const status = value
  const id = orderId




  await api.put("/orders", {
    status,
    id
  })
}

function formatDate(dateTime){
  const date = new Date(dateTime);
  const options = {  hour: 'numeric', minute: 'numeric' };
  return date.toLocaleDateString('pt-BR', options);
}

function mapStatus(status) {
  switch (status) {
    case 'em_preparo':
      return 'Em preparo';
    case 'saiu_para_entrega':
      return 'Saiu para entrega';
    case'pendente': 
      return 'Pendente';
    case 'entregue':
      return 'Entregue';
  }
}

  useEffect(() =>{

    async function fetchOrders() {
      const response = await api.get("/orders");
      setOrderData(response.data);
    }


    fetchOrders();
  }, []);

  return(
    <Container>
      <Header  />
        <main>
          <h1>Pedidos</h1>
          <h1 className="largerDevice">Histórico de Pedidos</h1>

              <div className="content">
                {groupedOrderArray.map((groupedItem) => (
                  <div className="orderItems" key={groupedItem.order_id}>
              
                    <div className="statusOrder">
                      <span>Pedido {groupedItem.id} - </span>
                      <span> {formatDate(groupedItem.created_at)} - </span>

                      { [USER_ROLE.ADMIN].includes(user.role) &&
                        <select 
                          className="selectButton"
                          name={`status_${groupedItem.id}`}
                          id={`status_${groupedItem.id}`}
                          value={selectedStatus[groupedItem.id]}
                          onChange={(e) => handleStatusChangeUpdate(e.target.value, groupedItem.id)}
                        >
                          <option className="optionsButton" selected> {groupedItem.status}</option>
                          <option className="optionsButton" value={"pendente"}> Pendente </option>
                          <option className="optionsButton" value={"em_preparo"}>Em preparo</option>
                          <option className="optionsButton" value={"saiu_para_entrega"}>Saiu para entrega</option>
                          <option className="optionsButton" value={"entregue"}>Entregue</option>
                          

                        </select>
                      }

                      { [USER_ROLE.CUSTOMER].includes(user.role) &&
                        <span className="statusWraper">{mapStatus(groupedItem.status)}</span>
                      }
                    </div>
                    {groupedItem.items.map((historyItem, index) => (
                    <div className="listOrder" key={index}>
                      <span>{`${historyItem.quantity} x ${historyItem.name}` }{}</span>
                    </div>
                    ))}
                  </div>
                ))}  
          
                <div className="tableLargerDevice">
                  <table className="tableHistory">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th className="poNumber">Número do pedido</th>
                                <th>Detalhamento</th>
                                <th>Data e Hora</th>
                            </tr>
                        </thead>

                        <tbody>
                          {groupedOrderArray.map((groupedItem) => (
                            
                            <tr key={groupedItem.order_id} >
                                  <td>
                                    { [USER_ROLE.ADMIN].includes(user.role) &&
                                      <select 
                                        className="selectButton"
                                        name={`status_${groupedItem.id}`}
                                        id={`status_${groupedItem.id}`}
                                        value={selectedStatus[groupedItem.id]}
                                        onChange={(e) => handleStatusChangeUpdate(e.target.value, groupedItem.id)}
                                      >
                                        <option className="optionsButton" selected> {groupedItem.status}</option>
                                        <option className="optionsButton" value={"pendente"}> Pendente </option>
                                        <option className="optionsButton" value={"em_preparo"}>Em preparo</option>
                                        <option className="optionsButton" value={"saiu_para_entrega"}>Saiu para entrega</option>
                                        <option className="optionsButton" value={"entregue"}>Entregue</option>
                                        

                                      </select>
                                    }

                                      { [USER_ROLE.CUSTOMER].includes(user.role) &&
                                        <span className="statusWraper">{mapStatus(groupedItem.status)}</span>
                                      }
                                  </td>
                                  <td>{groupedItem.id}</td>
                                    <td>
                                        <div>
                                         {groupedItem.items.map((historyItem, index) => (
                                          <h4 className="itemsPedido">
                                            {historyItem.quantity} x {historyItem.name}
                                          </h4>
                                          ))}
                                        </div>
                                    </td>
                                    <td className="created_atHistory">{groupedItem.created_at}</td>
                              </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

              </div>
               
             

        </main>

      <Footer/>
    </Container>
  )
}